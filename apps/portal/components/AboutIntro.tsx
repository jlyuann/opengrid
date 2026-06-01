"use client";

// 关于 OpenGrid：发起人的第一人称自述（多段落）+ 落款。
// body 是逐段数组（与 Guide 的 read 同款渲染），note 作为信末署名。

import { useCopy } from "@/lib/useCopy";
import { Reveal } from "@opengrid/ui";

export function AboutIntro() {
  const t = useCopy().about;

  return (
    <section className="py-20 sm:py-24 text-[var(--page-fg)]">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-[var(--page-hairline)] bg-[var(--page-panel)] p-8 sm:p-10 md:p-12">
            <div className="space-y-6">
              {t.body.map((para, i) => (
                <p
                  key={i}
                  className="text-lg leading-[1.85] text-[var(--page-fg-soft)]"
                >
                  {para}
                </p>
              ))}
            </div>
            <p className="mt-10 text-right text-base font-medium text-[var(--page-fg)]">
              {t.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
