"use client";

// 论坛站的「当前语言 → 整份文案」便捷 hook（与门户站同款模式）。
// 语言状态机来自共享包 @opengrid/ui，文案 dictionary 是本站专属。

import { useLanguage } from "@opengrid/ui";
import { copy } from "./dictionary";

export function useCopy() {
  const { lang } = useLanguage();
  return copy[lang];
}
