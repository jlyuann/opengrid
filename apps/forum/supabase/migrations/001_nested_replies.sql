-- ============================================================
-- 迁移 001 · 楼中楼（两层回复）
-- 用法：Supabase 控制台 → SQL Editor → 全选粘贴本文件 → Run。
-- 非破坏性：只给 replies 加一列 + 索引 + 两层限制，
--          不会动你已经发的帖子和回帖。可安全重跑。
-- ============================================================

-- 1) 加「父回复」列：为空 = 第一层；指向某条回帖 = 第二层（楼中楼）。
alter table public.replies
  add column if not exists parent_reply_id uuid references public.replies(id) on delete cascade;

-- 2) 按父回帖取楼中楼的索引
create index if not exists replies_parent_idx on public.replies (parent_reply_id);

-- 3) 限制最多两层：被回复的那条本身不能已经是第二层回复。
create or replace function public.check_reply_depth()
returns trigger language plpgsql as $$
begin
  if new.parent_reply_id is not null and exists (
    select 1 from public.replies
    where id = new.parent_reply_id and parent_reply_id is not null
  ) then
    raise exception '回复最多两层';
  end if;
  return new;
end;
$$;

drop trigger if exists replies_depth_guard on public.replies;
create trigger replies_depth_guard
  before insert on public.replies
  for each row execute function public.check_reply_depth();
