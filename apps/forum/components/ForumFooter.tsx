"use client";

// 论坛页脚：一句话理念 + 署名。随整页主题自动反差。

import { useCopy } from "@/lib/useCopy";

export function ForumFooter() {
  const t = useCopy();
  return (
    <footer className="mt-24 border-t border-[var(--page-hairline)] px-6 py-10 text-center text-[var(--page-fg)]">
      <p className="text-sm text-[var(--page-fg-soft)]">{t.footer.madeWith}</p>
      <p className="mt-2 text-xs text-[var(--page-fg-soft)]">{t.footer.rights}</p>
    </footer>
  );
}
