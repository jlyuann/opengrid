import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { LanguageProvider, ThemeProvider } from "@opengrid/ui";
import { AuthProvider } from "@/components/AuthProvider";
import { ForumShell } from "@/components/ForumShell";
import { SiteThemePicker } from "@/components/SiteThemePicker";

// 与门户站完全一致的字体设置（同名 CSS 变量），保证跨站排版统一。
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // 标签页：品牌名 + Community（与门户站「OpenGrid」区分）
  title: "OpenGrid Community",
  description:
    "卡丁车爱好者的交流论坛：问答、约赛、场地点评、装备交流。OpenGrid 旗下社区。",
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
        {/* 整页固定渐变背景层：与门户站共用同一套主题系统 */}
        <div className="page-bg" aria-hidden />
        <LanguageProvider>
          <ThemeProvider>
            <AuthProvider>
              <ForumShell>{children}</ForumShell>
              <SiteThemePicker />
            </AuthProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
