# CMS Setup Required

**Status:** No CMS credentials exist in this environment, and the brief explicitly says that's not a blocker ("如果没有CMS凭据：不阻塞网站升级") — this document describes what was built instead, and what a real CMS integration would need.

## What exists today: a typed, bilingual content model (not a CMS)

Per `docs/website-rebuild-plan.md` §6, content lives in `lib/content/`:

- `lib/content/types.ts` — shared shapes (`Product`, `Solution`, `SpecRow`, `FAQItem`, `Bi`/`BiList` for bilingual strings)
- `lib/content/products.ts` — the 5 hardware/software products
- `lib/content/solutions.ts` — the 5 Hong Kong venue-type solutions
- `lib/content/nav.ts` — navigation structure (top nav, footer links)
- `lib/content/pages.ts` — copy for static pages (About, Applications, Resources, legal pages, thank-you, homepage sections)
- `lib/i18n.ts` — the pre-existing homepage-section copy (Hero, Platform, Hardware, Why-HK, About, Contact, Footer), left in place and reused by the new pages rather than duplicated

Every bilingual field is `{ en: string; zh: string }` (or a `BiList`/nested object of the same shape) — one object holds both languages, so there is no risk of the English and Chinese copy drifting into two unrelated data structures. Fields the site can't yet back with a verified fact (`model`, `datasheetUrl`, `videoUrl`, individual `SpecRow.value`) are `undefined` rather than filled with invented data, and the corresponding UI renders a `ContentRequired` state (`components/ContentRequired.tsx`) instead of hiding the gap.

This is intentionally **not** a database — it's plain TypeScript, imported at build time. For a fully static (`output: "export"`) site with no live database dependency for its core content, this is the correct baseline; it just means editing a product/solution today requires a code change + redeploy, not a CMS login.

## What a real CMS integration would need to change

If/when a CMS is introduced (Supabase tables, Sanity, or similar), the migration path is designed to be additive, not a rewrite:

1. **Keep the same shapes.** A CMS-backed `getProducts()` / `getSolutions()` function should return data matching `Product`/`Solution` from `lib/content/types.ts`. Every component that consumes `lib/content/products.ts` (`ProductCard`, `ProductDetailView`, `ProductsView`, `Contact`'s product dropdown, `SolutionDetailView`, etc.) imports from `lib/content/products.ts`/`solutions.ts` by name — swapping those two files' internals for a CMS adapter (e.g. a Supabase query that maps rows into the same `Product[]` shape) would not require touching the consuming components.
2. **Static export implication.** Because `next.config.js` sets `output: "export"`, any CMS-backed data must be read **at build time** (via `generateStaticParams`/module-level fetch), not at request time — there is no Next.js server in production to serve dynamic reads. A future CMS-backed build would need to run `next build` after content changes (e.g. via a CMS webhook triggering the existing GitHub Actions workflow), rather than expecting instant updates without a rebuild.
3. **Auth requirements for any admin UI.** Per the brief: no anonymous write access, no exposed service-role key in the browser bundle, permission-scoped access, reviewable migrations, Draft/Published state, and English/Chinese fields kept together (not two separate tables/rows that can silently drift). None of this exists yet — it's a requirement for whoever builds the admin UI, not something to bypass with a quick unauthenticated form.
4. **Supabase is already a dependency** (`@supabase/ssr`, `@supabase/supabase-js`) — used today only for the contact-form Edge Function (`supabase/functions/send-contact-email`). If Supabase becomes the CMS backend too, the same project can host a `products`/`solutions`/`downloads` schema, but that schema does not exist yet and this pass did not create one (no migration files were added — creating and reviewing a schema is a decision for whoever has Supabase project access, not something to guess at from this branch).

## Do not build

Per the brief: no unauthenticated public admin backend, no direct production-database-destructive migration, no schema invented and applied without review. If Supabase project access becomes available, the next step is a reviewable migration file (not applied automatically) proposing the `products`/`solutions`/`downloads`/`faqs` tables mirroring `lib/content/types.ts`, plus RLS policies restricting writes to authenticated staff.
