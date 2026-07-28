import type { Locale } from "./site-config";

/**
 * Given the current pathname (from usePathname()) and its locale, returns the
 * equivalent path under the *other* locale — e.g.
 *   toOtherLocalePath("/products/ai-lpr-camera", "en") -> "/zh-hk/products/ai-lpr-camera"
 *   toOtherLocalePath("/zh-hk/products/ai-lpr-camera", "zh") -> "/products/ai-lpr-camera"
 * Used so the language switcher stays on the equivalent page instead of
 * resetting to the homepage.
 */
export function toOtherLocalePath(pathname: string, currentLocale: Locale): string {
  if (currentLocale === "en") {
    return pathname === "/" ? "/zh-hk" : `/zh-hk${pathname}`;
  }
  const stripped = pathname.replace(/^\/zh-hk/, "");
  return stripped === "" ? "/" : stripped;
}

export function localeFromPathname(pathname: string): Locale {
  return pathname.startsWith("/zh-hk") ? "zh" : "en";
}
