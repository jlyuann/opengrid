"use client";

// 关于 OpenGrid：reference 式小板块，网站由来 / 介绍。规模克制，内容稍后补充。

import { useCopy } from "@/lib/useCopy";
import { Reveal } from "@opengrid/ui";

export function AboutIntro() {
  const t = useCopy().about;

  return (
    <section className="py-20 sm:py-24 text-[var(--page-fg)]">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-[var(--page-hairline)] bg-[var(--page-panel)] p-8 sm:p-10">
            <p className="text-lg leading-relaxed text-[var(--page-fg-soft)]">
              {t.body}
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.15em] text-[var(--page-fg-soft)]">
              {t.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
