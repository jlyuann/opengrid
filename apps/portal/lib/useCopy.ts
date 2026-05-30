"use client";

// 门户站的「当前语言 → 整份文案」便捷 hook。
// 语言状态机来自共享包 @opengrid/ui，文案 dictionary 是本站专属（各站各一份）。

import { useLanguage } from "@opengrid/ui";
import { copy } from "./dictionary";

export function useCopy() {
  const { lang } = useLanguage();
  return copy[lang];
}
