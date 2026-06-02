"use client";

// 板块页主体：板块标题 + 简介 + 帖子列表 + 发帖按钮（占位，2c 接写入）。
// slug 由服务端路由传入；帖子来自 Supabase；板块名/简介经 useCopy 双语解析。

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, buttonMotion, useLanguage } from "@opengrid/ui";
import { useCopy } from "@/lib/useCopy";
import { ThreadRow } from "@/components/ThreadRow";
import { fetchThreadsByBoard, type ThreadSummary } from "@/lib/forum-queries";

export function BoardView({ slug }: { slug: string }) {
  const t = useCopy();
  const { lang } = useLanguage();
  const board = t.boards.find((b) => b.slug === slug);

  const [threads, setThreads] = useState<ThreadSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchThreadsByBoard(slug)
      .then(setThreads)
      .catch(() => setThreads([]))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-[var(--page-fg)] md:py-16">
      <Reveal>
        <Link
          href="/"
          className="text-sm text-[var(--page-fg-soft)] transition-opacity hover:opacity-60"
        >
          ← {t.board.back}
        </Link>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {board?.name ?? slug}
            </h1>
            {board && (
              <p className="mt-3 max-w-xl leading-relaxed text-[var(--page-fg-soft)]">
                {board.desc}
              </p>
            )}
          </div>
          <motion.button
            {...buttonMotion}
            title={t.board.newThreadHint}
            className="shrink-0 rounded-full bg-[var(--page-fg)] px-4 py-2 text-sm font-medium text-[var(--page-bg)]"
          >
            {t.board.newThread}
          </motion.button>
        </div>
      </Reveal>

      <div className="mt-10 divide-y divide-[var(--page-hairline)]">
        {loading ? (
          <p className="py-10 text-center text-sm text-[var(--page-fg-soft)]">
            {t.loading}
          </p>
        ) : threads.length === 0 ? (
          <p className="py-10 text-center text-[var(--page-fg-soft)]">
            {t.board.empty}
          </p>
        ) : (
          threads.map((thread) => (
            <ThreadRow
              key={thread.id}
              thread={thread}
              lang={lang}
              repliesLabel={t.board.repliesLabel}
            />
          ))
        )}
      </div>
    </main>
  );
}
