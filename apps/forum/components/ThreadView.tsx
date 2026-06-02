"use client";

// 帖子详情主体：主楼（标题 + 作者/时间 + 正文）→ 扁平评论流 → 底部回复框。
// 抖音式：只有一个主楼，评论全平级；回复某人时该条前面标「回复 @某人」，
// 谁都能回复谁、没有层级限制。点某条「回复」→ 底部输入框锁定该对象。
// 按 id 从 Supabase 查帖子 + 回帖；标签与板块名经 useCopy 双语解析。

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Reveal, useLanguage } from "@opengrid/ui";
import { useCopy } from "@/lib/useCopy";
import { useAuth } from "@/components/AuthProvider";
import { ReplyComposer } from "@/components/ReplyComposer";
import {
  fetchThread,
  formatRelativeTime,
  type ThreadDetail,
} from "@/lib/forum-queries";

export function ThreadView({ id }: { id: string }) {
  const t = useCopy();
  const { lang } = useLanguage();
  const router = useRouter();
  const { user } = useAuth();

  const [thread, setThread] = useState<ThreadDetail | null>(null);
  const [loading, setLoading] = useState(true);
  // 当前回复对象（点某条评论的「回复」后锁定；null = 直接回复主楼）
  const [replyTo, setReplyTo] = useState<{ id: string; name: string } | null>(
    null,
  );

  // 拉取帖子 + 回帖；发完回帖后也复用它刷新出新回帖。
  const load = () => {
    setLoading(true);
    fetchThread(id)
      .then(setThread)
      .catch(() => setThread(null))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
    // id 变化时重新拉取；load 是稳定逻辑，无需进依赖。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // 点某条评论的「回复」：未登录引导去登录；登录后锁定回复对象。
  const onReplyClick = (replyId: string, name: string) => {
    if (!user) {
      router.push("/login");
      return;
    }
    setReplyTo({ id: replyId, name });
  };

  if (loading) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 text-center text-sm text-[var(--page-fg-soft)]">
        {t.loading}
      </main>
    );
  }

  if (!thread) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 text-[var(--page-fg)]">
        <Link
          href="/"
          className="text-sm text-[var(--page-fg-soft)] transition-opacity hover:opacity-60"
        >
          ← {t.board.back}
        </Link>
        <p className="mt-8 text-center text-[var(--page-fg-soft)]">
          {t.thread.notFound}
        </p>
      </main>
    );
  }

  const board = t.boards.find((b) => b.slug === thread.board);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-[var(--page-fg)] md:py-16">
      <Reveal>
        <Link
          href={`/b/${thread.board}`}
          className="text-sm text-[var(--page-fg-soft)] transition-opacity hover:opacity-60"
        >
          ← {t.thread.backToBoard}
          {board ? ` · ${board.name}` : ""}
        </Link>

        {/* 主楼（显眼，置顶） */}
        <article className="mt-5 border-b border-[var(--page-hairline)] pb-8">
          <h1 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            {thread.title}
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-[var(--page-fg-soft)]">
            <span className="font-medium text-[var(--page-fg)]">
              {thread.authorName}
            </span>
            <span>{thread.authorHandle}</span>
            <span aria-hidden>·</span>
            <span>{formatRelativeTime(thread.createdAt, lang)}</span>
          </div>
          <p className="mt-6 whitespace-pre-line text-[1.0625rem] leading-[1.85] text-[var(--page-fg-soft)]">
            {thread.body}
          </p>
        </article>
      </Reveal>

      {/* 评论流（扁平、平级） */}
      <section className="mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--page-fg-soft)]">
          {t.thread.repliesTitle} · {thread.replyCount}
        </h2>

        <div className="mt-5 space-y-6">
          {thread.replies.map((r) => (
            <div key={r.id}>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="font-semibold text-[var(--page-fg)]">
                  {r.authorName}
                </span>
                <span className="text-[var(--page-fg-soft)]">
                  {r.authorHandle}
                </span>
                <span aria-hidden className="text-[var(--page-fg-soft)]">
                  ·
                </span>
                <span className="text-[var(--page-fg-soft)]">
                  {formatRelativeTime(r.createdAt, lang)}
                </span>
              </div>
              <p className="mt-1.5 whitespace-pre-line leading-[1.8] text-[var(--page-fg)]">
                {r.replyToName && (
                  <span className="text-[var(--page-fg-soft)]">
                    {t.thread.replyTo}{" "}
                    <span className="font-medium text-[var(--page-fg)]">
                      @{r.replyToName}
                    </span>
                    ：
                  </span>
                )}
                {r.body}
              </p>
              <button
                onClick={() => onReplyClick(r.id, r.authorName)}
                className="mt-1.5 text-xs font-medium text-[var(--page-fg-soft)] transition-colors hover:text-[var(--page-fg)]"
              >
                {t.thread.replyButton}
              </button>
            </div>
          ))}
        </div>

        {/* 底部共享回复框：默认回主楼；锁定对象时回复那个人。发完清对象 + 刷新。 */}
        <ReplyComposer
          threadId={thread.id}
          parentReplyId={replyTo?.id}
          replyingToName={replyTo?.name ?? null}
          onCancelReply={() => setReplyTo(null)}
          onPosted={() => {
            setReplyTo(null);
            load();
          }}
        />
      </section>
    </main>
  );
}
