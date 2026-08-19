import type { Lang } from "@/lib/i18n";
import type { Locale } from "@/lib/site-config";
import SiteHeader from "@/components/nav/SiteHeader";
import SiteFooter from "@/components/nav/SiteFooter";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export default function ContactView({ lang }: { lang: Lang }) {
  const locale: Locale = lang;
  return (
    <main>
      <SiteHeader locale={locale} />
      <PageHero
        locale={locale}
        crumbs={[{ label: { en: "Contact", zh: "聯絡我們" }, href: "/contact" }]}
        title={lang === "en" ? "Talk to Our Team" : "聯絡我們的團隊"}
        subtitle={
          lang === "en"
            ? "Tell us about your property and we'll get back to you within 1 business day."
            : "告訴我們您的物業詳情，我們將於一個工作天內回覆您。"
        }
      />
      <Contact lang={lang} />
      <SiteFooter locale={locale} />
    </main>
  );
}
