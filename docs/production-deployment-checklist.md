# Production Deployment Checklist

This branch (`claude/londeo-site-optimization-20260728`) has **not** been deployed to production, and this pass did not touch DNS, the Hostinger account, or `main`/`deploy`. Before merging and letting the existing `deploy.yml` → Hostinger pipeline publish this:

## Must verify before go-live

- [ ] **Apache rewrite rule for extensionless URLs.** `public/.htaccess` now includes a rule mapping `/products/ai-lpr-camera` → `products/ai-lpr-camera.html` (Next's static-export default output shape, confirmed via a local build — see below). This could not be tested against a real Apache server in this environment (no `apache2`/`httpd` binary available here). **Before merging, deploy this branch's `out/` to a Hostinger staging subdomain (or any Apache host) and manually check:** every top-level route, every product/solution detail page, both locales, with and without a trailing slash, plus one genuinely unknown path (expect a real HTTP 404, not a 200).
- [ ] **Supabase Edge Function secrets.** `send-contact-email` now expects `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (see `supabase/functions/README.md`) and needs `supabase functions deploy send-contact-email` re-run since its code changed (honeypot, rate limit, new fields). Verify these secrets are still current.
- [ ] **`NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`** must be present as GitHub Actions repo secrets (`.github/workflows/deploy.yml` already injects them) — confirm they still point at the intended Supabase project.
- [ ] **301 redirects.** `public/.htaccess` already handles `http → https` and `londeoaccess.com.hk → www.londeoaccess.com.hk` at the Apache level — no Hostinger panel configuration should be needed for that, but confirm Hostinger's own domain/SSL panel isn't also trying to do a conflicting redirect.
- [ ] **Google Search Console / Bing Webmaster Tools / Baidu 站长平台 verification.** No verification meta tags or files exist yet — this pass did not fabricate one. Once real verification codes are issued, add them to `app/(en)/layout.tsx` / `app/zh-hk/layout.tsx` metadata (`verification: { google: "...", other: { "msvalidate.01": "...", "baidu-site-verification": "..." } }`) or as a static file under `public/`.
- [ ] **`NEXT_PUBLIC_GA_ID`.** Not set — no analytics currently fire (see `lib/analytics.ts`). Add a real GA4 measurement ID (and the loader script) when one exists; nothing needs to change in the event-tracking call sites, which already call `trackEvent(...)` everywhere the brief asked for (`nav_product_click`, `product_view`, `datasheet_download`, `quote_start`, `form_submit_success`, `form_submit_error`, `whatsapp_click`, `email_click`, `demo_booking`, `language_switch`) — most of these call sites exist, but `product_view`/`solution_view`/`demo_booking` are not yet wired into a `useEffect` on the detail pages; that's a small follow-up once a real GA ID exists and view-tracking is worth the effort.
- [ ] **Legal review.** `/privacy-policy` and `/terms-of-service` are working drafts (see the content in `lib/content/pages.ts` → `legalPages`) — they have **not** been reviewed by external legal counsel. Do not represent them as legally reviewed until that happens.
- [ ] **Content gaps.** See `docs/content-required.md` (product photos/specs/datasheets/videos, case studies, certifications, exact legal entity name) and `docs/content-claims-review.md` (resolved claims, kept as an audit trail) before considering the site "content complete."
- [ ] **Node/npm version.** `.github/workflows/deploy.yml` uses Node 20; local development in this pass used Node 22 — both build the same output, but confirm CI still passes after this branch's dependency bump (`next` 14.2.5 → 14.2.35, a same-minor-line security patch, not a major upgrade).

## Confirmed working in this environment

- `npm run lint` — clean (0 warnings/errors) after adding `.eslintrc.json` (`extends: "next/core-web-vitals"`).
- `npx tsc --noEmit` — clean (0 errors).
- `npm run build` — succeeds, generates all 47 static pages (English + `/zh-hk` mirror, including the 5 product and 5 solution detail routes via `generateStaticParams`), `robots.txt`, `sitemap.xml`.
- Verified via a local static file server against the generated `out/`: correct `<html lang>` per locale (`en` vs `zh-Hant-HK`), correct per-page `<title>`, correct self-referencing `<link rel="canonical">` + `hreflang` alternates, `BreadcrumbList`/`Organization` JSON-LD present, real `wa.me` and `mailto:` links render, "North Territory" no longer appears anywhere in the built output, none of the previously-flagged unverified claims (500+ lots, 99.9% uptime, 2M+ transactions, 99.5% accuracy, ISO 27001, "all major brands," "certified integration") appear in the built output either.
- Not verified here (no Apache in this sandbox): the `.htaccess` extensionless-URL rewrite and the `ErrorDocument 404` behavior — see the first checklist item above.

## Rollback

- `backup/pre-londeo-site-optimization-20260728` preserves the pre-upgrade state and was not touched by this branch.
- Every change is a normal commit on `claude/londeo-site-optimization-20260728` — reverting means not merging this branch, or `git revert`-ing specific commits (they're scoped by concern: routing skeleton, product pages, solution pages, contact form, etc. — see `git log`).
- The Supabase Edge Function change is additive/backward-compatible at the API boundary (new optional fields, same required-field names except `project_type` → `enquiry_type` — see the commit that hardened the contact form); redeploying the previous function version would still work with the old `Contact.tsx` if this branch were reverted in isolation.
- No database migrations were included in this pass.
