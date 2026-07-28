# Content Required From Londeo

**Status update (implementation pass):** the five product pages, five solution pages, and every other route in the brief's information architecture now exist and are live on the branch (`lib/content/products.ts`, `lib/content/solutions.ts`). Every gap below still applies exactly as written — the pages render a real `ContentRequired` component (`components/ContentRequired.tsx`) wherever a spec, photo, datasheet or video is missing, instead of a fabricated value. A fifth product, **Pedestrian Access Gates**, was added to match the brief's explicit five-product requirement (§十八) — its own content gaps are listed in a new §5 below, and the original §5 (case studies) is renumbered §6, §6 (certifications) is §7, §7 (company/legal) is §8, §8 (brand assets) is §9.

**Resolved since the original audit:** WhatsApp number and office address are now wired into real `wa.me` / plain-text links (`lib/site-config.ts`), "North Territory" is corrected to "New Territories" everywhere, and the `sales@` vs. `hello@` email inconsistency is resolved by canonicalizing on `sales@londeoaccess.com.hk` in code (see `content-claims-review.md` for the full trail). What's still outstanding from §8 (company/legal) below is only the **exact registered legal entity name** — the site currently uses "Londeo Access" everywhere and does not assert "Londeo Smart Parking Limited" or any other specific entity name until that's confirmed.

**Purpose:** Everything below is needed to build the new product, solution and case-study pages honestly — with real photos, real specs, and real proof points instead of placeholders. Checked against the current repository: **`public/` currently contains only `londeo-logo-transparent.png` and `.htaccess` — there is no existing product photography, datasheet, certificate, or case-study asset anywhere in this repo.** Everything in this list is therefore a genuine gap, not a duplication of something already on file.

Until each item is supplied, the corresponding page section will render a visible **`Content required`** state rather than a fabricated placeholder that looks real. No stock/AI-generated product photos, no invented model numbers, and no invented customer logos will be used.

---

## 1. Product: AI LPR Camera

