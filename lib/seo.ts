import type { Metadata } from "next";
import { SITE_URL, localeHref } from "@/lib/site-config";
import type { Locale } from "@/lib/site-config";

interface PageMetaInput {
  locale: Locale;
  /** Site-relative path without locale prefix, e.g. "/products/ai-lpr-camera" */
  path: string;
  title: string;
  description: string;
}

/**
 * Builds per-page metadata with a self-referencing canonical (not the
 * homepage) and en-HK / zh-HK / x-default hreflang alternates pointing at
 * the paired route in the other locale.
 */
export function buildMetadata({ locale, path, title, description }: PageMetaInput): Metadata {
  const enUrl = `${SITE_URL}${localeHref("en", path)}`;
  const zhUrl = `${SITE_URL}${localeHref("zh", path)}`;
  const canonical = locale === "en" ? enUrl : zhUrl;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { "en-HK": enUrl, "zh-HK": zhUrl, "x-default": enUrl },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Londeo Access",
      locale: locale === "en" ? "en_HK" : "zh_HK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
