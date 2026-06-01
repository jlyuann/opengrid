"use client";

// 首页「四大板块入口」：通往 知识 / 社区 / 约赛 / 关于 的卡片。
// 悬停轻微上浮（与入门卡片同款质感），入场用 Reveal。

import Link from "next/link";
import { useCopy } from "@/lib/useCopy";
import { Reveal } from "@opengrid/ui";
import { FORUM_URL } from "@/lib/links";

export function Explore() {
  const t = useCopy().home;
  const s = useCopy().sections;

  // 车友社区 = 论坛站（独立站点），外链跳转。
  const areas = [
    { href: "/knowledge", meta: s.knowledge, external: false },
    { href: FORUM_URL, meta: s.community, external: true },
    { href: "/about", meta: s.about, external: false },
  ];

  return (
    <section className="py-28 sm:py-36 text-[var(--page-fg)]">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.exploreTitle}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--page-fg-soft)]">
            {t.exploreSubtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => {
            const cardClass =
              "group flex h-full flex-col rounded-3xl border border-[var(--page-hairline)] bg-[var(--page-panel)] p-7 transition-transform duration-300 hover:-translate-y-1";
            const inner = (
              <>
                <h3 className="text-xl font-semibold tracking-tight">
                  {area.meta.label}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-[var(--page-fg-soft)]">
                  {area.meta.intro}
                </p>
                <span className="mt-5 text-sm font-medium text-[var(--page-fg)]">
                  {t.enter}
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </>
            );
            return (
              <Reveal key={area.meta.label} delay={(i % 4) * 0.08}>
                {area.external ? (
                  <a href={area.href} className={cardClass}>
                    {inner}
                  </a>
                ) : (
                  <Link href={area.href} className={cardClass}>
                    {inner}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
