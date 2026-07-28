import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LondeoLogo from "@/components/LondeoLogo";
import { translations } from "@/lib/i18n";
import type { Locale } from "@/lib/site-config";
import { localeHref, SALES_EMAIL, WHATSAPP_NUMBER } from "@/lib/site-config";
import { footerNav } from "@/lib/content/nav";
import { buildWhatsAppLink, whatsAppEngineerMessage } from "@/lib/whatsapp";

interface Props {
  locale: Locale;
}

export default function SiteFooter({ locale }: Props) {
  const t = translations[locale].footer;
  const year = new Date().getFullYear();

  const sections = [
    { title: t.solutions, links: footerNav.solutions },
    { title: t.platform, links: footerNav.products },
    { title: t.company, links: footerNav.company },
  ];

  return (
    <footer className="relative overflow-hidden bg-dark-900 border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-gold-glow/5 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href={localeHref(locale, "/")} className="flex items-start mb-5 group hover:opacity-90 transition-opacity">
              <LondeoLogo height={38} variant="light" />
            </Link>
            <p className="text-sm text-white/35 leading-relaxed max-w-[220px] mb-6">{t.tagline}</p>
            <p className="text-xs text-gold-400/60 mb-4 font-mono">www.londeoaccess.com.hk</p>
            <div className="flex flex-wrap gap-2">
              {["Octopus 八達通", "FPS 轉數快"].map((badge) => (
                <span key={badge} className="text-xs glass px-2 py-1 rounded border border-white/10 text-white/30">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {sections.map((sec) => (
            <div key={sec.title}>
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">{sec.title}</h4>
              <ul className="space-y-3">
                {sec.links.map((link) => (
                  <li key={link.href}>
                    <Link href={localeHref(locale, link.href)} className="text-sm text-white/45 hover:text-gold-400 transition-colors">
                      {link.label[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl border border-gold-glow/20 p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {locale === "en" ? "Ready to modernise your car park?" : "準備好為您的停車場升級了嗎？"}
            </h3>
            <p className="text-white/40 text-sm">
              {locale === "en" ? "Site assessment, solution design, installation and local support." : "由實地勘察、方案設計、安裝到本地支援，全程支援。"}
            </p>
          </div>
          <Link
            href={localeHref(locale, "/contact")}
            className="btn-neon-solid px-7 py-3 rounded-xl font-bold whitespace-nowrap flex items-center gap-2 text-sm"
          >
            {locale === "en" ? "Book a Demo" : "預約示範"}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-center sm:text-left">
          <p className="text-xs text-white/20">
            © {year} Londeo Access. {t.rights}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="text-xs text-white/20 hover:text-gold-400 transition-colors font-mono"
            >
              {SALES_EMAIL}
            </a>
            <a
              href={buildWhatsAppLink(whatsAppEngineerMessage(locale, "Londeo Access"))}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/20 hover:text-gold-400 transition-colors font-mono"
            >
              WhatsApp {WHATSAPP_NUMBER}
            </a>
            <Link href={localeHref(locale, "/privacy-policy")} className="text-xs text-white/20 hover:text-white/50 transition-colors">
              {t.privacy}
            </Link>
            <Link href={localeHref(locale, "/terms-of-service")} className="text-xs text-white/20 hover:text-white/50 transition-colors">
              {t.terms}
            </Link>
            <span className="text-xs text-white/10">Hong Kong</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
