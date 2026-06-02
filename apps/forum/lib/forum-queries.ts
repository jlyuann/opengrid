// 论坛数据查询（浏览器端，读 Supabase）。
// 替代原 forum-data.ts 的假数据：帖子/回帖来自数据库，作者名来自 profiles。
// 帖子公开可读（RLS: select using(true)），所以用 anon 客户端即可读取。
//
// 返回的字段里时间是原始 ISO 字符串（createdAt）；显示成「2 小时前」由
// formatRelativeTime 按当前语言现算，避免切换语言要重新查库。

import { createClient } from "@/lib/supabase/client";
import type { Lang } from "@opengrid/ui";

export type ThreadSummary = {
  id: string;
  board: string;
  title: string;
  authorName: string; // 作者用户名（profiles.username）
  authorHandle: string; // @用户名
  createdAt: string; // ISO 时间
  replyCount: number;
};

export type ReplyItem = {
  id: string;
  authorName: string;
  authorHandle: string;
  createdAt: string;
  body: string;
};

export type ThreadDetail = ThreadSummary & {
  body: string;
  replies: ReplyItem[];
};

// Supabase 嵌套查询返回的原始行（author 经 profiles 外键内联）。
type AuthorRel = { username: string } | { username: string }[] | null;

const handleOf = (username: string) => `@${username}`;
// 内联关系在类型上可能是对象或数组，统一取 username（异常时回退占位）。
const nameOf = (author: AuthorRel): string => {
  if (!author) return "anonymous";
  return Array.isArray(author) ? (author[0]?.username ?? "anonymous") : author.username;
};

function toSummary(row: {
  id: string;
  board: string;
  title: string;
  created_at: string;
  author: AuthorRel;
  replies: { count: number }[];
}): ThreadSummary {
  const name = nameOf(row.author);
  return {
    id: row.id,
    board: row.board,
    title: row.title,
    authorName: name,
    authorHandle: handleOf(name),
    createdAt: row.created_at,
    replyCount: row.replies?.[0]?.count ?? 0,
  };
}

// 最新讨论（跨板块，按时间倒序取前 n 条）
export async function fetchLatestThreads(n: number): Promise<ThreadSummary[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("threads")
    .select("id, board, title, created_at, author:profiles(username), replies(count)")
    .order("created_at", { ascending: false })
    .limit(n);
  if (error) throw error;
  return (data ?? []).map(toSummary);
}

// 某板块的帖子列表（按时间倒序）
export async function fetchThreadsByBoard(slug: string): Promise<ThreadSummary[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("threads")
    .select("id, board, title, created_at, author:profiles(username), replies(count)")
    .eq("board", slug)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(toSummary);
}

// 发帖：写入一条 threads 记录，返回新帖 id。
// author_id 必须等于当前登录用户（RLS：with check auth.uid() = author_id），
// 浏览器客户端会自动带上用户 session，无需手动设置鉴权头。
export async function createThread(input: {
  board: string;
  title: string;
  body: string;
  authorId: string;
}): Promise<string> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("threads")
    .insert({
      board: input.board,
      title: input.title,
      body: input.body,
      author_id: input.authorId,
    })
    .select("id")
    .single();
  if (error) throw error;
  return data.id as string;
}

// 单帖详情 + 全部回帖（回帖按时间正序）
export async function fetchThread(id: string): Promise<ThreadDetail | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("threads")
    .select(
      "id, board, title, body, created_at, author:profiles(username), replies(id, body, created_at, author:profiles(username))",
    )
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  if (!data) return null;

  const name = nameOf(data.author as AuthorRel);
  const replies: ReplyItem[] = (
    (data.replies as {
      id: string;
      body: string;
      created_at: string;
      author: AuthorRel;
    }[]) ?? []
  )
    .map((r) => {
      const rn = nameOf(r.author);
      return {
        id: r.id,
        authorName: rn,
        authorHandle: handleOf(rn),
        createdAt: r.created_at,
        body: r.body,
      };
    })
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  return {
    id: data.id,
    board: data.board,
    title: data.title,
    body: data.body as string,
    authorName: name,
    authorHandle: handleOf(name),
    createdAt: data.created_at,
    replyCount: replies.length,
    replies,
  };
}

// ISO 时间 → 「刚刚 / N 分钟前 / N 小时前 / N 天前 / 日期」，按语言。
export function formatRelativeTime(iso: string, lang: Lang): string {
  const then = new Date(iso).getTime();
  const sec = Math.max(0, Math.floor((Date.now() - then) / 1000));
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const day = Math.floor(hr / 24);
  if (lang === "zh") {
    if (sec < 60) return "刚刚";
    if (min < 60) return `${min} 分钟前`;
    if (hr < 24) return `${hr} 小时前`;
    if (day < 7) return `${day} 天前`;
    return new Date(iso).toLocaleDateString("zh-CN");
  }
  if (sec < 60) return "just now";
  if (min < 60) return `${min} min ago`;
  if (hr < 24) return `${hr} h ago`;
  if (day < 7) return `${day} d ago`;
  return new Date(iso).toLocaleDateString("en-US");
}
