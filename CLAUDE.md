# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (hot reload) — default port 3000, autoPort enabled
npm run build     # Production build + type-check (run this before committing)
npm run lint      # ESLint via next lint
npm run start     # Serve the last production build
```

No test framework is configured. Type safety is enforced through `npm run build` (runs `tsc --noEmit` internally via Next.js).

## Architecture

Single-page marketing website for Londeo Smart Parking (Hong Kong B2B SaaS). Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion.

### Bilingual i18n

All user-facing copy lives exclusively in **`lib/i18n.ts`** — a single `translations` object with `en` and `zh` (Traditional Chinese) keys. The `Lang = "en" | "zh"` type is threaded as a prop through every component.

- `app/page.tsx` holds the only `useState<Lang>` — the single source of truth for active language.
- Every component receives `lang: Lang` and reads `translations[lang].*` directly — no context, no i18n library.
- To add or change any copy, only edit `lib/i18n.ts`. The `en` key targets Hong Kong international audiences; `zh` uses Hong Kong Cantonese conventions (not Mainland Simplified).

### Component Pattern

Each section is a standalone `components/*.tsx` client component (`"use client"`). They all share the same structure:

```tsx
interface Props { lang: Lang }
export default function SectionName({ lang }: Props) {
  const t = translations[lang].sectionKey;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  // ...
}
```

Scroll-triggered entry animations use `framer-motion`'s `useInView` — set `once: true` so they fire only on first scroll-into-view.

### Styling System

All custom design tokens are in `tailwind.config.ts`:
- **Colours**: `neon-blue (#00D4FF)`, `neon-purple (#7B61FF)`, `neon-silver (#C0D8FF)`, `dark-900` → `dark-500` scale
- **Section backgrounds** alternate: `bg-dark-900` (odd) / `bg-dark-800` (even)

Key utility classes defined in `app/globals.css` (not Tailwind plugins):
- `.glass` / `.glass-strong` / `.glass-card` — glassmorphism with `backdrop-blur`
- `.text-gradient` / `.text-gradient-silver` — neon blue→purple / white→silver gradients via `background-clip: text`
- `.btn-neon` (outlined) / `.btn-neon-solid` (filled cyan CTA)
- `.bg-grid` — subtle cyan grid overlay used on section backgrounds
- `.glow-blue` / `.glow-blue-sm` — box-shadow neon glow effects

### Logo

`components/LondeoLogo.tsx` is an inline SVG recreation of the brand mark (LPR camera icon + barrier arm + LONDEO wordmark). It accepts `height` (px, scales proportionally) and `variant: "light" | "dark"` — use `"light"` on dark backgrounds (white wordmark), `"dark"` on light backgrounds (navy wordmark). Used in `Navigation` and `Footer`.

### Domain & Contact

All external references use `londeoaccess.com.hk`:
- Canonical URL and OpenGraph metadata: `app/layout.tsx`
- Dashboard mock URL: `components/ProductUI.tsx`  
- Contact email: `components/Contact.tsx` (`hello@londeoaccess.com.hk`)
- Footer domain display: `components/Footer.tsx`

### Dev Server (Preview Tool)

`.claude/launch.json` is configured for the `preview_start` tool. The active server ID from the current session is `fd98472c-86c8-4872-9365-b5f102b7fb0f` on port 3000. Always use `preview_start "Next.js Dev Server"` — do not start the server via Bash.
