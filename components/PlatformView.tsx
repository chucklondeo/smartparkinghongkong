import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import type { Locale } from "@/lib/site-config";
import { localeHref } from "@/lib/site-config";
import SiteHeader from "@/components/nav/SiteHeader";
import SiteFooter from "@/components/nav/SiteFooter";
import PageHero from "@/components/PageHero";
import PlatformFeatures from "@/components/PlatformFeatures";
import ProductUI from "@/components/ProductUI";
import { buildWhatsAppLink, whatsAppEngineerMessage } from "@/lib/whatsapp";

export default function PlatformView({ lang }: { lang: Lang }) {
  const locale: Locale = lang;
  return (
    <main>
      <SiteHeader locale={locale} />
      <PageHero
        locale={locale}
        crumbs={[{ label: { en: "Platform", zh: "平台功能" }, href: "/platform" }]}
        eyebrow={{ en: "Parking Management Platform", zh: "停車管理平台" }}
        title={lang === "en" ? "One Platform for Every Car Park" : "一個平台，管理所有停車場"}
        subtitle={
          lang === "en"
            ? "Vehicle entry/exit records, revenue reporting, monthly permits, visitor management, black/white lists and multi-site management — with cloud and local edge resilience."
            : "車輛出入記錄、收入報表、月租管理、訪客管理、黑白名單及多場地管理——結合雲端及本地邊緣備援。"
        }
      />
      <PlatformFeatures lang={lang} />
      <ProductUI lang={lang} />
      <section className="section-padding bg-dark-800">
        <div className="max-w-4xl mx-auto px-6 glass-card rounded-2xl border border-gold-glow/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {lang === "en" ? "See the platform live" : "立即預約現場示範"}
            </h3>
            <p className="text-white/40 text-sm">
              {lang === "en" ? "Book a live demo with our team." : "與我們的團隊預約現場示範。"}
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href={localeHref(locale, "/contact?type=demo")} className="btn-neon-solid px-6 py-3 rounded-xl text-sm font-bold">
              {lang === "en" ? "Book a Live Demo" : "預約現場示範"}
            </Link>
            <a
              href={buildWhatsAppLink(whatsAppEngineerMessage(lang, "the parking platform"))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              {lang === "en" ? "Explore Features" : "了解更多功能"}
            </a>
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
