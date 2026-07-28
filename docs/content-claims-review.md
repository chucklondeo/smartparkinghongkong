# Content & Claims Review

**Status update (implementation pass, commit `975864e` on `claude/londeo-site-optimization-20260728`):** every row in §1–§4 below has now been rewritten in `lib/i18n.ts` and the corresponding components, following the "recommended treatment" already logged here — nothing was invented; each new sentence is the neutral rewrite this document already proposed. §5 (identity/entity information) is also resolved for WhatsApp number, office address ("New Territories") and the `sales@` vs `hello@` email split (canonicalized to `sales@` in `lib/site-config.ts`, with `hello@` treated as legacy — see `content-required.md` §7 for the one remaining confirmation needed: the exact registered legal entity name, which the site now avoids stating and uses "Londeo Access" instead). This document is kept as the audit trail of what changed and why; it is not being deleted so the reasoning stays attached to the diff.

**Purpose:** Every performance figure, certification, or absolute claim currently on the site, found by searching the actual repository (`lib/i18n.ts`, `components/*.tsx`). None of these are removed or changed in this pass — this is a review list for the site owner to confirm, provide evidence for, or approve rewording. Nothing here was invented; it is a transcription of what is already live in the code.

**Rule applied:** if there is no certificate, audit report, contract, or other evidence in the repository, the claim is not treated as an established fact in the new content plan. It is either rewritten neutrally, marked as illustrative/demo data, or left out until evidence is provided.

---

## 1. Usage / scale statistics

| Claim (verbatim from code) | Location | Evidence in repo? | Recommended treatment |
|---|---|---|---|
| "500+ Parking Lots Managed" / "管理停車場數量 500+" | `lib/i18n.ts` → `hero.stat1` | None found | Do not publish as a hard number without a source. Replace with a qualitative statement ("Deployed across shopping malls, residential estates and commercial buildings in Hong Kong") **or** mark explicitly as `Demo Data` in the design until a real, current figure is supplied. |
| "99.9% System Uptime" | `lib/i18n.ts` → `hero.stat2`, repeated in `about.values` ("99.9% uptime SLA") | None found (no SLA document, no uptime monitoring report in repo) | Do not publish as a guaranteed SLA figure without a contract/monitoring report backing it. Replace with neutral language ("Built for high-availability operation") unless a real SLA/monitoring report is supplied. |
| "2M+ Transactions Monthly" / "200萬+ 每月交易次數" | `lib/i18n.ts` → `hero.stat3` | None found | Same treatment as above — remove or mark as Demo Data until sourced. |
| "99.5% Recognition Accuracy" (LPR) | `lib/i18n.ts` → `platform.ops.items` ("LPR Camera Recognition… 99.5% accuracy") | None found | Recognition accuracy is highly dependent on camera model, lighting, plate condition and test methodology. Do not publish a specific percentage without the camera vendor's datasheet or an internal test report. Replace with a description of the capability (e.g. "AI-powered plate recognition, tuned for Hong Kong plate formats") until a sourced figure exists. |

## 2. Certifications / compliance

| Claim (verbatim from code) | Location | Evidence in repo? | Recommended treatment |
|---|---|---|---|
| "ISO 27001" badge | `components/Footer.tsx` (trust badge pill, alongside Octopus/FPS badges) | None found | Displaying a certification badge without the certificate on file is a compliance risk. Remove until a valid, current ISO 27001 certificate (with scope and expiry) is provided, then link to/reference it properly. |
| "…deep, **certified** integration for both local and international payment methods" | `lib/i18n.ts` → `whyHK.items` ("Local Payment Requirements") | No certificate found for Octopus or FPS integration | Octopus and FPS integrations in Hong Kong typically require formal certification from the respective schemes. Do not use the word "certified" unless the actual certification documents/approval letters exist. Rewrite to describe the integration itself ("Direct Octopus and FPS integration") without claiming formal certification status. |
| PDPO / regulatory compliance framing | `lib/i18n.ts` → `whyHK.items` ("Regulatory Compliance… architecture built with Hong Kong's regulatory framework embedded by design") | No compliance audit/legal opinion in repo | This is a legal-adjacent claim. Soften to describe design intent ("designed with Hong Kong data privacy requirements in mind") rather than asserting compliance as an established fact, unless legal/compliance sign-off exists. |

## 3. Compatibility / capability claims

