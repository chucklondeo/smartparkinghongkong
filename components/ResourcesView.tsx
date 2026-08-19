import Link from "next/link";
import { Download, FileWarning } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import type { Locale } from "@/lib/site-config";
import { localeHref } from "@/lib/site-config";
import SiteHeader from "@/components/nav/SiteHeader";
import SiteFooter from "@/components/nav/SiteFooter";
import PageHero from "@/components/PageHero";
import { resourcesPage } from "@/lib/content/pages";
import { products } from "@/lib/content/products";

export default function ResourcesView({ lang }: { lang: Lang }) {
  const locale: Locale = lang;
  const allFaqs = products.flatMap((p) => p.faqs.map((faq) => ({ ...faq, productName: p.name, slug: p.slug })));

  return (
    <main>
      <SiteHeader locale={locale} />
      <PageHero
        locale={locale}
        crumbs={[{ label: { en: "Resources", zh: "資源中心" }, href: "/resources" }]}
        eyebrow={{ en: "Resources", zh: "資源中心" }}
        title={lang === "en" ? "Datasheets, Guides & FAQs" : "產品資料、指南及常見問題"}
        subtitle={resourcesPage.intro[lang]}
      />

      <section className="section-padding bg-dark-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">{lang === "en" ? "Downloads" : "下載"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map((p) => (
              <div key={p.slug} className="glass-card rounded-xl p-5 border border-white/8 flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-white">{p.name[lang]}</span>
                {p.datasheetUrl ? (
                  <a href={p.datasheetUrl} download className="text-xs text-gold-400 inline-flex items-center gap-1">
                    <Download className="w-3.5 h-3.5" />
                    {lang === "en" ? "Download" : "下載"}
                  </a>
                ) : (
                  <span className="text-xs text-white/30 inline-flex items-center gap-1 italic">
                    <FileWarning className="w-3.5 h-3.5" />
                    {lang === "en" ? "Coming soon" : "籌備中"}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">{resourcesPage.faqTitle[lang]}</h2>
          <div className="space-y-4">
            {allFaqs.map((faq, i) => (
              <div key={`${faq.slug}-${i}`} className="glass-card rounded-xl p-5 border border-white/8">
                <p className="text-xs text-gold-400 mb-2 font-semibold uppercase tracking-wide">{faq.productName[lang]}</p>
                <p className="font-semibold text-white mb-2">{faq.q[lang]}</p>
                <p className="text-sm text-white/50 leading-relaxed">{faq.a[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-800 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Link href={localeHref(locale, "/contact")} className="btn-neon-solid px-6 py-3 rounded-xl text-sm font-bold">
            {lang === "en" ? "Ask Us a Question" : "向我們查詢"}
          </Link>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
