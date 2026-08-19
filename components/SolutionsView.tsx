import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import type { Locale } from "@/lib/site-config";
import { localeHref } from "@/lib/site-config";
import SiteHeader from "@/components/nav/SiteHeader";
import SiteFooter from "@/components/nav/SiteFooter";
import PageHero from "@/components/PageHero";
import { solutions } from "@/lib/content/solutions";

export default function SolutionsView({ lang }: { lang: Lang }) {
  const locale: Locale = lang;
  return (
    <main>
      <SiteHeader locale={locale} />
      <PageHero
        locale={locale}
        crumbs={[{ label: { en: "Solutions", zh: "解決方案" }, href: "/solutions" }]}
        eyebrow={{ en: "Solutions", zh: "解決方案" }}
        title={lang === "en" ? "Built for Every Hong Kong Venue" : "覆蓋香港各類物業場所"}
        subtitle={
          lang === "en"
            ? "From shopping malls to government car parks, each solution page covers architecture, recommended products and implementation steps specific to that venue."
            : "由商場到政府停車場，每個解決方案頁面均涵蓋針對該場所的架構、推薦產品及實施步驟。"
        }
      />
      <section className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <Link
              key={s.slug}
              href={localeHref(locale, `/solutions/${s.slug}`)}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-gold-glow/30 transition-colors flex flex-col"
            >
              <h2 className="text-lg font-bold text-white mb-2">{s.name[lang]}</h2>
              <p className="text-sm text-white/50 leading-relaxed mb-5 flex-1">{s.heroSubtitle[lang]}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400">
                {lang === "en" ? "View Solution" : "查看方案"}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
