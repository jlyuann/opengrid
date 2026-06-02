"use client";

// 论坛首页（侧边栏布局下的主区）：欢迎标题 + 「最新讨论」列表。
// 帖子来自 Supabase（浏览器端查询），首次进页面拉一次。

import { useEffect, useState } from "react";
import { Reveal, useLanguage } from "@opengrid/ui";
import { useCopy } from "@/lib/useCopy";
import { ThreadRow } from "@/components/ThreadRow";
import { fetchLatestThreads, type ThreadSummary } from "@/lib/forum-queries";

export default function ForumHome() {
  const t = useCopy();
  const { lang } = useLanguage();
  const boardName = (slug: string) =>
    t.boards.find((b) => b.slug === slug)?.name ?? slug;

  const [threads, setThreads] = useState<ThreadSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestThreads(6)
      .then(setThreads)
      .catch(() => setThreads([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-[var(--page-fg)] md:py-16">
      {/* 欢迎标题 */}
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--page-fg-soft)]">
          {t.home.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.home.title}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--page-fg-soft)]">
          {t.home.subtitle}
        </p>
      </Reveal>

      {/* 最新讨论 */}
      <section className="mt-12">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--page-fg-soft)]">
          {t.home.latestTitle}
        </h2>
        {loading ? (
          <p className="py-10 text-center text-sm text-[var(--page-fg-soft)]">
            {t.loading}
          </p>
        ) : threads.length === 0 ? (
          <p className="py-10 text-center text-[var(--page-fg-soft)]">
            {t.home.empty}
          </p>
        ) : (
          <div className="divide-y divide-[var(--page-hairline)]">
            {threads.map((thread) => (
              <ThreadRow
                key={thread.id}
                thread={thread}
                lang={lang}
                repliesLabel={t.board.repliesLabel}
                boardName={boardName(thread.board)}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
