# Londeo Access — Website Rebuild Plan

**Status:** Planning document only. No application code has been changed. This plan is grounded in the actual repository state documented in `docs/site-audit-baseline.md` — read that first for the "why."

---

## 1. A hosting/runtime constraint that changes one part of the original brief

`next.config.js` currently sets `output: "export"` and the site is deployed as static files to Hostinger (see baseline §6). A static export has **no Next.js server at runtime** — `app/api/*` route handlers do not exist in the deployed output. This means the brief's preferred option for the contact form ("如果网站支持 Next.js 服务器运行，优先实现 `POST /api/leads`") is **not directly available** without a hosting/runtime change, and this plan does not propose changing hosting, since that's explicitly out of scope ("不修改 Hostinger…不执行生产部署").

The good news: the codebase already moved past the "third-party FormSubmit" pattern the brief assumed — `components/Contact.tsx` submits directly to Supabase from the browser. That's the right shape for a static site, it just needs hardening (see §7). Recommendation: keep the static-export + Supabase pattern, and add server-side protections via a **Supabase Edge Function** (runs on Supabase's infrastructure, callable from a static site, not dependent on Next.js having a server) rather than trying to add `app/api/leads`. If server-rendering is ever wanted for other reasons, that's a separate, larger decision (would likely mean leaving Hostinger static hosting for something like Vercel — a `vercel.json` already exists in the repo but is git-ignored and not the active target today).

---

## 2. Information architecture

### 2.1 English routes

```
/
/platform
/products
/products/ai-lpr-camera
/products/fast-servo-barrier-gate
/products/edge-controller
/products/payment-kiosk
/solutions
/solutions/shopping-malls
/solutions/residential-estates
/solutions/commercial-buildings
/solutions/property-managers
/solutions/government-public
/case-studies
/about
/contact
/privacy-policy
/terms-of-service
/thank-you
```

### 2.2 Traditional Chinese mirror

Same structure under `/zh-hk/...` (e.g. `/zh-hk/products/ai-lpr-camera`). The existing `en`/`zh` keys in `lib/i18n.ts` become the seed content for this split — see §6 for how the content model absorbs this without duplicating logic.

### 2.3 Root English page

`/` keeps its current URL and keeps ranking for whatever the existing single-page site already earns (per the brief: "根英文页面继续保留，尽量避免破坏现有首页SEO"). It becomes a true homepage that links out to the new dedicated pages, rather than containing everything itself. Section components already exist (`Hero`, `Solutions`, `PlatformFeatures`, `HardwareIntegration`, `WhyHongKong`, `About`, `Contact`) — the plan is to trim each to a homepage-appropriate summary with a "Learn more →" link to its dedicated page, not throw the content away.

### 2.4 Per-page metadata, canonical, hreflang

Next.js App Router supports per-route `generateMetadata()` even in static export mode (metadata is resolved at build time). Each route above gets:

- Its own `<title>` / meta description (root `app/layout.tsx` currently hardcodes one global metadata block for the whole site — this needs to become a default that child routes override, not the only metadata block in the app).
- `alternates.canonical` pointing at itself, not the homepage — directly addresses the brief's warning "不要为每个页面都使用首页canonical."
- `alternates.languages` with `en-HK`, `zh-HK`, and `x-default` pointing at the paired route (e.g. `/products/ai-lpr-camera` ↔ `/zh-hk/products/ai-lpr-camera`).
- `html lang` set per the active locale segment (`en` at the root, `zh-Hant-HK` under `/zh-hk/`).

### 2.5 robots.txt / sitemap.xml

Neither exists today (confirmed in baseline §7). Both are addable as static-export-compatible route files (`app/robots.ts`, `app/sitemap.ts`), generated at build time — no server required, works with `output: "export"`.

### 2.6 404 handling

Today, unmatched paths return the homepage with HTTP 200 (Apache `.htaccess` SPA fallback — baseline §4). Once real routes exist for every path in §2.1, `public/.htaccess` needs its fallback rule scoped so genuinely unknown paths serve Next's static `404.html` with a real 404 status, instead of blanket-routing everything to `index.html`. This is an `.htaccess` change, not a DNS/hosting change — it does not touch domain, Hostinger account settings, or production data, but should be tested carefully since it's the one infra-adjacent file in scope.

### 2.7 Language switching stays on the page

Today, language is `useState` in `app/page.tsx` — switching languages doesn't change the URL and resets on navigation. With routed `/zh-hk/...` pages, the language switcher becomes a link to the equivalent path under the other locale prefix (not a state toggle), so it "停留在对应页面" as required.

