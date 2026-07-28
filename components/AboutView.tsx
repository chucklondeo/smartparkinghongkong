import type { Lang } from "@/lib/i18n";
import type { Locale } from "@/lib/site-config";
import SiteHeader from "@/components/nav/SiteHeader";
import SiteFooter from "@/components/nav/SiteFooter";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import AdvantagesSection from "@/components/AdvantagesSection";
import FinalCTA from "@/components/FinalCTA";
import { aboutPageExtra } from "@/lib/content/pages";

export default function AboutView({ lang }: { lang: Lang }) {
  const locale: Locale = lang;
  return (
    <main>
      <SiteHeader locale={locale} />
      <PageHero
        locale={locale}
        crumbs={[{ label: { en: "About", zh: "關於我們" }, href: "/about" }]}
        eyebrow={{ en: "About Londeo Access", zh: "關於 Londeo Access" }}
        title={aboutPageExtra.positioningTitle[lang]}
        subtitle={aboutPageExtra.positioningBody[lang]}
      />

      <About lang={lang} />
      <AdvantagesSection lang={lang} />

      <section className="section-padding bg-dark-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-4">{aboutPageExtra.crossBorderTitle[lang]}</h2>
          <p className="text-white/50 leading-relaxed">{aboutPageExtra.crossBorderBody[lang]}</p>
        </div>
      </section>

      <section className="section-padding bg-dark-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">{aboutPageExtra.targetCustomersTitle[lang]}</h2>
          <div className="flex flex-wrap gap-3">
            {aboutPageExtra.targetCustomers[lang].map((c) => (
              <span key={c} className="glass px-4 py-2 rounded-full text-sm text-white/60 border border-white/10">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA lang={lang} />
      <SiteFooter locale={locale} />
    </main>
  );
}