- [ ] Real product photo(s) — front, angle, in-situ (mounted on a lane/entrance)
- [ ] Exact model number / model family currently sold or OEM'd
- [ ] Manufacturer / OEM source (Londeo's own hardware vs. re-badged third party)
- [ ] Key specs: recognition accuracy (with test methodology/conditions), capture distance/lane width, night vision / IR spec, supported plate formats (HK format confirmed?), frame rate, video interface (analog/IP), power requirements, operating temperature range, IP rating
- [ ] Any certification (CE/FCC/CCC/etc.) with certificate file
- [ ] Downloadable datasheet (PDF)
- [ ] Installation/wiring or setup video, if one exists

## 2. Product: 24V Fast Servo Barrier Gate

The original brief suggested these selling points — **each needs to be checked against a real spec sheet before publishing**, none are confirmed in this repository yet:

- [ ] 24V low-voltage servo — confirm actual voltage/motor spec
- [ ] 0.3s or 0.6s fast open/close time — confirm actual tested figure and conditions (arm length, weight)
- [ ] Duty cycle / rated lifecycle (open-close cycles) — confirm actual tested or rated figure
- [ ] Noise level (dB) if measured
- [ ] High-traffic suitability — confirm rated duty cycle for continuous/high-volume car parks
- [ ] Control board and motion-algorithm capability — what's proprietary vs. third-party
- [ ] OEM/ODM capability — confirm whether this is actually offered today and under what terms
- [ ] Real product photo(s) — full unit, control board, arm/boom options
- [ ] Model number(s) and available arm lengths/configurations
- [ ] Datasheet (PDF)
- [ ] Installation or operation video, if one exists

## 3. Product: Edge Controller / Cloud Parking Box

- [ ] Real product photo(s) of the physical unit
- [ ] Model number
- [ ] Specs: CPU/compute capability, storage, supported I/O (RS485/CAN/TCP/GPIO — matches what's actually wired to LPR camera, barrier gate, LED display, payment kiosk), offline/local-fallback behavior, power input, operating temperature range, enclosure/IP rating
- [ ] Cloud connectivity method (what protocol talks to the Londeo backend)
- [ ] Datasheet (PDF)

## 4. Product: Payment Kiosk & Payment Integration

- [ ] Real product photo(s) of the kiosk hardware (if Londeo supplies physical kiosks) — or confirm this is a software/integration-only offering with third-party kiosk hardware
- [ ] Supported payment methods **confirmed as actually live today** — the current homepage lists Octopus, FPS, Visa/Mastercard, Apple Pay/Google Pay, WeChat Pay/Alipay; confirm which of these are production-proven vs. planned/roadmap
- [ ] Any payment scheme certification/approval documentation (Octopus, FPS) if claiming certified integration — see `content-claims-review.md` §2
- [ ] Datasheet (PDF), if a physical kiosk product exists

## 5. Product: Pedestrian Access Gates

**Added in this pass** to satisfy the brief's five-product requirement (§十八) — not part of the original four-product audit, so nothing here duplicates an earlier gap:

- [ ] Real product photo(s) — swing gate, flap barrier and fast-lane variants
- [ ] Model number(s) per gate format
- [ ] Confirm which gate formats (swing / flap / fast-lane) are actually supplied today vs. planned
- [ ] Lane width and throughput (persons/minute) per format
- [ ] Confirm third-party facial-recognition terminals that have actually been integrated/tested, if any (the page currently says this is "available" generically, not naming a specific tested vendor)
- [ ] Operating temperature range, IP rating
- [ ] Datasheet (PDF)
- [ ] Installation or operation video, if one exists

## 6. Case studies

**None exist in this repository today.** For each case study to be published:

- [ ] Customer name and logo usage permission (written consent to display)
- [ ] Site type (mall / residential / commercial / government) and approximate scale (number of bays, entries/exits)
- [ ] What was installed (which hardware + software modules)
- [ ] Real outcome data if available (with source — e.g. "reduced average exit time from X to Y" only if actually measured)
- [ ] At least one real photo of the installed site, or written permission to use a generic (clearly-labeled) illustrative image instead
- [ ] Quote/testimonial with named contact and permission to publish, if available

Until at least one real, permitted case study exists, `/applications` (renamed from the originally-planned `/case-studies` per the brief's §九 information architecture) says so plainly rather than showing invented examples.

## 7. Certifications & compliance documents

- [ ] ISO 27001 certificate (if currently held) — scope and expiry date. **Resolved in code for now:** the ISO 27001 trust badge has been removed from the footer since no certificate is on file — re-add it once one exists.
- [ ] Octopus integration certification/approval letter, if formally certified
- [ ] FPS integration approval/registration, if formally certified
- [ ] Any other product certifications (CE, CCC, etc.) for hardware sold under the Londeo brand

## 8. Company / legal identity

- [ ] Confirmed exact registered company name. **Resolved in code for now:** the site no longer states "Londeo Smart Parking Limited" (which was never verified against an incorporation record) anywhere — it uses the brand name "Londeo Access" throughout instead, per the brief's explicit instruction not to guess a legal entity name. Replace with the real registered name once confirmed.
- [x] ~~Registered/business address in Hong Kong~~ — **resolved**: `lib/site-config.ts` (`OFFICE_ADDRESS_EN`/`OFFICE_ADDRESS_ZH`) now reads "Flexi Space 12, Level 8, No. 5, Lok Yip Road, Fanling, **New Territories**, Hong Kong," used on the Contact page and in the Organization JSON-LD. The Privacy Policy page does not currently repeat the physical address (only email/WhatsApp) — add it there too if the site owner wants it public on that page as well.
- [x] ~~"North Territory" → "New Territories" correction~~ — **done**, see above.
- [x] ~~A real, working WhatsApp business number~~ — **resolved**: `+852 9041 6433` is now a real `wa.me/85290416433` link (`lib/whatsapp.ts`), pre-filled with page/product context, used in the header CTA, footer, Contact page and every product/solution detail page.
- [ ] Business hours / support availability (to confirm or replace the "6 days a week" claim in `content-claims-review.md` — already softened in code to a description without a specific day count, pending a real confirmed schedule)
- [x] ~~Confirm `sales@londeoaccess.com.hk` vs. `hello@londeoaccess.com.hk`~~ — **canonicalized on `sales@londeoaccess.com.hk`** in `lib/site-config.ts` (matches the Resend edge function's sender/reply-to). `hello@` is no longer used anywhere in the code; confirm this is the intended long-term public address.

## 9. Brand assets

- [ ] High-resolution logo variants (current repo only has one transparent PNG: `public/londeo-logo-transparent.png`) — vector/SVG source if available, plus a social-share/Open Graph image (1200×630) for link previews
- [ ] Any brand guideline document (colors already exist in `tailwind.config.ts` — confirm these are the approved brand colors, not just a placeholder design)

---

## How this will be handled in the meantime

Every page section that depends on an item above will ship with a clearly-labeled **`Content required`** state (not hidden, not faked) so the page structure, SEO, and navigation can all be built and tested now, and swapped to real content the moment it's supplied — without another round of page rebuilding.
