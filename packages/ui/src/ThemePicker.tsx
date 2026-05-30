"use client";

// 右下角悬浮取色器：简约面板（无液态玻璃），随整页主题自动反差。
// 点开弹出 12 个车队色块，点一下整页背景即时渐变换色（实时预览，面板不关方便对比）。

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./theme";
import { springSnappy } from "./motion";
import { DEFAULT_THEME_ID } from "./themes";

// 取色器文案由各站经 props 传入（保持本组件与任何具体 dictionary 解耦）。
export type ThemePickerLabels = {
  title: string;
  subtitle: string;
  hint: string;
  aria: string;
  defaultLabel: string;
};

export function ThemePicker({ labels }: { labels: ThemePickerLabels }) {
  const { themeId, setThemeId, themes } = useTheme();
  const t = labels;
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <>
            {/* 轻遮罩：点击空白处关闭 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 -z-10"
            />

            {/* 简约面板：贴近整页背景色 + 反差文字 + 细描边 */}
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.96 }}
              transition={springSnappy}
              style={{ transformOrigin: "bottom right" }}
              className="w-[min(20rem,calc(100vw-3rem))] overflow-hidden rounded-[26px] border border-[var(--page-hairline)] bg-[color-mix(in_srgb,var(--page-bg)_92%,var(--page-fg))] p-5 text-[var(--page-fg)] shadow-[0_24px_70px_-12px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <p className="text-sm font-semibold tracking-tight">{t.title}</p>
              <p className="mt-0.5 text-xs text-[var(--page-fg-soft)]">
                {t.subtitle}
              </p>

              <div className="mt-4 grid grid-cols-4 gap-x-2 gap-y-4">
                {themes.map((theme) => {
                  const selected = theme.id === themeId;
                  const label =
                    theme.id === DEFAULT_THEME_ID ? t.defaultLabel : theme.label;
                  return (
                    <motion.button
                      key={theme.id}
                      onClick={() => setThemeId(theme.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.88 }}
                      transition={springSnappy}
                      aria-label={label}
                      aria-pressed={selected}
                      className="flex flex-col items-center gap-1.5 focus:outline-none"
                    >
                      <span
                        className={`h-9 w-9 rounded-full transition-[box-shadow] ${
                          selected
                            ? "ring-2 ring-[var(--page-fg)] ring-offset-2 ring-offset-[color-mix(in_srgb,var(--page-bg)_92%,var(--page-fg))]"
                            : "ring-1 ring-[var(--page-hairline)]"
                        }`}
                        style={{ backgroundColor: theme.accent }}
                      />
                      <span
                        className={`text-center text-[10px] leading-tight ${
                          selected
                            ? "font-semibold text-[var(--page-fg)]"
                            : "text-[var(--page-fg-soft)]"
                        }`}
                      >
                        {label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <p className="mt-4 text-[11px] text-[var(--page-fg-soft)]">
                {t.hint}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 触发按钮：简约圆钮，描边 + 当前主题色小点 */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        transition={springSnappy}
        onClick={() => setOpen((v) => !v)}
        aria-label={t.aria}
        aria-expanded={open}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--page-hairline)] bg-[color-mix(in_srgb,var(--page-bg)_92%,var(--page-fg))] shadow-[0_8px_28px_-8px_rgba(0,0,0,0.3)] backdrop-blur-xl"
      >
        <span
          className="h-5 w-5 rounded-full ring-1 ring-[var(--page-hairline)]"
          style={{ backgroundColor: "var(--page-bg)" }}
        />
      </motion.button>
    </div>
  );
}
