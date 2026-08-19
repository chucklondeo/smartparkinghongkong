import Link from "next/link";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import type { Solution } from "@/lib/content/types";
import type { Locale } from "@/lib/site-config";
import { localeHref } from "@/lib/site-config";
import { getProductBySlug } from "@/lib/content/products";
import { solutions } from "@/lib/content/solutions";
import { implementationProcess } from "@/lib/content/pages";
import { buildWhatsAppLink, whatsAppEngineerMessage } from "@/lib/whatsapp";

export default function SolutionDetailView({ solution, locale }: { solution: Solution; locale: Locale }) {
  const recommended = solution.recommendedProductSlugs.map(getProductBySlug).filter(Boolean);
  const related = solution.relatedSlugs
    .map((slug) => solutions.find((s) => s.slug === slug))
    .filter((s): s is Solution => Boolean(s));

  return (
    <div className="bg-dark-900">
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-black mb-4 text-gradient-silver">{solution.name[locale]}</h1>
          <p className="text-lg text-white/50 leading-relaxed">{solution.heroSubtitle[locale]}</p>
        </div>
      </section>

      <section className="section-padding bg-dark-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">{locale === "en" ? "Customer Pain Points" : "客戶痛點"}</h2>
          <ul className="space-y-3">
            {solution.painPoints[locale].map((p) => (
              <li key={p} className="flex items-start gap-3 text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-fire-500 mt-2 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-4">{locale === "en" ? "Recommended Architecture" : "推薦架構"}</h2>
          <p className="text-white/50 leading-relaxed mb-8">{solution.architecture[locale]}</p>

          <h3 className="text-lg font-bold text-white mb-4">{locale === "en" ? "Recommended Products" : "推薦產品"}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recommended.map((p) => p && (
              <Link
                key={p.slug}
                href={localeHref(locale, `/products/${p.slug}`)}
                className="glass-card rounded-xl p-5 border border-white/8 hover:border-gold-glow/30 transition-colors flex items-center justify-between gap-3"
              >
                <span className="font-semibold text-white">{p.name[locale]}</span>
                <ArrowRight className="w-4 h-4 text-gold-glow flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-800">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-3">{locale === "en" ? "Payment Methods" : "支付方式"}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{solution.paymentMethods[locale]}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-3">{locale === "en" ? "Vehicle Entry/Exit Flow" : "車輛進出流程"}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{solution.vehicleFlow[locale]}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-3">{locale === "en" ? "Permits & Visitors" : "月租及訪客管理"}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{solution.permitsAndVisitors[locale]}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-3">{locale === "en" ? "Existing Equipment Compatibility" : "現有設備兼容性"}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{solution.compatibility[locale]}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">{locale === "en" ? "Implementation Steps" : "實施步驟"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {solution.implementationSteps[locale].map((step, i) => (
              <div key={step} className="glass-card rounded-xl p-5 border border-white/8">
                <span className="text-xs font-mono text-gold-400">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-white/40 mt-6 flex items-center gap-2">
            <Check className="w-4 h-4 text-gold-glow" />
            {solution.localSupport[locale]}
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-dark-800">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-6">{locale === "en" ? "Related Solutions" : "相關方案"}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={localeHref(locale, `/solutions/${s.slug}`)}
                  className="glass-card rounded-xl p-5 border border-white/8 hover:border-gold-glow/30 transition-colors"
                >
                  <p className="font-semibold text-white mb-1">{s.name[locale]}</p>
                  <p className="text-xs text-white/45">{s.heroSubtitle[locale]}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-dark-900">
        <div className="max-w-4xl mx-auto px-6 glass-card rounded-2xl border border-gold-glow/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {locale === "en" ? "Ready to start your site assessment?" : "準備好安排實地勘察了嗎？"}
            </h3>
            <p className="text-white/40 text-sm">{implementationProcess[0].desc[locale]}</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href={localeHref(locale, `/contact?type=assessment&solution=${solution.slug}`)}
              className="btn-neon-solid px-6 py-3 rounded-xl text-sm font-bold"
            >
              {locale === "en" ? "Request Site Assessment" : "申請現場勘察"}
            </Link>
            <a
              href={buildWhatsAppLink(whatsAppEngineerMessage(locale, solution.name[locale]))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              {locale === "en" ? "WhatsApp Engineer" : "WhatsApp 查詢"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
