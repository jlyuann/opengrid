"use client";

// 论坛整体外壳：左侧固定侧边栏 + 右侧主内容。
// 桌面端侧边栏常驻；移动端收成抽屉，由左上角菜单按钮唤出。

import { useState } from "react";
import Link from "next/link";
import { useCopy } from "@/lib/useCopy";
import { ForumSidebar } from "@/components/ForumSidebar";
import { ForumFooter } from "@/components/ForumFooter";

export function ForumShell({ children }: { children: React.ReactNode }) {
  const t = useCopy();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen text-[var(--page-fg)]">
      {/* 移动端顶栏：菜单按钮 + 品牌 */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-14 items-center gap-3 border-b border-[var(--page-hairline)] bg-[color-mix(in_srgb,var(--page-bg)_70%,transparent)] px-4 backdrop-blur-xl md:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--page-hairline)] text-[var(--page-fg)]"
        >
          <span className="text-lg leading-none">☰</span>
        </button>
        <Link href="/" className="text-base font-semibold tracking-tight">
          {t.brand}
        </Link>
      </div>

      {/* 移动端抽屉遮罩 */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          aria-hidden
        />
      )}

      {/* 侧边栏：桌面常驻；移动端滑入抽屉 */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-out md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ForumSidebar onNavigate={() => setOpen(false)} />
      </div>

      {/* 主内容：桌面端给侧边栏让出左侧 16rem，移动端给顶栏让出高度 */}
      <div className="md:pl-64">
        <div className="pt-14 md:pt-0">
          {children}
          <ForumFooter />
        </div>
      </div>
    </div>
  );
}
