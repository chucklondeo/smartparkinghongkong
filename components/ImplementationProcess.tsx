import type { Lang } from "@/lib/i18n";
import { implementationProcess } from "@/lib/content/pages";

export default function ImplementationProcess({ lang }: { lang: Lang }) {
  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-12 text-gradient-silver">
          {lang === "en" ? "How a Project Comes Together" : "項目實施流程"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {implementationProcess.map((step, i) => (
            <div key={step.title.en} className="glass-card rounded-xl p-5 border border-white/8 relative">
              <span className="text-xs font-mono text-gold-400">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-bold text-white mt-2 mb-1.5">{step.title[lang]}</p>
              <p className="text-xs text-white/45 leading-relaxed">{step.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
