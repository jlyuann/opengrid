"use client";

// F1 入门区：透明背景（透出整页车队色）+ 六张知识卡片，悬停时轻微上浮（苹果质感）。
// 卡片可点击 → 全屏阅读器展开该主题的长文（衬线排版）。

import { useState } from "react";
import { useCopy } from "@/lib/useCopy";
import { Reveal } from "@opengrid/ui";
import {
  Reader,
  ArticleTitle,
  ArticleLead,
  ArticleP,
  SectionLabel,
} from "@opengrid/ui";

export function Guide() {
  const t = useCopy().guide;
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? null : t.cards[selected];

  return (
    <section id="guide" className="py-28 sm:py-36 text-[var(--page-fg)]">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--page-fg-soft)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {t.title}
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-[var(--page-fg-soft)] sm:text-2xl">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.cards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 3) * 0.1}>
              {/* 卡面与悬停上浮动画保持不变；整张卡可点击进入全屏阅读 */}
              <button
                type="button"
                onClick={() => setSelected(i)}
                className="group flex h-full w-full flex-col rounded-3xl border border-[var(--page-hairline)] bg-[var(--page-panel)] p-7 text-left transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="inline-block self-start rounded-full bg-[var(--page-panel)] px-3 py-1 text-xs font-medium text-[var(--page-fg-soft)] ring-1 ring-[var(--page-hairline)]">
                  {card.tag}
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-[var(--page-fg-soft)]">
                  {card.body}
                </p>
                {/* 可点击提示：极淡「展开阅读 →」，不改动悬停动画 */}
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--page-fg-soft)] opacity-70 transition-opacity group-hover:opacity-100">
                  {t.readMore}
                  <span aria-hidden>→</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* 全屏阅读：标题 + 导语 + 正文逐段 */}
      <Reader
        open={active !== null}
        onClose={() => setSelected(null)}
        closeLabel={t.close}
        eyebrow={active?.tag}
      >
        {active && (
          <>
            <ArticleTitle>{active.title}</ArticleTitle>
            <ArticleLead>{active.body}</ArticleLead>
            {active.read.map((para, i) => (
              <ArticleP key={i}>{para}</ArticleP>
            ))}

            {/* 资料来源 */}
            <SectionLabel>{t.sourceLabel}</SectionLabel>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {active.sources.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-[var(--page-hairline)] px-3.5 py-1.5 text-sm text-[var(--page-fg-soft)] transition-colors hover:border-[var(--page-fg)] hover:text-[var(--page-fg)]"
                >
                  {s.label}
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          </>
        )}
      </Reader>
    </section>
  );
}
