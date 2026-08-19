"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle, MessageCircle } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import type { Locale } from "@/lib/site-config";
import { localeHref } from "@/lib/site-config";
import SiteHeader from "@/components/nav/SiteHeader";
import SiteFooter from "@/components/nav/SiteFooter";
import { thankYouPage } from "@/lib/content/pages";
import { getProductBySlug } from "@/lib/content/products";
import { buildWhatsAppLink, whatsAppEngineerMessage } from "@/lib/whatsapp";

export default function ThankYouView({ lang }: { lang: Lang }) {
  const locale: Locale = lang;
  const [productSlug, setProductSlug] = useState<string | undefined>(undefined);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setProductSlug(params.get("product") || undefined);
  }, []);

  const product = productSlug ? getProductBySlug(productSlug) : undefined;

  return (
    <main>
      <SiteHeader locale={locale} />
      <section className="section-padding bg-dark-900 min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <CheckCircle className="w-14 h-14 text-gold-glow mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl font-black mb-4 text-gradient-silver">{thankYouPage.title[lang]}</h1>
          <p className="text-white/55 text-lg leading-relaxed mb-3">{thankYouPage.body[lang]}</p>
          <p className="text-white/40 text-sm mb-10">{thankYouPage.urgent[lang]}</p>

          {product && (
            <div className="glass-card rounded-xl p-5 border border-white/8 mb-8 text-left">
              <p className="text-xs text-white/30 uppercase tracking-wide mb-1">
                {lang === "en" ? "Your enquiry" : "您的查詢"}
              </p>
              <Link href={localeHref(locale, `/products/${product.slug}`)} className="text-gold-400 font-semibold hover:underline">
                {product.name[lang]}
              </Link>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-4">
            <Link href={localeHref(locale, "/products")} className="btn-neon-solid px-6 py-3 rounded-xl text-sm font-bold">
              {thankYouPage.backToProducts[lang]}
            </Link>
            <a
              href={buildWhatsAppLink(whatsAppEngineerMessage(lang, "my enquiry"))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
