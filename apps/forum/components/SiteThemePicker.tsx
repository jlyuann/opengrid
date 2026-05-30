"use client";

// 取色器的本站包装：把论坛 dictionary 的 theme 文案作为 labels 传给共享 ThemePicker。

import { ThemePicker } from "@opengrid/ui";
import { useCopy } from "@/lib/useCopy";

export function SiteThemePicker() {
  return <ThemePicker labels={useCopy().theme} />;
}
