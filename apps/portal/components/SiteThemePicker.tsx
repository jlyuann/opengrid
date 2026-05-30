"use client";

// 取色器的本站包装：共享 ThemePicker 不绑定文案，由这里把本站 dictionary 的
// theme 文案作为 labels 传入。布局（服务端组件）渲染此客户端包装即可。

import { ThemePicker } from "@opengrid/ui";
import { useCopy } from "@/lib/useCopy";

export function SiteThemePicker() {
  return <ThemePicker labels={useCopy().theme} />;
}
