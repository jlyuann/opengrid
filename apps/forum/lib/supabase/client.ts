// 浏览器端 Supabase 客户端（用于 "use client" 组件）。
// 用 @supabase/ssr 的 createBrowserClient：会话存在 cookie 里，刷新后仍保持登录。
// 环境变量来自 .env.local（NEXT_PUBLIC_ 前缀的变量会注入到前端）。

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
