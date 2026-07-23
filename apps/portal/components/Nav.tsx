"use client";

// 顶部固定导航栏：多页面 Link 导航，滚动后切换为毛玻璃质感（苹果同款）。
// 桌面端链接常驻；移动端收进右上角汉堡菜单，点开从顶栏下方滑出面板。
// 配色随纯黑基础色体系（--page-* 变量）。当前所在板块高亮。

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, buttonMotion, springSnappy, Logo } from "@opengrid/ui";
import { useCopy } from "@/lib/useCopy";
import { FORUM_URL } from "@/lib/links";

// 让 Next 的 Link 也能用 framer-motion 的跟手动效（与全站按钮一致）
const MotionLink = motion.create(Link);

export function Nav() {
  const { lang, toggle } = useLanguage();
  const t = useCopy().nav;
  const s = useCopy().sections;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 路由变化时收起移动端菜单（点了链接就关）
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // 菜单打开时：锁定页面滚动 + Esc 关闭
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  // 车友社区 = 论坛站（独立站点），用外链跳转，类比 openai.com 导航里的 ChatGPT。
  const links = [
    { href: "/knowledge", label: s.knowledge.label, external: false },
    { href: FORUM_URL, label: s.community.label, external: true },
    { href: "/about", label: s.about.label, external: false },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-[var(--page-hairline)] bg-[color-mix(in_srgb,var(--page-bg)_70%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label={t.brand}>
          <Logo className="text-lg" />
        </Link>

        {/* 桌面端：居中链接 */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => {
            const active = !link.external && pathname === link.href;
            const className = `transition-opacity hover:opacity-60 ${
              active
                ? "font-medium text-[var(--page-fg)]"
                : "text-[var(--page-fg-soft)]"
            }`;
            return link.external ? (
              <a key={link.label} href={link.href} className={className}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* 桌面端：右侧语言 + 加入 */}
        <div className="hidden items-center gap-3 md:flex">
          <motion.button
            onClick={toggle}
            aria-label="Switch language"
            {...buttonMotion}
            className="rounded-full border border-[var(--page-hairline)] px-2.5 py-1 text-xs font-medium text-[var(--page-fg-soft)] transition-colors hover:text-[var(--page-fg)]"
          >
            {lang === "zh" ? "EN" : "中"}
          </motion.button>
          <MotionLink
            href="/#join"
            {...buttonMotion}
            className="rounded-full bg-[var(--page-fg)] px-4 py-1.5 text-sm font-medium text-[var(--page-bg)]"
          >
            {t.join}
          </MotionLink>
        </div>

        {/* 移动端：汉堡 / 关闭按钮 */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative flex h-9 w-9 items-center justify-center text-[var(--page-fg)] md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-4 w-5" aria-hidden>
            <motion.span
              className="absolute left-0 block h-[1.5px] w-5 bg-[var(--page-fg)]"
              animate={
                menuOpen
                  ? { top: "50%", rotate: 45, y: "-50%" }
                  : { top: "2px", rotate: 0, y: 0 }
              }
              transition={springSnappy}
              style={{ top: "2px" }}
            />
            <motion.span
              className="absolute left-0 top-1/2 block h-[1.5px] w-5 -translate-y-1/2 bg-[var(--page-fg)]"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="absolute left-0 block h-[1.5px] w-5 bg-[var(--page-fg)]"
              animate={
                menuOpen
                  ? { bottom: "50%", rotate: -45, y: "50%" }
                  : { bottom: "2px", rotate: 0, y: 0 }
              }
              transition={springSnappy}
              style={{ bottom: "2px" }}
            />
          </span>
        </button>
      </nav>

      {/* 移动端下拉面板 + 背景遮罩 */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* 遮罩：点击关闭；盖住顶栏以下的内容 */}
            <motion.button
              key="backdrop"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 bottom-0 top-16 -z-10 bg-[color-mix(in_srgb,var(--page-bg)_55%,transparent)] backdrop-blur-sm md:hidden"
            />
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 pb-6 pt-2">
                {links.map((link) => {
                  const active = !link.external && pathname === link.href;
                  const className = `rounded-xl px-3 py-3 text-base transition-colors hover:bg-[var(--page-panel)] ${
                    active
                      ? "font-medium text-[var(--page-fg)]"
                      : "text-[var(--page-fg-soft)]"
                  }`;
                  return link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={className}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={className}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="mt-2 flex items-center gap-3 border-t border-[var(--page-hairline)] pt-4">
                  <button
                    onClick={toggle}
                    aria-label="Switch language"
                    className="rounded-full border border-[var(--page-hairline)] px-3 py-1.5 text-xs font-medium text-[var(--page-fg-soft)] transition-colors hover:text-[var(--page-fg)]"
                  >
                    {lang === "zh" ? "EN" : "中"}
                  </button>
                  <Link
                    href="/#join"
                    onClick={() => setMenuOpen(false)}
                    className="flex-1 rounded-full bg-[var(--page-fg)] px-4 py-2.5 text-center text-sm font-medium text-[var(--page-bg)]"
                  >
                    {t.join}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
