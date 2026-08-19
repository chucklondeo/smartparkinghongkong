import type { Lang } from "@/lib/i18n";
import type { Locale } from "@/lib/site-config";
import SiteHeader from "@/components/nav/SiteHeader";
import SiteFooter from "@/components/nav/SiteFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Bi } from "@/lib/content/types";

interface Section {
  heading: Bi;
  body: Bi;
}

export default function LegalPageView({
  lang,
  title,
  updated,
  sections,
  path,
}: {
  lang: Lang;
  title: Bi;
  updated: string;
  sections: Section[];
  path: string;
}) {
  const locale: Locale = lang;
  return (
    <main>
      <SiteHeader locale={locale} />
      <Breadcrumbs locale={locale} items={[{ label: title, href: path }]} />
      <section className="section-padding bg-dark-900">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl font-black mb-2 text-gradient-silver">{title[lang]}</h1>
          <p className="text-xs text-white/30 mb-10">
            {lang === "en" ? `Last updated: ${updated}` : `最後更新：${updated}`}
          </p>
          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.heading[lang]}>
                <h2 className="text-lg font-bold text-white mb-3">{s.heading[lang]}</h2>
                <p className="text-sm text-white/55 leading-relaxed">{s.body[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
