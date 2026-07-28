# Content Required From Londeo

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

## 5. Case studies

**None exist in this repository today.** For each case study to be published:

- [ ] Customer name and logo usage permission (written consent to display)
- [ ] Site type (mall / residential / commercial / government) and approximate scale (number of bays, entries/exits)
- [ ] What was installed (which hardware + software modules)
- [ ] Real outcome data if available (with source — e.g. "reduced average exit time from X to Y" only if actually measured)
- [ ] At least one real photo of the installed site, or written permission to use a generic (clearly-labeled) illustrative image instead
- [ ] Quote/testimonial with named contact and permission to publish, if available

Until at least one real, permitted case study exists, the `/case-studies` section should say so plainly rather than showing invented examples.

## 6. Certifications & compliance documents

- [ ] ISO 27001 certificate (if currently held) — scope and expiry date
- [ ] Octopus integration certification/approval letter, if formally certified
- [ ] FPS integration approval/registration, if formally certified
- [ ] Any other product certifications (CE, CCC, etc.) for hardware sold under the Londeo brand

## 7. Company / legal identity

- [ ] Confirmed exact registered company name (to check against "Londeo Smart Parking Limited" currently hardcoded in the footer)
- [x] ~~Registered/business address in Hong Kong~~ — **now present** in `components/Contact.tsx` (`OFFICE_ADDRESS`): "Flexi Space 12, Level 8, No. 5, Lok Yip Road, Fanling, North Territory, 999077, Hong Kong." **Still needs one fix before publishing:** "North Territory" → "New Territories" (see `content-claims-review.md` §5). Also confirm whether this address should be reused site-wide (footer, Privacy Policy, structured data) or is specific to this one contact panel.
- [x] ~~"North Territory" → "New Territories" correction location~~ — **found**, see above.
- [x] ~~A real, working WhatsApp business number~~ — **now present**: `+852 9041 6433` (`components/Contact.tsx`). Still needs to become a real clickable `wa.me/85290416433`-style link with a pre-filled message — currently displayed as plain text only.
- [ ] Business hours / support availability (to confirm or replace the "6 days a week" claim in `content-claims-review.md`)
- [ ] Confirm `sales@londeoaccess.com.hk` vs. `hello@londeoaccess.com.hk` — both now appear in the codebase (footer/CLAUDE.md use `hello@`, the newer `Contact.tsx` and the Resend edge function use `sales@`). Pick one as the canonical public contact address, or confirm both are intentionally different (e.g. sales vs. general).

## 8. Brand assets

- [ ] High-resolution logo variants (current repo only has one transparent PNG: `public/londeo-logo-transparent.png`) — vector/SVG source if available, plus a social-share/Open Graph image (1200×630) for link previews
- [ ] Any brand guideline document (colors already exist in `tailwind.config.ts` — confirm these are the approved brand colors, not just a placeholder design)

---

## How this will be handled in the meantime

Every page section that depends on an item above will ship with a clearly-labeled **`Content required`** state (not hidden, not faked) so the page structure, SEO, and navigation can all be built and tested now, and swapped to real content the moment it's supplied — without another round of page rebuilding.
