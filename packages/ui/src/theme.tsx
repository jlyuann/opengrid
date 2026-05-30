"use client";

// 主题色状态：与 i18n 同样的 Context + localStorage 模式。
// 切换时把所选车队色写入 <html> 内联的 --page-bg（整页背景基色），
// 并按其亮度自动算出 --page-fg（近黑或纯白），全站文字随之逐帧过渡。

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_THEME_ID, getTheme, THEMES, type Theme } from "./themes";

// 背景色 → 自动反差前景色。用 WCAG「相对亮度」（先把 sRGB 做伽马线性化再加权），
// 比直接对原始 sRGB 加权准得多——否则迈凯伦橙、威廉姆斯蓝、凯迪拉克金等高饱和亮色
// 会被误判成"暗色"而配白字（看着像反色）。亮 → 近黑字，暗 → 白字。
function pageForeground(hex: string): string {
  const h = hex.replace("#", "");
  // 单通道：sRGB(0–1) → 伽马线性化
  const channel = (i: number) => {
    const c = parseInt(h.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  const luminance =
    0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4);
  // 阈值 0.22：红牛深蓝、奥迪近黑 → 白字；其余亮色 → 近黑字。
  return luminance > 0.22 ? "#1d1d1f" : "#ffffff";
}

// 线性混合两个 hex（ta = 第一个色的占比）。用于 glow 模式把队色压成"略带队色的近黑"底。
function mixHex(a: string, b: string, ta: number): string {
  const ch = (h: string, i: number) => parseInt(h.replace("#", "").slice(i, i + 2), 16);
  const m = (i: number) => Math.round(ch(a, i) * ta + ch(b, i) * (1 - ta));
  const h2 = (n: number) => n.toString(16).padStart(2, "0");
  return `#${h2(m(0))}${h2(m(2))}${h2(m(4))}`;
}

type ThemeContextValue = {
  themeId: string;
  setThemeId: (id: string) => void;
  themes: Theme[];
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "opengrid-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<string>(DEFAULT_THEME_ID);

  // 首次加载时读取上次选择的车队
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && THEMES.some((t) => t.id === saved)) {
      setThemeId(saved);
    }
  }, []);

  // 主题变化时：持久化 + 应用到 <html> 内联变量（内联样式优先级高于 :root）。
  // @property 注册过的 --page-bg / --page-fg 在此被改写时会触发 0.8s 过渡动画。
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, themeId);
    const theme = getTheme(themeId);
    const root = document.documentElement.style;

    if (theme.bg && theme.fg) {
      // 显式指定底色 + 文字色（如哈斯：黑底 + 暗红字），不走自动反差/辉光。
      root.setProperty("--page-bg", theme.bg);
      root.setProperty("--page-fg", theme.fg);
      root.setProperty(
        "--page-fg-soft",
        `color-mix(in srgb, ${theme.fg} 62%, transparent)`,
      );
      root.setProperty("--page-glow", "transparent");
    } else if (theme.mode === "glow") {
      // 近黑底（略带队色）+ 队色辉光 + 白字：高饱和色大面积铺满会晃眼，改成辉光。
      root.setProperty("--page-bg", mixHex(theme.accent, "#07070a", 0.16));
      root.setProperty("--page-fg", "#ffffff");
      root.setProperty(
        "--page-fg-soft",
        "color-mix(in srgb, #ffffff 62%, transparent)",
      );
      root.setProperty("--page-glow", theme.accent);
    } else {
      // 满色铺底：accent 即整页背景，文字按亮度自动黑/白，无辉光。
      const fg = pageForeground(theme.accent);
      root.setProperty("--page-bg", theme.accent);
      root.setProperty("--page-fg", fg);
      root.setProperty(
        "--page-fg-soft",
        `color-mix(in srgb, ${fg} 62%, transparent)`,
      );
      root.setProperty("--page-glow", "transparent");
    }
  }, [themeId]);

  return (
    <ThemeContext.Provider value={{ themeId, setThemeId, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme 必须在 <ThemeProvider> 内部使用");
  }
  return ctx;
}