---

## 3. Navigation & footer

- Replace `Navigation.tsx`'s `<button onClick={scrollIntoView}>` pattern with real `<Link>`s to the routes in §2.1 for top-level items (`Platform`, `Products`, `Solutions`, `Case Studies`, `Company`, `Book a Demo`), keeping anchor-scroll only for in-page jumps on the homepage itself.
- `Products` becomes a mega-menu/dropdown listing the four product pages (§2.1) rather than a single scroll target.
- Add active-route styling (`usePathname()` comparison) and breadcrumbs on every non-homepage route.
- Footer link columns (`Solutions`, `Platform`, `Company`) point at real routes instead of `scrollTo`. `Privacy Policy` and `Terms of Service` become real links to `/privacy-policy` and `/terms-of-service` — today they are inert `<button>`s with no handler at all (baseline §4).
- Logo click continues to go home; on non-homepage routes it should be a real `<Link href="/">`, not a `scrollTo(0)` call (today's implementation only makes sense on a single-page site).

---

## 4. Product center

Software/platform capability stays on `/platform` (existing `PlatformFeatures` content is the seed). `/products` becomes the hub for the four hardware lines in the brief:

1. AI LPR Camera
2. 24V Fast Servo Barrier Gate
3. Edge Controller / Cloud Parking Box
4. Payment Kiosk & Payment Integration

**Card requirements** (per brief, per product): real photo, name + model, one-line purpose, three key specs, application scenarios, `View Details`, `Download Datasheet`, `Request a Quote`.

**Detail page requirements** (per brief, per product): name/model/positioning, hero photo, gallery, key advantages, spec table, system compatibility, application scenarios, install/operation video slot, downloads area, FAQ, quote CTA, "WhatsApp an engineer" CTA.

Every field without a confirmed source renders a visible `Content required` state (see `docs/content-required.md`) rather than a placeholder that looks final. No invented model numbers, certifications, accuracy/lifespan figures, or "compatible with all major brands" language — see `docs/content-claims-review.md` for the specific phrases already flagged.

---

## 5. Solutions pages

Five pages per §2.1, each with independent content (not a copy of the homepage `Solutions` section, which is a 2–3 sentence summary today): customer pain points, recommended system architecture, required products (linking into `/products/*`), supported payment methods, implementation steps, compatibility-with-existing-equipment note, local service capability, related case studies (once they exist — see `content-required.md` §5), and a `Request Site Assessment` CTA.

---

## 6. Content model (no CMS today)

Supabase is already a dependency, but the only table implied by the current code is a lead/contact table (`contact_submissions`) — there is no evidence of a products/solutions/case-studies schema. Per the brief's "没有CMS" branch, the plan is:

- A typed content model in `lib/content/` (e.g. `products.ts`, `solutions.ts`, `case-studies.ts`) with a shared shape like:

```ts
interface ProductSpec { label: string; value: string }
interface Product {
  slug: string;
  name: { en: string; zh: string };
  model?: string;               // undefined → renders "Content required"
  tagline: { en: string; zh: string };
  keySpecs: ProductSpec[];      // empty → renders "Content required"
  images: string[];             // empty → renders "Content required"
  datasheetUrl?: string;
  faqs: { q: { en: string; zh: string }; a: { en: string; zh: string } }[];
}
```

- This absorbs the bilingual pattern already established by `lib/i18n.ts` without inventing a second, incompatible system.
- Interfaces are written so a future Supabase-backed (or Sanity, etc.) CMS can implement the same shape later — no schema lock-in, no production migration performed in this pass.
- The existing 23 hardcoded `lang === "en" ? … : …` ternaries found in `Contact.tsx`, `Footer.tsx`, `Navigation.tsx`, `ProductUI.tsx` (baseline §7) should be folded into this same typed model during implementation, so there's one source of copy, not two.

---

## 7. Lead capture

Given §1's hosting constraint, and confirmed with you directly: **the target is the existing `supabase/functions/send-contact-email` Edge Function, not FormSubmit.** `components/Contact.tsx` currently submits via a plain `formsubmit.co` form POST (added in your most recent commits), which has a real bug — the page navigates away on submit, so the in-app "success" state never renders — and the Edge Function that was added alongside it is not called from anywhere yet. Concrete plan to reconcile this:

- Revert `Contact.tsx`'s submit handler from the `formsubmit.co` form-POST pattern back to a JS `fetch`/`onSubmit`-driven submission (as the earlier Supabase-insert version already did), so the app controls the success/error state instead of the browser navigating away.
- **Consolidate persistence + notification into the Edge Function**, rather than doing a client-side Supabase table insert *and* a separate email call: extend `send-contact-email` to (1) validate required fields server-side, (2) check a honeypot field, (3) apply basic rate-limiting, (4) insert the row into `contact_submissions` using the service-role key (kept server-side, in Supabase secrets — never in the Next.js bundle), and (5) send the Resend notification email — all in one request/response. `Contact.tsx` then calls this single Edge Function endpoint instead of touching the Supabase client/table directly from the browser.
- Add `source_page`, `product_slug`, `lang`, and UTM parameters to the payload sent to the Edge Function (currently only `name/company/email/whatsapp/project_type/message/lang` are captured, and only by the old Supabase-insert version — the current FormSubmit version doesn't persist anywhere at all).
- Add an actual `/thank-you` route and redirect there on success, matching §2.1 and the brief's required thank-you content (received confirmation, 1-business-day response commitment, WhatsApp-for-urgent, relevant product resource link).
- Required-field set becomes: `Name`, `Company`, (`Email` **or** `WhatsApp` — at least one), `Enquiry Type`. Today `Email` is unconditionally `required`; this needs a small validation change (either field satisfies the requirement).
- `.env.example` gets added (does not exist today) documenting `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` **without real values**; the Edge Function's own secrets (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, service-role key) stay in Supabase secrets only, per the existing `supabase/functions/README.md` guidance — never added to `.env.local` or committed.
- Wire the now-real WhatsApp number (`+852 9041 6433`) into a proper `wa.me/85290416433?text=...` link (currently plain text only), and fix `OFFICE_ADDRESS`'s "North Territory" → "New Territories" (`content-claims-review.md` §5).
- Resolve the `hello@` vs. `sales@` email inconsistency (`content-required.md` §7) before finalizing footer/Privacy Policy copy.
- Privacy Policy page must disclose the Supabase-based data handling (per brief §十一, "在Privacy Policy说明第三方数据处理").

---

## 8. Conversion paths

Per brief §十:

| Audience | Primary CTA | Where |
|---|---|---|
| Software/platform buyers | `Book a Live Demo` | `/platform` primary CTA, homepage hero (paired with `Explore Products`) |
| Hardware buyers | `Request a Quote` / `Download Datasheet` | Every product card + detail page |
| Parking-project buyers | `Request Site Assessment` | Every solutions page |

- Homepage hero: both `Explore Products` and `Book a Demo` (today's hero already has two CTA slots — `cta1`/`cta2` in `lib/i18n.ts` — this is a copy/link change, not a new component).
- WhatsApp: replace the current literal placeholder (`+852 XXXX XXXX`, non-functional — baseline §5) with a real `wa.me/<number>` link once the number is supplied (`content-required.md` §7), pre-filled with the current page/product name in the message text.
- Email links become real `mailto:hello@londeoaccess.com.hk` anchors.
- Mobile: add a slim sticky bottom CTA bar on product/solution pages that doesn't obscure content (per brief), reusing the same CTA logic as the page's primary action.

---

## 9. SEO

- Per-route metadata, canonical, hreflang — §2.4.
- `app/robots.ts` and `app/sitemap.ts` — §2.5.
- JSON-LD structured data: `Organization` sitewide (root layout), `Product` on each product detail page, `BreadcrumbList` on every non-homepage route, `FAQPage` where a real FAQ section exists. No `AggregateRating`/review/fake-inventory structured data — matches the brief's explicit prohibition.
- Open Graph/social image: currently the OG tags in `app/layout.tsx` have no dedicated image asset — needs a real 1200×630 share image (see `content-required.md` §8) rather than none at all.
- Images: `next.config.js` sets `images.unoptimized: true` (required for static export) — `next/image` is still usable for automatic `alt`, sizing and lazy-loading discipline even without the optimization server; every product/solution image gets a meaningful `alt`, not filename text.
- Internal linking: product/solution pages cross-link to each other (e.g. a solution page links to the specific products it recommends) and back to `/platform` and `/contact`.

---

## 10. Analytics

No GA4/GTM/analytics of any kind exists in the codebase today (confirmed, baseline §7) — nothing to "continue using." Plan:

- Add a small, typed event-tracking helper (`lib/analytics.ts`) with the exact event names from the brief: `nav_product_click`, `product_view`, `datasheet_download`, `quote_start`, `form_submit_success`, `whatsapp_click`, `demo_booking`, `language_switch`.
- Wire calls into the relevant components as they're built.
- The actual GA4 property ID is **not invented** — `.env.example` documents `NEXT_PUBLIC_GA_ID` as a variable to fill in later; the tracking script itself only loads if that variable is present, so nothing fake ships to production before a real ID exists.

---

## 11. Phased roadmap

| Phase | Scope | Depends on |
|---|---|---|
| 1 | Routing skeleton: all URLs in §2.1 exist and render (even with `Content required` states), nav/footer become real links, breadcrumbs, per-route metadata/canonical/hreflang, robots/sitemap | Nothing external — can start immediately once code changes are authorized |
| 2 | Content model (§6) + fold in the 23 hardcoded ternaries + migrate existing homepage section copy into the new pages | Phase 1 |
| 3 | Lead form hardening (§7): Supabase Edge Function, thank-you page, UTM capture, required-field logic | Phase 1 |
| 4 | Product/solution real content swapped in as `content-required.md` items arrive | Ongoing, independent of other phases |
| 5 | Structured data + analytics event wiring + `.htaccess` 404 fix | Phase 1–2 |
| 6 | Full test pass (§13) + PR | All above |

This plan intentionally does not compress everything into one giant change — each phase is small enough to review and roll back independently.

---

## 12. Git / GitHub workflow (for when code changes are authorized)

This Cowork sandbox has **no `gh` CLI and no GitHub write credentials** (see baseline §1) — it cannot push branches or open a PR on your behalf. When you're ready to proceed with actual code changes, either run the sequence below yourself (in Claude Code or your own terminal, where `gh auth status` is already authenticated), or reconnect with an environment that has GitHub write access.

```bash
git fetch --all --prune
git switch main && git pull --ff-only
git switch -c backup/pre-londeo-site-optimization-20260728
git push -u origin backup/pre-londeo-site-optimization-20260728
git switch main
git switch -c claude/londeo-site-optimization-20260728
# ... implement Phase 1–6 above, committing in small steps, e.g.:
#   chore: establish repository baseline and safety docs
#   feat: add localized route architecture
#   feat: rebuild product navigation and product pages
#   feat: add solution pages and conversion paths
#   fix: improve lead form and contact actions
#   fix: add seo metadata sitemap robots and structured data
#   docs: add content and claims review checklists
git push -u origin claude/londeo-site-optimization-20260728
gh pr create --draft \
  --title "Londeo Access website product, navigation and conversion optimization" \
  --body-file docs/pr-description-template.md
```

Do not run `git reset --hard`, force-push, or rewrite history on `main` or `deploy`. Do not merge the PR or touch the `deploy` branch (that's GitHub Actions' job, per baseline §6).

A ready-to-use PR description is provided in `docs/pr-description-template.md` — fill in the actual diffstat/screenshots once the code changes exist; the structure already matches what the brief's §十七 requires (goals, page structure changes, new pages, product display changes, form/conversion changes, SEO changes, test results, items still needing company confirmation, screenshots/preview method, rollback method).

---

## 13. Test/acceptance checklist (for the phase-6 pass)

Desktop + mobile at 375 / 768 / 1440px:

- [ ] Every nav link, footer link, breadcrumb resolves to a real page (no dead buttons)
- [ ] Every product detail page renders, including `Content required` states where applicable
- [ ] Every solution detail page renders with independent content (not homepage copy reused verbatim)
- [ ] `en` ↔ `zh-hk` switch stays on the equivalent page in both directions
- [ ] Contact form: validation (Name/Company/Email-or-WhatsApp/Enquiry Type), honeypot doesn't block real users, success → `/thank-you`, failure shows a clear error
- [ ] WhatsApp link opens `wa.me` with the page/product name pre-filled (once a real number exists)
- [ ] `mailto:` link opens correctly
- [ ] Datasheet download buttons work (once files exist) or show `Content required`
- [ ] Unknown path → real 404, not homepage-with-200
- [ ] `/robots.txt`, `/sitemap.xml` return real, correct content
- [ ] Canonical + hreflang correct per page (not all pointing at homepage)
- [ ] Structured data validates (Organization/Product/BreadcrumbList/FAQ where present)
- [ ] No console errors, no unexpected horizontal scroll, keyboard-navigable nav and forms, form labels present, basic color-contrast check
- [ ] `npm run build` succeeds in a normal (non-sandboxed) environment — this sandbox could not confirm build/lint due to the network restriction in baseline §3; must be verified locally or in CI before merge
