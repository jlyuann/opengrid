"use client";

// 内页统一页头：eyebrow(板块短名) + 大标题 + 简介，居中。
// 自己从字典按板块 key 取双语文案（随语言切换实时更新）。
// 顶部留白避开固定导航栏；入场动画复用 Reveal，与全站一致。

import { useCopy } from "@/lib/useCopy";
import { Reveal } from "@opengrid/ui";

type SectionKey = "knowledge" | "community" | "about";

export function PageHeader({ section }: { section: SectionKey }) {
  const meta = useCopy().sections[section];

  return (
    <section className="px-6 pt-32 sm:pt-40 text-[var(--page-fg)]">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--page-fg-soft)]">
          {meta.label}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {meta.headline}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[var(--page-fg-soft)]">
          {meta.intro}
        </p>
      </Reveal>
    </section>
  );
}
