"use client";

// 板块页主体：板块标题 + 简介 + 帖子列表 + 发帖。
// 发帖：未登录点「发帖」→ 跳 /login；登录后展开表单，写入 Supabase，成功即刷新列表。
// slug 由服务端路由传入；帖子来自 Supabase；板块名/简介经 useCopy 双语解析。

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, buttonMotion, useLanguage } from "@opengrid/ui";
import { useCopy } from "@/lib/useCopy";
import { useAuth } from "@/components/AuthProvider";
import { ThreadRow } from "@/components/ThreadRow";
import {
  fetchThreadsByBoard,
  createThread,
  type ThreadSummary,
} from "@/lib/forum-queries";

export function BoardView({ slug }: { slug: string }) {
  const t = useCopy();
  const { lang } = useLanguage();
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const board = t.boards.find((b) => b.slug === slug);

  const [threads, setThreads] = useState<ThreadSummary[]>([]);
  const [loading, setLoading] = useState(true);

  // 发帖表单状态
  const [composing, setComposing] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const reload = () => {
    setLoading(true);
    fetchThreadsByBoard(slug)
      .then(setThreads)
      .catch(() => setThreads([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    reload();
    // slug 变化时重新拉取；reload 是稳定逻辑，无需进依赖。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  // 「发帖」按钮：登录态加载中先不响应；未登录引导去登录；已登录则开/关表单。
  const onNewThread = () => {
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }
    setError(false);
    setComposing((c) => !c);
  };

  const canSubmit = !!title.trim() && !!body.trim() && !submitting;

  const onSubmit = async () => {
    if (!user || !canSubmit) return;
    setSubmitting(true);
    setError(false);
    try {
      await createThread({
        board: slug,
        title: title.trim(),
        body: body.trim(),
        authorId: user.id,
      });
      setTitle("");
      setBody("");
      setComposing(false);
      reload();
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const c = t.board.compose;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-[var(--page-fg)] md:py-16">
      <Reveal>
        <Link
          href="/"
          className="text-sm text-[var(--page-fg-soft)] transition-opacity hover:opacity-60"
        >
          ← {t.board.back}
        </Link>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {board?.name ?? slug}
            </h1>
            {board && (
              <p className="mt-3 max-w-xl leading-relaxed text-[var(--page-fg-soft)]">
                {board.desc}
              </p>
            )}
          </div>
          <motion.button
            {...buttonMotion}
            onClick={onNewThread}
            title={!user ? t.board.newThreadHint : undefined}
            className="shrink-0 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--accent-ink)] shadow-[0_8px_30px_-8px_var(--accent)]"
          >
            {composing ? c.cancel : t.board.newThread}
          </motion.button>
        </div>
      </Reveal>

      {/* 发帖表单（仅登录后、点开时显示） */}
      <AnimatePresence initial={false}>
        {composing && user && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 rounded-3xl border border-[var(--page-hairline)] bg-[var(--page-panel)] p-5">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={c.titlePlaceholder}
                maxLength={120}
                className="w-full bg-transparent text-lg font-semibold text-[var(--page-fg)] placeholder:text-[var(--page-fg-soft)] focus:outline-none"
              />
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={5}
                placeholder={c.bodyPlaceholder}
                className="mt-3 w-full resize-none bg-transparent leading-[1.8] text-[var(--page-fg)] placeholder:text-[var(--page-fg-soft)] focus:outline-none"
              />
              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="text-xs text-red-500">
                  {error ? c.error : ""}
                </span>
                <motion.button
                  {...buttonMotion}
                  onClick={onSubmit}
                  disabled={!canSubmit}
                  className="shrink-0 rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-[var(--accent-ink)] shadow-[0_8px_30px_-8px_var(--accent)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {submitting ? c.submitting : c.submit}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-10 divide-y divide-[var(--page-hairline)]">
        {loading ? (
          <p className="py-10 text-center text-sm text-[var(--page-fg-soft)]">
            {t.loading}
          </p>
        ) : threads.length === 0 ? (
          <p className="py-10 text-center text-[var(--page-fg-soft)]">
            {t.board.empty}
          </p>
        ) : (
          threads.map((thread) => (
            <ThreadRow
              key={thread.id}
              thread={thread}
              lang={lang}
              repliesLabel={t.board.repliesLabel}
            />
          ))
        )}
      </div>
    </main>
  );
}
