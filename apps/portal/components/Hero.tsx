"use client";

// 首屏：透明背景（透出整页车队色渐变）+ 自动反差文字 + 错落淡入大标题。

import { motion } from "framer-motion";
import Link from "next/link";
import { useCopy } from "@/lib/useCopy";
import { buttonMotion } from "@opengrid/ui";

const ease = [0.22, 1, 0.36, 1] as const;

// 让 Next 的 Link 支持 framer-motion 跟手动效（与 Nav 一致）
const MotionLink = motion.create(Link);

export function Hero() {
  const t = useCopy().hero;

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden text-[var(--page-fg)]"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto mb-5 h-[3px] w-12 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--accent)]"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]"
        >
          {t.eyebrow}
        </motion.p>

        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="block"
          >
            {t.titleTop}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="block opacity-60"
          >
            {t.titleBottom}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--page-fg-soft)]"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <motion.a
            href="#join"
            {...buttonMotion}
            className="w-full rounded-full bg-[var(--accent)] px-7 py-3 text-base font-medium text-[var(--accent-ink)] shadow-[0_8px_30px_-8px_var(--accent)] sm:w-auto"
          >
            {t.ctaPrimary}
          </motion.a>
          <MotionLink
            href="/knowledge"
            {...buttonMotion}
            className="w-full rounded-full border border-[var(--page-hairline)] px-7 py-3 text-base font-medium text-[var(--page-fg)] transition-colors hover:bg-[var(--page-panel)] sm:w-auto"
          >
            {t.ctaSecondary}
          </MotionLink>
        </motion.div>
      </div>

      {/* 底部滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-[var(--page-fg-soft)]"
      >
        {t.scroll}
      </motion.div>
    </section>
  );
}
