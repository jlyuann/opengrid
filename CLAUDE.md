# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ Next.js 16 — not the version in your training data

This repo runs **Next.js 16.2.6** (App Router + Turbopack), which has breaking changes vs. older Next. Before writing any Next-specific code, read the relevant guide in `node_modules/next/dist/docs/` and heed deprecation notices. Notably, dynamic-route `params` are **async** (a `Promise`) and must be awaited (see `apps/forum/app/b/[slug]/page.tsx`, `apps/forum/app/t/[id]/page.tsx`).

## Commands

This is an **npm workspaces monorepo**. Run everything from the repo root:

```bash
npm install            # links the @opengrid/ui workspace into both apps
npm run dev:portal     # portal site → http://localhost:3000
npm run dev:forum      # forum site → http://localhost:3001  (note: -p 3001)
npm run build:portal   # / build:forum
npm run lint:portal    # / lint:forum  (eslint, flat config)
```

Both dev servers can run at once (3000 / 3001). There is **no test suite**; the type-checker is the safety net — verify changes with `npx tsc --noEmit` inside `apps/portal` or `apps/forum`.

## Architecture

OpenGrid is a bilingual (中文/English) karting & motorsport community, modeled on the OpenAI product split:

- **`apps/portal`** — the marketing/navigation front door (≈ openai.com). Routes: `/` (Hero/Vision/Guide/Events/Join), `/knowledge`, `/about`, `/community` (307-redirects to the forum).
- **`apps/forum`** — a *separate site* (≈ chatgpt.com), the real product: a Discord-style sidebar forum. Routes: `/` (home), `/b/[slug]` (board), `/t/[id]` (thread). Currently **all fake data** from `apps/forum/lib/forum-data.ts` — no backend, auth, or real writes yet (Supabase is the planned next step).
- **`packages/ui`** (`@opengrid/ui`) — the shared design system both apps consume.

The two apps deploy independently to independent domains. The portal links to the forum via an **absolute URL**, not a route: `apps/portal/lib/links.ts` → `FORUM_URL` (env `NEXT_PUBLIC_FORUM_URL`, defaults to `http://localhost:3001`).

### The shared/per-app split (important — respect this boundary)

`@opengrid/ui` holds **only content-agnostic design and mechanics**, never copy:
- `themes.ts` / `theme.tsx` — full-page F1-team color theming (auto WCAG contrast)
- `motion.ts` — `buttonMotion`, `springSnappy` (all animation feel lives here)
- `i18n.tsx` — `LanguageProvider` / `useLanguage` / `Lang`. This is a **pure state machine** with no dictionary dependency.
- `Reveal.tsx`, `Reader.tsx` (fullscreen reader + `Article*` typography subcomponents), `ThemePicker.tsx`
- `tokens.css` — Tailwind v4 `@theme`/`@property` tokens, the `--page-bg`/`--page-fg` full-page theme layer, font stacks
- Everything is re-exported through `src/index.ts`; import via `@opengrid/ui`, never deep paths.

**Each app keeps its own** `lib/dictionary.ts` (bilingual copy, `zh`/`en` kept structurally parallel by the TS `Content` type) + `lib/useCopy.ts` (`useLanguage().lang` → indexes the local dictionary) + its own `Nav`/`Footer` and page components. `SiteThemePicker.tsx` in each app wraps the shared `ThemePicker`, passing localized `labels` as props (the picker takes no dictionary).

When adding shared UI: if it contains user-facing text or routes, it belongs in the app, not in `@opengrid/ui`.

### Cross-package build wiring (Next 16 + Tailwind v4)

Three things make the workspace package compile correctly — replicate them in any new app:
1. `next.config.ts`: `transpilePackages: ["@opengrid/ui"]`
2. `app/globals.css`: `@import "tailwindcss"` → `@import "../../../packages/ui/src/tokens.css"` → `@source "../../../packages/ui/src"` (the `@source` line is what makes Tailwind v4 scan class names inside shared components — omit it and shared-component styles silently vanish).
3. Fonts: each app defines Inter + Source_Serif_4 via `next/font` in its own `layout.tsx`, exposing the **same** `--font-inter` / `--font-source-serif` CSS var names that `tokens.css` references.

### Theming model

User picks a 2026 F1-team color (bottom-right `ThemePicker`) that paints the whole page via two `@property`-registered vars `--page-bg`/`--page-fg` (0.8s transition); text color flips black/white by luminance. Themes have three modes: solid fill (default), `glow` (near-black + glow for high-saturation reds), or explicit `bg`+`fg`. Use the `--page-*` CSS vars for any new surface so it participates in theming.

## Git & working conventions

- The user works branch-first: `master` holds the monorepo baseline; polish/feature work happens on branches (e.g. `polish/portal-content`) that can be reverted to `master`.
- `.gitignore` is intentionally **non-anchored** (`node_modules/`, `.next/`) so it ignores those dirs at any monorepo depth — keep it that way.
- This is a solo college-application project; the maintainer prefers discussing direction before large changes and writing rigorous, source-cited content (no fabricated facts). When unsure about product direction, ask.
