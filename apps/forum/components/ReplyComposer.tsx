"use client";

// 回复框（占位）：外观完整，但暂不提交——真实发帖/回帖留到第②步接 Supabase。
// 第②步会接入登录态：未登录显示「登录后可回复」，登录后启用提交。

import { motion } from "framer-motion";
import { buttonMotion } from "@opengrid/ui";
import { useCopy } from "@/lib/useCopy";

export function ReplyComposer() {
  const t = useCopy().thread;
  return (
    <div className="mt-10 rounded-3xl border border-[var(--page-hairline)] bg-[var(--page-panel)] p-5">
      <textarea
        rows={3}
        disabled
        placeholder={t.replyPlaceholder}
        className="w-full resize-none bg-transparent text-[var(--page-fg)] placeholder:text-[var(--page-fg-soft)] focus:outline-none"
      />
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-[var(--page-fg-soft)]">{t.loginNote}</span>
        <motion.button
          {...buttonMotion}
          disabled
          className="cursor-not-allowed rounded-full bg-[var(--page-fg)] px-5 py-2 text-sm font-medium text-[var(--page-bg)] opacity-50"
        >
          {t.replyButton}
        </motion.button>
      </div>
    </div>
  );
}
