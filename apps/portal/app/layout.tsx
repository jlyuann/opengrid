import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@opengrid/ui";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Inter 提供拉丁字母的精致字形；中文由 globals.css 里的字体栈兜底
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Source Serif：仅用于全屏阅读器正文，营造「读书 / 读论文」的衬线质感；
// 中文由 globals.css 的 --font-serif 字体栈回退到系统宋体。
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // 标签页只显示品牌名；详细描述留给 description（SEO 用）
  title: "OpenGrid",
  description:
    "降低门槛，凝聚邻里，让更多人爱上 F1 与卡丁车。一个由学生发起的社区项目。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full text-[var(--page-fg)]">
        {/* 整页固定纯黑背景层 */}
        <div className="page-bg" aria-hidden />
        <LanguageProvider>
          {/* 跨页面共享的外壳：导航 / 页脚在所有路由都在 */}
          <Nav />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
