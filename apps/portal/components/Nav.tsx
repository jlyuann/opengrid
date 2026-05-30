"use client";

// 顶部固定导航栏：多页面 Link 导航，滚动后切换为毛玻璃质感（苹果同款），
// 随整页车队色自动反差。当前所在板块高亮。含品牌、四大板块、中/英切换、加入按钮。

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage, buttonMotion } from "@opengrid/ui";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 车友社区 = 论坛站（独立站点），用外链跳转，类比 openai.com 导航里的 ChatGPT。
  const links = [
    { href: "/knowledge", label: s.knowledge.label, external: false },
    { href: FORUM_URL, label: s.community.label, external: true },
    { href: "/about", label: s.about.label, external: false },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--page-hairline)] bg-[color-mix(in_srgb,var(--page-bg)_70%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-[var(--page-fg)]"
        >
          {t.brand}
          <span className="text-[var(--page-fg)]">.</span>
        </Link>

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

        <div className="flex items-center gap-3">
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
      </nav>
    </header>
  );
}
