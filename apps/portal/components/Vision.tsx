"use client";

// 理念区：透明背景（透出整页车队色）+ 三根支柱（降低门槛 / 凝聚邻里 / 让运动生长）。

import { useCopy } from "@/lib/useCopy";
import { Reveal } from "@opengrid/ui";

export function Vision() {
  const t = useCopy().vision;

  return (
    <section id="vision" className="py-28 sm:py-36 text-[var(--page-fg)]">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--page-fg-soft)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--page-fg-soft)]">
            {t.subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl bg-[var(--page-panel)] p-8 ring-1 ring-[var(--page-hairline)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--page-fg)] text-sm font-semibold text-[var(--page-bg)]">
                  0{i + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--page-fg-soft)]">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
