import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import type { Locale } from "@/lib/site-config";
import { localeHref } from "@/lib/site-config";
import SiteHeader from "@/components/nav/SiteHeader";
import SiteFooter from "@/components/nav/SiteFooter";
import PageHero from "@/components/PageHero";
import { applicationsPage } from "@/lib/content/pages";

export default function ApplicationsView({ lang }: { lang: Lang }) {
  const locale: Locale = lang;
  return (
    <main>
      <SiteHeader locale={locale} />
      <PageHero
        locale={locale}
        crumbs={[{ label: { en: "Applications", zh: "應用場景" }, href: "/applications" }]}
        eyebrow={{ en: "Application Scenarios", zh: "應用場景" }}
        title={lang === "en" ? "Where Londeo Access Fits" : "Londeo Access 的應用場景"}
        subtitle={applicationsPage.intro[lang]}
      />
      <section className="section-padding bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationsPage.scenarios.map((s) => (
            <Link
              key={s.href}
              href={localeHref(locale, s.href)}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-gold-glow/30 transition-colors flex flex-col"
            >
              <h2 className="text-lg font-bold text-white mb-2">{s.title[lang]}</h2>
              <p className="text-sm text-white/50 leading-relaxed mb-5 flex-1">{s.desc[lang]}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400">
                {lang === "en" ? "View Solution" : "查看方案"}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-dark-900 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-white/40 text-sm mb-6">
            {lang === "en"
              ? "Have a completed project you'd like us to feature? Get in touch — with your permission, we'll add it here."
              : "如您有已完成的項目希望展示，歡迎與我們聯絡——在您同意下，我們將於此頁面更新。"}
          </p>
          <Link href={localeHref(locale, "/contact")} className="btn-neon-solid px-6 py-3 rounded-xl text-sm font-bold">
            {lang === "en" ? "Contact Us" : "聯絡我們"}
          </Link>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
