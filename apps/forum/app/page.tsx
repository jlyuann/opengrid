"use client";

// 论坛首页（侧边栏布局下的主区）：欢迎标题 + 「最新讨论」列表。
// 板块入口已移到左侧 Discord 式侧边栏，这里不再放大卡片。

import { Reveal } from "@opengrid/ui";
import { useCopy } from "@/lib/useCopy";
import { ThreadRow } from "@/components/ThreadRow";
import { latestThreads } from "@/lib/forum-data";

export default function ForumHome() {
  const t = useCopy();
  const boardName = (slug: string) =>
    t.boards.find((b) => b.slug === slug)?.name ?? slug;

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
        <div className="divide-y divide-[var(--page-hairline)]">
          {latestThreads(6).map((thread) => (
            <ThreadRow
              key={thread.id}
              thread={thread}
              repliesLabel={t.board.repliesLabel}
              boardName={boardName(thread.board)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
