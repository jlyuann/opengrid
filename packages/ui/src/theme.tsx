"use client";

// 主题色状态：与 i18n 同样的 Context + localStorage 模式。
// 暗底基色固定（见 tokens.css）；切换车队时只把队色写入 <html> 内联的
// --accent（点缀色）+ --accent-ink（accent 上的文字色），逐帧平滑过渡。

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_THEME_ID, getTheme, THEMES, type Theme } from "./themes";

// WCAG「相对亮度」：先把 sRGB 做伽马线性化再加权。比直接对原始 sRGB 加权准，
// 否则迈凯伦橙、威廉姆斯蓝、凯迪拉克金等高饱和亮色会被误判成"暗色"。
function relativeLuminance(hex: string): number {
  const h = hex.replace("#", "");
  const channel = (i: number) => {
    const c = parseInt(h.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4);
}

// accent 上的文字色：亮 accent → 近黑字，暗 accent → 白字。
function accentInk(hex: string): string {
  return relativeLuminance(hex) > 0.22 ? "#1d1d1f" : "#ffffff";
}

// 线性混合两个 hex（ta = 第一个色的占比）。
function mixHex(a: string, b: string, ta: number): string {
  const ch = (h: string, i: number) => parseInt(h.replace("#", "").slice(i, i + 2), 16);
  const m = (i: number) => Math.round(ch(a, i) * ta + ch(b, i) * (1 - ta));
  const h2 = (n: number) => n.toString(16).padStart(2, "0");
  return `#${h2(m(0))}${h2(m(2))}${h2(m(4))}`;
}

// 暗底下过暗的车队色（如奥迪近黑）会看不见 → 逐步掺白提亮到可辨识。
function accentForDark(hex: string): string {
  let c = hex;
  let guard = 0;
  while (relativeLuminance(c) < 0.06 && guard++ < 6) {
    c = mixHex("#ffffff", c, 0.25);
  }
  return c;
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

  // 主题变化时：持久化 + 改写 <html> 内联的点缀色变量（内联样式优先级高于 :root）。
  // 暗底基色固定在 tokens.css；这里只动 --accent / --accent-ink（@property 注册过，能平滑过渡）。
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, themeId);
    const accent = accentForDark(getTheme(themeId).accent);
    const root = document.documentElement.style;
    root.setProperty("--accent", accent);
    root.setProperty("--accent-ink", accentInk(accent));
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
