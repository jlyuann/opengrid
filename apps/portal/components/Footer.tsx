"use client";

import { useCopy } from "@/lib/useCopy";

export function Footer() {
  const t = useCopy().footer;
  const nav = useCopy().nav;

  return (
    <footer className="border-t border-[var(--page-hairline)] py-14 text-[var(--page-fg)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <div className="text-lg font-semibold tracking-tight">
          {nav.brand}
          <span className="text-[var(--page-fg)]">.</span>
        </div>
        <p className="max-w-md leading-relaxed text-[var(--page-fg-soft)]">
          {t.tagline}
        </p>
        <p className="mt-2 text-sm text-[var(--page-fg-soft)]">{t.rights}</p>
        <p className="text-xs uppercase tracking-[0.15em] text-[var(--page-fg-soft)]">
          {t.madeWith}
        </p>
      </div>
    </footer>
  );
}
