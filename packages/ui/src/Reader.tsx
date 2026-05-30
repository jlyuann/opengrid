"use client";

// 全屏阅读器：把内容铺满整个视口，像「读一本书 / 一篇论文」。
// Guide（F1 入门）与 RacingTypes（赛车门类）共用这一套外壳与排版子组件。
// 集中处理：Esc 关闭 + 锁背景滚动 + 进出场动画。正文用衬线体（font-serif）。

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { buttonMotion, springSnappy } from "./motion";

export function Reader({
  open,
  onClose,
  closeLabel,
  eyebrow,
  children,
}: {
  open: boolean;
  onClose: () => void;
  closeLabel: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  // 打开时：Esc 关闭 + 锁 body 滚动（关闭 / 卸载时恢复）
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={eyebrow}
          className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-[var(--page-bg)] text-[var(--page-fg)]"
        >
          {/* 顶栏：左侧板块标签 + 右侧关闭。细描边贴顶。 */}
          <header className="flex shrink-0 items-center justify-between border-b border-[var(--page-hairline)] px-5 py-4 sm:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--page-fg-soft)]">
              {eyebrow}
            </span>
            <motion.button
              {...buttonMotion}
              onClick={onClose}
              aria-label={closeLabel}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--page-hairline)] text-[var(--page-fg-soft)] hover:text-[var(--page-fg)]"
            >
              <span className="text-lg leading-none">×</span>
            </motion.button>
          </header>

          {/* 阅读区：窄栏 + 衬线 + 大行距，轻微「翻开」上浮入场。 */}
          <div className="grow overflow-y-auto">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springSnappy}
              className="mx-auto max-w-[46rem] px-6 py-16 font-serif sm:py-24"
            >
              {children}
            </motion.article>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── 文章排版子组件（两个调用方共用，保证版式一致）──────────────

// 标题上方的小标签（板块 / 标志词）
export function ArticleEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--page-fg-soft)]">
      {children}
    </p>
  );
}

// 文章大标题
export function ArticleTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
      {children}
    </h1>
  );
}

// 导语：标题下稍大的引入段
export function ArticleLead({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-8 text-2xl leading-[1.6] text-[var(--page-fg)]">
      {children}
    </p>
  );
}

// 节内小标题（概念 / 规则 / 亮点 / 来源…）
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--page-fg-soft)]">
      {children}
    </h2>
  );
}

// 正文段落
export function ArticleP({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 text-[1.1875rem] leading-[1.9] text-[var(--page-fg-soft)]">
      {children}
    </p>
  );
}
