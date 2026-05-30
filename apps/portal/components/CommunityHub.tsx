"use client";

// 车友社区（占位预览）：Discord 频道式 + Instagram 动态式 融合。
// 左侧频道栏可点击筛选（前端可交互），右侧是可刷的动态流（含配图占位）。
// 真实登录 / 发帖 / 点赞留到第二阶段接 Supabase；现在的动态为示意内容。

import { useState } from "react";
import { motion } from "framer-motion";
import { useCopy } from "@/lib/useCopy";
import { springSnappy } from "@opengrid/ui";
import { Reveal } from "@opengrid/ui";

export function CommunityHub() {
  const t = useCopy().community;
  const [active, setActive] = useState<string>("all");

  const nameOf = (id: string) =>
    t.channels.find((c) => c.id === id)?.name ?? id;
  const posts =
    active === "all" ? t.posts : t.posts.filter((p) => p.channel === active);

  const tabs = [{ id: "all", name: t.allLabel, desc: "" }, ...t.channels];

  return (
    <section className="pb-28 sm:pb-32 text-[var(--page-fg)]">
      <div className="mx-auto max-w-6xl px-6">
        {/* 预览标记：明确这是示意，社区尚未上线 */}
        <Reveal className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--page-panel)] px-4 py-1.5 text-xs font-medium text-[var(--page-fg-soft)] ring-1 ring-[var(--page-hairline)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--page-fg)]" />
            {t.previewBadge}
          </span>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          {/* 频道栏（Discord 式） */}
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-[var(--page-hairline)] bg-[var(--page-panel)] p-4">
              <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--page-fg-soft)]">
                {t.channelsTitle}
              </p>
              <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
                {tabs.map((c) => {
                  const on = active === c.id;
                  return (
                    <motion.button
                      key={c.id}
                      onClick={() => setActive(c.id)}
                      whileTap={{ scale: 0.96 }}
                      transition={springSnappy}
                      className={`flex shrink-0 flex-col rounded-2xl px-3 py-2 text-left transition-colors lg:shrink ${
                        on
                          ? "bg-[var(--page-fg)] text-[var(--page-bg)]"
                          : "hover:bg-[color-mix(in_srgb,var(--page-fg)_8%,transparent)]"
                      }`}
                    >
                      <span className="whitespace-nowrap text-sm font-medium">
                        {c.id === "all" ? c.name : `# ${c.name}`}
                      </span>
                      {c.desc && (
                        <span
                          className={`whitespace-nowrap text-xs ${
                            on
                              ? "text-[color-mix(in_srgb,var(--page-bg)_70%,transparent)]"
                              : "text-[var(--page-fg-soft)]"
                          }`}
                        >
                          {c.desc}
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* 动态流（Instagram 式） */}
          <div>
            {/* 发布框（占位，未开放） */}
            <Reveal>
              <div className="mb-6 rounded-3xl border border-[var(--page-hairline)] bg-[var(--page-panel)] p-4">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 shrink-0 rounded-full bg-[color-mix(in_srgb,var(--page-fg)_18%,transparent)]" />
                  <span className="flex-1 text-sm text-[var(--page-fg-soft)]">
                    {t.composer}
                  </span>
                  <span className="rounded-full bg-[color-mix(in_srgb,var(--page-fg)_30%,transparent)] px-4 py-1.5 text-sm font-medium text-[var(--page-bg)] opacity-60">
                    {t.post}
                  </span>
                </div>
                <p className="mt-2 pl-[52px] text-xs text-[var(--page-fg-soft)]">
                  {t.composerNote}
                </p>
              </div>
            </Reveal>

            {/* 动态卡片 */}
            <div className="flex flex-col gap-6">
              {posts.map((p, i) => (
                <Reveal key={p.handle + p.time} delay={(i % 3) * 0.08}>
                  <article className="overflow-hidden rounded-3xl border border-[var(--page-hairline)] bg-[var(--page-panel)]">
                    <div className="flex items-center gap-3 p-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--page-fg)_18%,transparent)] text-sm font-semibold">
                        {p.author.slice(0, 1)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold">
                          {p.author}
                          <span className="ml-2 font-normal text-[var(--page-fg-soft)]">
                            {p.handle}
                          </span>
                        </p>
                        <p className="text-xs text-[var(--page-fg-soft)]">
                          # {nameOf(p.channel)} · {p.time}
                        </p>
                      </div>
                    </div>
                    <p className="px-4 pb-3 leading-relaxed">{p.text}</p>
                    {/* 配图占位 */}
                    <div className="mx-4 mb-4 flex aspect-video items-center justify-center rounded-2xl bg-[linear-gradient(135deg,color-mix(in_srgb,var(--page-fg)_12%,transparent),color-mix(in_srgb,var(--page-fg)_3%,transparent))] ring-1 ring-inset ring-[var(--page-hairline)]">
                      <span className="text-xs text-[var(--page-fg-soft)]">
                        {t.mediaLabel}
                      </span>
                    </div>
                    <div className="flex items-center gap-5 border-t border-[var(--page-hairline)] px-4 py-3 text-sm text-[var(--page-fg-soft)]">
                      <span>♥ {p.likes}</span>
                      <span>💬 {p.comments}</span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
