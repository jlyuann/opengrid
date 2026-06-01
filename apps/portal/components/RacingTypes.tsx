"use client";

// 「赛车门类」：卡面只露赛事名 + 全称，点击进入全屏长文阅读，
// 像读一篇文章那样讲解 概念 / 规则 / 亮点 / 来源（衬线排版，复用 Reader）。

import { useState } from "react";
import { motion } from "framer-motion";
import { useCopy } from "@/lib/useCopy";
import { buttonMotion } from "@opengrid/ui";
import { Reveal } from "@opengrid/ui";
import {
  Reader,
  ArticleEyebrow,
  ArticleTitle,
  SectionLabel,
  ArticleP,
} from "@opengrid/ui";

export function RacingTypes() {
  const t = useCopy().racing;
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? null : t.types[selected];

  return (
    <section className="py-24 sm:py-32 text-[var(--page-fg)]">
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

        {/* 卡片网格：卡面只显示赛事名 + 全称，整张可点击 */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.types.map((type, i) => (
            <Reveal key={type.name} delay={(i % 3) * 0.08}>
              <motion.button
                {...buttonMotion}
                onClick={() => setSelected(i)}
                aria-label={type.full}
                className="group relative h-full w-full overflow-hidden rounded-3xl border border-[var(--page-hairline)] bg-[var(--page-panel)] p-7 text-left"
              >
                <h3 className="text-2xl font-semibold tracking-tight">
                  {type.name}
                </h3>
                <p className="mt-1.5 text-sm text-[var(--page-fg-soft)]">
                  {type.full}
                </p>
                {/* 可点击提示：右上角极淡的 + */}
                <span className="absolute right-5 top-5 text-lg leading-none text-[var(--page-fg-soft)] transition-opacity opacity-40 group-hover:opacity-100">
                  +
                </span>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* 全屏长文阅读：概念 / 赛制与规则 / 亮点 / 资料来源 */}
      <Reader
        open={active !== null}
        onClose={() => setSelected(null)}
        closeLabel={t.detail.close}
        eyebrow={active?.name}
      >
        {active && (
          <>
            <ArticleEyebrow>{active.name}</ArticleEyebrow>
            <ArticleTitle>{active.full}</ArticleTitle>

            {/* 概念 */}
            <SectionLabel>{t.detail.conceptLabel}</SectionLabel>
            <ArticleP>{active.concept}</ArticleP>

            {/* 赛制与规则 */}
            <SectionLabel>{t.detail.rulesLabel}</SectionLabel>
            <ul className="mt-5 space-y-3.5">
              {active.rules.map((rule) => (
                <li
                  key={rule}
                  className="flex gap-3 text-[1.0625rem] leading-[1.8] text-[var(--page-fg-soft)]"
                >
                  <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--page-fg)]" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>

            {/* 亮点 */}
            <SectionLabel>{t.detail.extraLabel}</SectionLabel>
            <ArticleP>{active.extra}</ArticleP>

            {/* 资料来源 */}
            <SectionLabel>{t.detail.sourceLabel}</SectionLabel>
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
