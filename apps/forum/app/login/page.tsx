"use client";

// 登录 / 注册页：同一个表单，用 mode 在「登录」「注册」之间切换。
// - 登录成功 → 回论坛首页
// - 注册：若直接拿到会话（dashboard 关了邮箱验证）→ 回首页；否则提示去收确认邮件
// 设计沿用全站主题变量（--page-*）与按钮手感（buttonMotion）。

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonMotion } from "@opengrid/ui";
import { useCopy } from "@/lib/useCopy";
import { createClient } from "@/lib/supabase/client";

type Mode = "login" | "register";

export default function LoginPage() {
  const t = useCopy().auth;
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const isLogin = mode === "login";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setPending(true);
    const supabase = createClient();

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setPending(false);
      if (error) {
        setError(error.message);
        return;
      }
      router.push("/");
      router.refresh();
    } else {
      const { data, error } = await supabase.auth.signUp({ email, password });
      setPending(false);
      if (error) {
        setError(error.message);
        return;
      }
      // 关了邮箱验证时会直接返回 session → 直接进站；否则提示收邮件。
      if (data.session) {
        router.push("/");
        router.refresh();
      } else {
        setNotice(t.checkEmail);
      }
    }
  }

  function switchMode() {
    setMode(isLogin ? "register" : "login");
    setError(null);
    setNotice(null);
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6 py-16 text-[var(--page-fg)]">
      <div className="w-full max-w-sm">
        <div className="rounded-3xl border border-[var(--page-hairline)] bg-[var(--page-panel)] p-8 sm:p-10">
          <h1 className="text-2xl font-semibold tracking-tight">
            {isLogin ? t.loginTitle : t.registerTitle}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[var(--page-fg-soft)]">
            {isLogin ? t.loginSubtitle : t.registerSubtitle}
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <label className="block">
              <span className="text-sm font-medium">{t.emailLabel}</span>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-xl border border-[var(--page-hairline)] bg-[var(--page-bg)] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--page-fg-soft)]"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">{t.passwordLabel}</span>
              <input
                type="password"
                required
                minLength={6}
                autoComplete={isLogin ? "current-password" : "new-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.passwordHint}
                className="mt-1.5 w-full rounded-xl border border-[var(--page-hairline)] bg-[var(--page-bg)] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--page-fg-soft)]"
              />
            </label>

            {error && (
              <p className="text-sm text-red-500" role="alert">
                {error}
              </p>
            )}
            {notice && (
              <p className="text-sm text-[var(--page-fg-soft)]" role="status">
                {notice}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={pending}
              {...buttonMotion}
              className="w-full rounded-full bg-[var(--page-fg)] px-4 py-2.5 text-sm font-medium text-[var(--page-bg)] disabled:opacity-60"
            >
              {pending
                ? isLogin
                  ? t.pendingLogin
                  : t.pendingRegister
                : isLogin
                  ? t.submitLogin
                  : t.submitRegister}
            </motion.button>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--page-fg-soft)]">
            {isLogin ? t.noAccount : t.haveAccount}{" "}
            <button
              type="button"
              onClick={switchMode}
              className="font-medium text-[var(--page-fg)] underline-offset-4 hover:underline"
            >
              {isLogin ? t.toRegister : t.toLogin}
            </button>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-[var(--page-fg-soft)] transition-colors hover:text-[var(--page-fg)]"
          >
            ← {t.backToForum}
          </Link>
        </div>
      </div>
    </div>
  );
}
