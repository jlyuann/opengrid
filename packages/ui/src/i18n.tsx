"use client";

// 语言状态：用 React Context 全局共享，选择记在 localStorage 里。
// 任何组件想拿当前语言，调用 useLanguage() 即可。
// 注：这是「纯状态机」，不绑定任何站点文案——各站自己的 dictionary + useCopy
//     留在各 app（读 useLanguage().lang 索引本站文案），以便门户/论坛复用同一套切换逻辑。

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// 站点支持的语言。各站 dictionary 用此类型保证中英结构对称。
export type Lang = "zh" | "en";

type LanguageContextValue = {
  lang: Lang;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "opengrid-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  // 首次加载时读取上次的语言选择
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en") {
      setLang(saved);
    }
  }, []);

  // 语言变化时：持久化，并同步 <html lang> 方便无障碍 / SEO
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "zh" ? "zh" : "en";
  }, [lang]);

  const toggle = () => setLang((prev) => (prev === "zh" ? "en" : "zh"));

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage 必须在 <LanguageProvider> 内部使用");
  }
  return ctx;
}
