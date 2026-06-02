-- ============================================================
-- 迁移 002 · 改为抖音式扁平评论流
-- 用法：Supabase 控制台 → SQL Editor → 全选粘贴本文件 → Run。
-- 非破坏性：保留 parent_reply_id（记录「回复了谁」用于显示「回复 @某人」），
--          去掉「最多两层」限制 → 谁都能回复谁、不分层。
-- 不管之前有没有跑过迁移 001，这段都能安全运行（幂等）。
-- ============================================================

-- 1) 确保「回复对象」列存在（没跑过 001 时在这里补上）
alter table public.replies
  add column if not exists parent_reply_id uuid references public.replies(id) on delete cascade;

create index if not exists replies_parent_idx on public.replies (parent_reply_id);

-- 2) 去掉「最多两层」的限制：删掉深度校验触发器与函数
drop trigger if exists replies_depth_guard on public.replies;
drop function if exists public.check_reply_depth();
