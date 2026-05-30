"use client";

// 加入区：透明背景（透出整页车队色）+ 留资表单。
// 第一阶段表单仅做前端反馈；第二阶段接入 Supabase 后真正存储。

import { useState } from "react";
import { motion } from "framer-motion";
import { useCopy } from "@/lib/useCopy";
import { buttonMotion } from "@opengrid/ui";
import { Reveal } from "@opengrid/ui";

export function Join() {
  const t = useCopy().join;
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    // TODO（第二阶段）：把 value 提交到 Supabase 的等候名单表
    setSubmitted(true);
  };

  return (
    <section
      id="join"
      className="relative overflow-hidden py-28 text-[var(--page-fg)] sm:py-36"
    >
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--page-fg-soft)]">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--page-fg-soft)]">
            {t.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {submitted ? (
            <p className="mt-10 text-lg font-medium text-[var(--page-fg)]">
              {t.thanks}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="text"
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 rounded-full border border-[var(--page-hairline)] bg-[var(--page-panel)] px-5 py-3 text-base text-[var(--page-fg)] placeholder:text-[var(--page-fg-soft)] focus:border-[var(--page-fg)] focus:outline-none"
              />
              <motion.button
                type="submit"
                {...buttonMotion}
                className="rounded-full bg-[var(--page-fg)] px-7 py-3 text-base font-medium text-[var(--page-bg)]"
              >
                {t.button}
              </motion.button>
            </form>
          )}
          {!submitted && (
            <p className="mt-4 text-xs text-[var(--page-fg-soft)]">{t.note}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
