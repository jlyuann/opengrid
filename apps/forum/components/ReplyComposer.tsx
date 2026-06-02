"use client";

// 底部共享回复框（抖音式）：默认回复主楼；点某条评论的「回复」后，
// 顶上冒出「回复 @某人 ✕」，在这里打字就回复那个人（写入 replies，带 parent_reply_id）。
// 未登录显示「去登录」。提交成功 → 清空并回调 onPosted（刷新出新评论 + 清除回复对象）。

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonMotion } from "@opengrid/ui";
import { useCopy } from "@/lib/useCopy";
import { useAuth } from "@/components/AuthProvider";
import { createReply } from "@/lib/forum-queries";

export function ReplyComposer({
  threadId,
  onPosted,
  parentReplyId,
  replyingToName,
  onCancelReply,
}: {
  threadId: string;
  onPosted: () => void;
  parentReplyId?: string;
  replyingToName?: string | null;
  onCancelReply?: () => void;
}) {
  const t = useCopy().thread;
  const { user, loading: authLoading } = useAuth();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  // 选定回复对象时，自动聚焦到输入框（点上方某条评论的「回复」后）。
  useEffect(() => {
    if (parentReplyId) textareaRef.current?.focus();
  }, [parentReplyId]);

  const canSubmit = !!user && !!body.trim() && !submitting;

  const onSubmit = async () => {
    if (!user || !canSubmit) return;
    setSubmitting(true);
    setError(false);
    try {
      await createReply({
        threadId,
        body: body.trim(),
        authorId: user.id,
        parentReplyId,
      });
      setBody("");
      onPosted();
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const loggedOut = !authLoading && !user;

  return (
    <div className="mt-10 rounded-3xl border border-[var(--page-hairline)] bg-[var(--page-panel)] p-5">
      {/* 回复对象提示条 */}
      {replyingToName && (
        <div className="mb-2 flex items-center gap-2 text-sm text-[var(--page-fg-soft)]">
          <span>
            {t.replyTo}{" "}
            <span className="font-medium text-[var(--page-fg)]">
              @{replyingToName}
            </span>
          </span>
          {onCancelReply && (
            <button
              onClick={onCancelReply}
              aria-label={t.cancel}
              className="leading-none transition-opacity hover:opacity-60"
            >
              ✕
            </button>
          )}
        </div>
      )}

      <textarea
        ref={textareaRef}
        rows={3}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        disabled={!user}
        placeholder={t.replyPlaceholder}
        className="w-full resize-none bg-transparent text-[var(--page-fg)] placeholder:text-[var(--page-fg-soft)] focus:outline-none disabled:cursor-not-allowed"
      />
      <div className="mt-2 flex items-center justify-between gap-3">
        {loggedOut ? (
          <span className="text-xs text-[var(--page-fg-soft)]">
            {t.loginNote} ·{" "}
            <Link href="/login" className="underline hover:opacity-70">
              {t.loginCta}
            </Link>
          </span>
        ) : (
          <span className="text-xs text-red-500">
            {error ? t.replyError : ""}
          </span>
        )}
        <motion.button
          {...buttonMotion}
          onClick={onSubmit}
          disabled={!canSubmit}
          className="shrink-0 rounded-full bg-[var(--page-fg)] px-5 py-2 text-sm font-medium text-[var(--page-bg)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {submitting ? t.replyPending : t.replyButton}
        </motion.button>
      </div>
    </div>
  );
}
