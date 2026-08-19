export const SITE_URL = "https://www.londeoaccess.com.hk";
export const SITE_NAME_EN = "Londeo Access";
export const SITE_NAME_ZH = "Londeo Access";

/**
 * Canonical public contact details.
 * `sales@` is used here (matches the existing Supabase Edge Function and the
 * live Contact form) — `hello@` still appears in older docs/CLAUDE.md and is
 * tracked as an open item in docs/content-claims-review.md until the site
 * owner confirms which address is the single public-facing one.
 */
export const SALES_EMAIL = "sales@londeoaccess.com.hk";
export const WHATSAPP_NUMBER = "+852 9041 6433";
export const WHATSAPP_NUMBER_INTL = "85290416433"; // wa.me requires digits only, no + or spaces

/**
 * Corrected from "North Territory" (a copy error found in components/Contact.tsx)
 * to the real district name, "New Territories" — see docs/content-claims-review.md §5.
 */
export const OFFICE_ADDRESS_EN =
  "Flexi Space 12, Level 8, No. 5, Lok Yip Road, Fanling, New Territories, Hong Kong";
export const OFFICE_ADDRESS_ZH =
  "香港新界粉嶺洛裕路5號8樓Flexi Space 12";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

/** Maps a Locale to its URL prefix segment. English is unprefixed at "/". */
export function localePrefix(locale: Locale): string {
  return locale === "zh" ? "/zh-hk" : "";
}

/** Builds a full site path for the given locale, e.g. localeHref("zh", "/products") -> "/zh-hk/products" */
export function localeHref(locale: Locale, path: string): string {
  const prefix = localePrefix(locale);
  if (path === "/") return prefix || "/";
  return `${prefix}${path}`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
