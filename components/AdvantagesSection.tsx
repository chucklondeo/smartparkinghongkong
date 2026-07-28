import type { Lang } from "@/lib/i18n";
import { advantages } from "@/lib/content/pages";

export default function AdvantagesSection({ lang }: { lang: Lang }) {
  return (
    <section className="section-padding bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-12 text-gradient-silver">
          {lang === "en" ? "Why Londeo Access" : "為何選擇 Londeo Access"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a) => (
            <div key={a.title.en} className="glass-card rounded-2xl p-6 border border-white/8">
              <h3 className="text-base font-bold text-white mb-2">{a.title[lang]}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{a.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
