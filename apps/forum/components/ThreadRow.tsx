"use client";

// 帖子列表里的一行：标题 + 作者 · 时间 · 回复数。整行可点击进入帖子详情。
// 列表观感（非按钮）：悬停淡入面板底色，克制、像在读一份列表。

import Link from "next/link";
import type { Thread } from "@/lib/forum-data";

export function ThreadRow({
  thread,
  repliesLabel,
  boardName,
}: {
  thread: Thread;
  repliesLabel: string;
  boardName?: string; // 跨板块列表（如首页「最新讨论」）才显示所属板块
}) {
  return (
    <Link
      href={`/t/${thread.id}`}
      className="group block rounded-2xl border border-transparent px-4 py-4 transition-colors hover:border-[var(--page-hairline)] hover:bg-[var(--page-panel)]"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="truncate text-base font-medium text-[var(--page-fg)] transition-opacity group-hover:opacity-80">
          {thread.title}
        </h3>
        <span className="shrink-0 text-xs text-[var(--page-fg-soft)]">
          {thread.replies.length} {repliesLabel}
        </span>
      </div>
      <div className="mt-1.5 flex items-center gap-2 text-xs text-[var(--page-fg-soft)]">
        {boardName && (
          <>
            <span className="rounded-full bg-[var(--page-panel)] px-2 py-0.5 ring-1 ring-[var(--page-hairline)]">
              {boardName}
            </span>
            <span aria-hidden>·</span>
          </>
        )}
        <span>{thread.author}</span>
        <span aria-hidden>·</span>
        <span>{thread.time}</span>
      </div>
    </Link>
  );
}
