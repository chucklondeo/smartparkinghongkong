import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Locale } from "@/lib/site-config";
import { localeHref } from "@/lib/site-config";
import { homeLabel } from "@/lib/content/nav";
import type { Bi } from "@/lib/content/types";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { absoluteUrl } from "@/lib/site-config";

interface Crumb {
  label: Bi;
  href: string; // site-relative, without locale prefix, e.g. "/products"
}

interface Props {
  locale: Locale;
  items: Crumb[];
}

export default function Breadcrumbs({ locale, items }: Props) {
  const all = [{ label: homeLabel, href: "/" }, ...items];

  const jsonLd = breadcrumbJsonLd(
    all.map((item) => ({
      name: item.label[locale],
      url: absoluteUrl(localeHref(locale, item.href)),
    }))
  );

  return (
    <nav aria-label="Breadcrumb" className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-2">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/40">
        {all.map((item, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="w-3 h-3 text-white/20" aria-hidden />}
              {isLast ? (
                <span aria-current="page" className="text-white/70">
                  {item.label[locale]}
                </span>
              ) : (
                <Link href={localeHref(locale, item.href)} className="hover:text-gold-400 transition-colors">
                  {item.label[locale]}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
