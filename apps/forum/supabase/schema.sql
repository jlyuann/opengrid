-- ============================================================
-- OpenGrid 论坛 · 数据库结构
-- 用法：在 Supabase 控制台左侧「SQL Editor」里，把【整个文件】从头到尾
--      全选复制粘贴 → Run。务必复制完整，否则只会建一半。
-- 开头的 drop 段让本文件可以「安全重跑」：先清掉旧的再重建，不报错。
-- 注意：重跑会清空 threads / replies 里的数据（现在没真实数据，无损失）。
-- ============================================================

-- 0) 先清掉旧对象（可安全重跑）。cascade 会连带删掉依赖的策略/触发器。
drop trigger if exists on_auth_user_created on auth.users;
drop function if exists public.handle_new_user() cascade;
drop table if exists public.replies  cascade;
drop table if exists public.threads  cascade;
drop table if exists public.profiles cascade;

-- 1) 用户资料表：与 auth.users 一一对应，存「用户名」。
--    注册时由下方触发器自动建一行；handle（@用户名）由前端拼，不入库。
create table public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  username   text unique not null,
  created_at timestamptz not null default now()
);

-- 2) 帖子表
create table public.threads (
  id         uuid primary key default gen_random_uuid(),
  board      text not null,                                  -- 板块 slug：karting / moto / racing
  title      text not null,
  body       text not null,
  author_id  uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now()
);

-- 3) 回帖表
create table public.replies (
  id         uuid primary key default gen_random_uuid(),
  thread_id  uuid not null references public.threads(id) on delete cascade,
  body       text not null,
  author_id  uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now()
);

-- 常用查询的索引：按板块取最新帖、按帖取回帖
create index threads_board_created_idx on public.threads (board, created_at desc);
create index replies_thread_created_idx on public.replies (thread_id, created_at);

-- ============================================================
-- 行级安全（RLS）：默认开启后「没策略 = 谁都不能动」，再逐条放开。
--   读：所有人可读（论坛公开）
--   写：登录用户只能以「自己的身份」发帖 / 回帖，只能改删自己的内容
-- ============================================================
alter table public.profiles enable row level security;
alter table public.threads  enable row level security;
alter table public.replies  enable row level security;

create policy "profiles 所有人可读" on public.profiles for select using (true);
create policy "threads 所有人可读"  on public.threads  for select using (true);
create policy "replies 所有人可读"  on public.replies  for select using (true);

create policy "只能发自己的帖" on public.threads
  for insert with check (auth.uid() = author_id);
create policy "只能改自己的帖" on public.threads
  for update using (auth.uid() = author_id);
create policy "只能删自己的帖" on public.threads
  for delete using (auth.uid() = author_id);

create policy "只能发自己的回帖" on public.replies
  for insert with check (auth.uid() = author_id);
create policy "只能改自己的回帖" on public.replies
  for update using (auth.uid() = author_id);
create policy "只能删自己的回帖" on public.replies
  for delete using (auth.uid() = author_id);

-- ============================================================
-- 注册时自动建 profile：新用户写入 auth.users 后，从注册元数据
-- （raw_user_meta_data.username，由前端 signUp 时带上）取用户名建资料行。
-- security definer：以函数所有者权限运行，绕过 RLS 完成写入。
-- 若用户名重复，触发器因 unique 约束失败 → 整个注册回滚（不会留下半个账号）。
-- ============================================================
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username)
  values (new.id, new.raw_user_meta_data ->> 'username');
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
