import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";
import { localeHref } from "@/lib/site-config";

export default function PlatformTeaser({ lang }: { lang: Lang }) {
  const t = translations[lang].platform;

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-black mb-4 text-gradient-silver">{t.title} {t.titleAccent}</h2>
        <p className="text-white/45 max-w-2xl mx-auto mb-8">{t.subtitle}</p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[...t.payments.items.slice(0, 3), ...t.ops.items.slice(0, 3)].map((item) => (
            <span key={item.name} className="glass px-4 py-2 rounded-full text-sm text-white/55 border border-white/10">
              {item.name}
            </span>
          ))}
        </div>
        <Link
          href={localeHref(lang, "/platform")}
          className="btn-neon-solid px-7 py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2"
        >
          {lang === "en" ? "Book a Live Demo" : "預約現場示範"}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
