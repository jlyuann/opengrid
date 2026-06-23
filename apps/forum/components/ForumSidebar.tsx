"use client";

// Discord 式侧边栏：品牌 → 可展开/收起的分类 → 频道(#板块) → 底部用户区(语言/登录)。
// 展开/收起是新动画（高度伸缩），但速度沿用全站统一手感 springSnappy。

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage, buttonMotion, springSnappy } from "@opengrid/ui";
import { useCopy } from "@/lib/useCopy";
import { useAuth } from "@/components/AuthProvider";
import { PORTAL_URL } from "@/lib/links";

export function ForumSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const t = useCopy();
  const { toggle } = useLanguage();
  const { user, loading, signOut } = useAuth();
  const pathname = usePathname();
  // 记录被「收起」的分类（默认全部展开）
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const toggleCat = (id: string) =>
    setCollapsed((c) => ({ ...c, [id]: !c[id] }));

  const boardName = (slug: string) =>
    t.boards.find((b) => b.slug === slug)?.name ?? slug;

  return (
    <aside className="flex h-full w-64 flex-col border-r border-[var(--page-hairline)] bg-[color-mix(in_srgb,var(--page-bg)_85%,#808080)] text-[var(--page-fg)]">
      {/* 顶部：返回主站（外链跳门户，类比 chatgpt.com 回 openai.com）+ 品牌 */}
      <div className="shrink-0 border-b border-[var(--page-hairline)]">
        <a
          href={PORTAL_URL}
          className="flex items-center gap-1 px-5 pt-3 text-xs font-medium text-[var(--page-fg-soft)] transition-colors hover:text-[var(--page-fg)]"
        >
          <span aria-hidden>←</span>
          {t.nav.backToPortal}
        </a>
        <Link
          href="/"
          onClick={onNavigate}
          className="flex h-12 items-center px-5 text-lg font-semibold tracking-tight"
        >
          {t.brand}
        </Link>
      </div>

      {/* 分类 + 频道 */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {t.categories.map((cat) => {
          const open = !collapsed[cat.id];
          return (
            <div key={cat.id} className="mb-3">
              {/* 分类标题：点击展开/收起 */}
              <button
                type="button"
                onClick={() => toggleCat(cat.id)}
                aria-expanded={open}
                className="flex w-full items-center gap-1 px-2 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--page-fg-soft)] transition-opacity hover:opacity-70"
              >
                <motion.span
                  animate={{ rotate: open ? 0 : -90 }}
                  transition={springSnappy}
                  className="inline-block text-[0.6rem] leading-none"
                  aria-hidden
                >
                  ▾
                </motion.span>
                {cat.name}
              </button>

              {/* 频道列表：高度伸缩动画（springSnappy 手感） */}
              <AnimatePresence initial={false}>
                {open && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={springSnappy}
                    className="overflow-hidden"
                  >
                    {cat.boards.map((slug) => {
                      const href = `/b/${slug}`;
                      const active = pathname === href;
                      return (
                        <li key={slug} className="mt-0.5">
                          <Link
                            href={href}
                            onClick={onNavigate}
                            className={`flex items-center gap-1.5 rounded-lg border-l-2 px-3 py-1.5 text-sm transition-colors ${
                              active
                                ? "border-[var(--accent)] bg-[var(--page-panel)] font-medium text-[var(--accent)]"
                                : "border-transparent text-[var(--page-fg-soft)] hover:bg-[var(--page-panel)] hover:text-[var(--page-fg)]"
                            }`}
                          >
                            <span
                              className={
                                active
                                  ? "text-[var(--accent)]"
                                  : "text-[var(--page-fg-soft)]"
                              }
                              aria-hidden
                            >
                              #
                            </span>
                            {boardName(slug)}
                          </Link>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* 底部用户区：语言切换 + 登录状态（登录入口 / 已登录用户 + 退出） */}
      <div className="shrink-0 border-t border-[var(--page-hairline)] px-4 py-3">
        {user && (
          <p
            className="mb-2 truncate text-xs text-[var(--page-fg-soft)]"
            title={user.email}
          >
            {user.email}
          </p>
        )}
        <div className="flex items-center justify-between gap-2">
          <motion.button
            onClick={toggle}
            aria-label="Switch language"
            {...buttonMotion}
            className="rounded-full border border-[var(--page-hairline)] px-2.5 py-1 text-xs font-medium text-[var(--page-fg-soft)] transition-colors hover:text-[var(--page-fg)]"
          >
            {t.langToggle}
          </motion.button>

          {/* 加载会话时先不渲染按钮，避免「登录↔退出」闪烁 */}
          {loading ? null : user ? (
            <motion.button
              onClick={signOut}
              {...buttonMotion}
              className="rounded-full border border-[var(--page-hairline)] px-4 py-1.5 text-sm font-medium text-[var(--page-fg-soft)] transition-colors hover:text-[var(--page-fg)]"
            >
              {t.auth.logout}
            </motion.button>
          ) : (
            <Link
              href="/login"
              onClick={onNavigate}
              className="rounded-full border border-[var(--page-hairline)] px-4 py-1.5 text-sm font-medium text-[var(--page-fg-soft)] transition-colors hover:text-[var(--page-fg)]"
            >
              {t.nav.login}
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
