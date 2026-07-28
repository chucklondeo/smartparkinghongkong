import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { localeHref } from "@/lib/site-config";
import { buildWhatsAppLink, whatsAppEngineerMessage } from "@/lib/whatsapp";

export default function FinalCTA({ lang }: { lang: Lang }) {
  return (
    <section className="section-padding bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold-glow/6 rounded-full blur-[140px]" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-black mb-4 text-gradient-silver">
          {lang === "en" ? "Ready to modernise your car park?" : "準備好為您的停車場升級了嗎？"}
        </h2>
        <p className="text-white/45 mb-8">
          {lang === "en"
            ? "Book a live demo, request a quote, or talk to one of our engineers about your project."
            : "立即預約現場示範、索取報價，或與我們的工程師直接查詢您的項目。"}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={localeHref(lang, "/contact?type=demo")} className="btn-neon-solid px-7 py-3 rounded-xl text-sm font-bold">
            {lang === "en" ? "Book a Live Demo" : "預約現場示範"}
          </Link>
          <Link href={localeHref(lang, "/contact?type=quote")} className="btn-neon px-7 py-3 rounded-xl text-sm font-semibold">
            {lang === "en" ? "Request a Quote" : "索取報價"}
          </Link>
          <a
            href={buildWhatsAppLink(whatsAppEngineerMessage(lang, "Londeo Access"))}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl text-sm font-semibold border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-colors inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            {lang === "en" ? "Talk to an Engineer" : "聯絡工程師"}
          </a>
        </div>
      </div>
    </section>
  );
}