| Claim (verbatim from code) | Location | Evidence in repo? | Recommended treatment |
|---|---|---|---|
| "Boom gate controllers **compatible with all major brands**" | `lib/i18n.ts` → `hardware.items` ("Barrier Gate") | None found | "All major brands" is unverifiable and effectively a superlative promise. Replace with a specific, true list of brands/protocols actually supported/tested, or with an accurate general statement like "integrates with common industrial barrier controllers via RS485/TCP" — only after engineering confirms which brands have actually been tested. |
| "Open API — works with **all major brands**. Custom integrations available on request." | `components/HardwareIntegration.tsx` (hardcoded string, not in `lib/i18n.ts`) | None found | Same treatment as above. |
| "Sub-second response time" (Barrier Gate, in `hardware.items`) | `lib/i18n.ts` | Partially — the original product brief mentions 0.3s/0.6s fast-servo timing, but that figure must be verified against the actual hardware datasheet before being asserted here as a general platform claim. | Only publish the specific 0.3s/0.6s figures on the barrier gate product page once confirmed against real spec sheets (see `content-required.md`), not as a blanket claim in the general hardware list. |

## 4. Timelines / operational promises

| Claim (verbatim from code) | Location | Evidence in repo? | Recommended treatment |
|---|---|---|---|
| "Most clients go live in 4–6 weeks" | `components/Footer.tsx` (CTA banner, hardcoded) **and** `lib/i18n.ts` → `contact.subtitle` (same claim appears twice, independently hardcoded in two places) | None found | This is an operational track-record claim. Either confirm it against real project timelines and keep it (fixing the duplication so it only lives in one place), or replace with a process-based statement ("Typical onboarding: site assessment → installation → go-live" without a fixed week count) until real timeline data is available. |
| "Cantonese-speaking support team available 6 days a week" | `lib/i18n.ts` → `about.values` | None found | Confirm actual support hours/days before publishing as a fact. |
| "…portfolio of **50** commercial car parks" (used as a scale example) | `lib/i18n.ts` → `about.desc3` | None found — reads as an illustrative number but is phrased as if it describes a real existing client portfolio | Reword to be unambiguously hypothetical ("whether you manage one site or fifty") rather than implying an existing 50-site customer, unless a real reference customer of that scale exists and can be named/cited. |

## 5. Identity / entity information

| Item | Location | Status |
|---|---|---|
| Legal entity name "Londeo Smart Parking Limited" | `components/Footer.tsx` (hardcoded, not sourced from `lib/i18n.ts`) | Not verified against any incorporation record in this repo. Confirm this is the exact, currently correct registered company name before it goes back into the footer/legal pages — do not assume it's correct just because it's already in the code. |
| Registered office / business address | Not present anywhere in the codebase | Missing entirely. Needed for Privacy Policy, Terms of Service, and (recommended) Organization structured data. |
| Contact email | `CLAUDE.md` documents `hello@londeoaccess.com.hk`; current `components/Contact.tsx` and the new `send-contact-email` Edge Function both use `sales@londeoaccess.com.hk` | **Inconsistent, not just unverified.** Confirm which address is the intended public-facing one and update the other references (see `content-required.md` §7). |
| WhatsApp number | Was a literal placeholder `+852 XXXX XXXX`; **now `+852 9041 6433`** in `components/Contact.tsx` (confirmed real, per your own recent update) | Resolved as a real number — remaining work is purely technical (make it a clickable `wa.me` link), tracked in `docs/content-required.md`, not a claims issue anymore. |
| "North Territory" (mentioned in the original brief as needing correction to "New Territories") | **Found.** `components/Contact.tsx`, `OFFICE_ADDRESS`: *"Flexi Space 12, Level 8, No. 5, Lok Yip Road, Fanling, North Territory, 999077, Hong Kong."* | Confirmed real issue, exact location identified. Correct to **"New Territories."** This was added in your most recent commits (after the original audit snapshot) — not present in older history. |

## 6. How to use this document

For each row above, the site owner needs to do one of three things before the corresponding page/section is written with real copy:

1. **Provide evidence** (certificate, contract, monitoring report, vendor datasheet, signed reference) → the claim can be published as-is, ideally with a citation/proof point.
2. **Approve a neutral rewrite** → use the suggested wording (or your own), no evidence required, but no longer stated as a hard fact/number.
3. **Approve "Demo Data" labeling** → if a number is wanted for visual/design purposes before real data exists, it must be visibly marked as illustrative, not presented as a real metric.

Nothing in this list has been changed in the codebase yet. This document is the input to that decision, not the decision itself.
