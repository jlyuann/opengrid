"use client";

// 加入区：透明背景（透出整页车队色）+ 直达论坛的「登录 / 注册」入口。
// 论坛已上线，这里不再是留资表单，而是把人直接送到论坛的 /login 页
//（那页登录、注册一体）。论坛是独立站点，用绝对地址跳转、同标签页打开。

import { motion } from "framer-motion";
import { useCopy } from "@/lib/useCopy";
import { buttonMotion, Reveal } from "@opengrid/ui";
import { FORUM_URL } from "@/lib/links";

export function Join() {
  const t = useCopy().join;

  return (
    <section
      id="join"
      className="relative overflow-hidden py-28 text-[var(--page-fg)] sm:py-36"
    >
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <Reveal>
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

        <Reveal delay={0.15}>
          <motion.a
            href={`${FORUM_URL}/login`}
            {...buttonMotion}
            className="mt-10 inline-block rounded-full bg-[var(--page-fg)] px-8 py-3.5 text-base font-medium text-[var(--page-bg)]"
          >
            {t.button}
          </motion.a>
          <p className="mt-4 text-xs text-[var(--page-fg-soft)]">{t.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
