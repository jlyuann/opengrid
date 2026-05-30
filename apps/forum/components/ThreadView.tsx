"use client";

// 帖子详情主体：返回板块 → 主楼（标题 + 作者/时间 + 正文）→ 全部回复 → 回复框（占位）。
// thread 为纯数据，由服务端路由查好后传入；标签与板块名经 useCopy 双语解析。

import Link from "next/link";
import { Reveal } from "@opengrid/ui";
import { useCopy } from "@/lib/useCopy";
import { ReplyComposer } from "@/components/ReplyComposer";
import type { Thread } from "@/lib/forum-data";

export function ThreadView({ thread }: { thread: Thread }) {
  const t = useCopy();
  const board = t.boards.find((b) => b.slug === thread.board);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-[var(--page-fg)] md:py-16">
      <Reveal>
        <Link
          href={`/b/${thread.board}`}
          className="text-sm text-[var(--page-fg-soft)] transition-opacity hover:opacity-60"
        >
          ← {t.thread.backToBoard}
          {board ? ` · ${board.name}` : ""}
        </Link>

        {/* 主楼 */}
        <article className="mt-5">
          <h1 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            {thread.title}
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-[var(--page-fg-soft)]">
            <span className="font-medium text-[var(--page-fg)]">
              {thread.author}
            </span>
            <span>{thread.handle}</span>
            <span aria-hidden>·</span>
            <span>{thread.time}</span>
          </div>
          <p className="mt-6 whitespace-pre-line text-[1.0625rem] leading-[1.85] text-[var(--page-fg-soft)]">
            {thread.body}
          </p>
        </article>
      </Reveal>

      {/* 回复 */}
      <section className="mt-12">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--page-fg-soft)]">
          {t.thread.repliesTitle} · {thread.replies.length}
        </h2>
        <div className="mt-4 divide-y divide-[var(--page-hairline)]">
          {thread.replies.map((r) => (
            <div key={r.id} className="py-5">
              <div className="flex items-center gap-2 text-sm text-[var(--page-fg-soft)]">
                <span className="font-medium text-[var(--page-fg)]">
                  {r.author}
                </span>
                <span>{r.handle}</span>
                <span aria-hidden>·</span>
                <span>{r.time}</span>
              </div>
              <p className="mt-2 leading-[1.8] text-[var(--page-fg-soft)]">
                {r.body}
              </p>
            </div>
          ))}
        </div>

        {/* 回复框（占位，第②步接 Supabase 后启用） */}
        <ReplyComposer />
      </section>
    </main>
  );
}
