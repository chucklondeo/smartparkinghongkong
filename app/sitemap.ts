import type { MetadataRoute } from "next";
import { SITE_URL, localeHref } from "@/lib/site-config";
import { products } from "@/lib/content/products";
import { solutions } from "@/lib/content/solutions";

const staticPaths = [
  "/",
  "/platform",
  "/products",
  "/solutions",
  "/applications",
  "/resources",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/thank-you",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...products.map((p) => `/products/${p.slug}`),
    ...solutions.map((s) => `/solutions/${s.slug}`),
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const path of paths) {
    const enHref = `${SITE_URL}${localeHref("en", path)}`;
    const zhHref = `${SITE_URL}${localeHref("zh", path)}`;
    entries.push({
      url: enHref,
      lastModified: new Date(),
      alternates: { languages: { "en-HK": enHref, "zh-HK": zhHref } },
    });
    entries.push({
      url: zhHref,
      lastModified: new Date(),
      alternates: { languages: { "en-HK": enHref, "zh-HK": zhHref } },
    });
  }
  return entries;
}
