import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { LanguageProvider, ThemeProvider } from "@opengrid/ui";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SiteThemePicker } from "@/components/SiteThemePicker";

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
  title: "OpenGrid · 邻里赛车社区 | Neighborhood Racing Community",
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
        {/* 整页固定渐变背景层：随所选车队色细腻过渡 */}
        <div className="page-bg" aria-hidden />
        <LanguageProvider>
          <ThemeProvider>
            {/* 跨页面共享的外壳：导航 / 页脚 / 取色器在所有路由都在 */}
            <Nav />
            {children}
            <Footer />
            <SiteThemePicker />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
