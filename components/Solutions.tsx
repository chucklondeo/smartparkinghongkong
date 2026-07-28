"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ShoppingBag, Building2, Landmark, Briefcase, LayoutDashboard, Check, ArrowRight } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";
import { localeHref } from "@/lib/site-config";

const icons = [ShoppingBag, Building2, Briefcase, Landmark, LayoutDashboard];
const hrefs = [
  "/solutions/shopping-malls",
  "/solutions/residential-estates",
  "/solutions/commercial-buildings",
  "/solutions/government-public",
  "/solutions/property-managers",
];
const gradients = [
  "from-neon-blue/20 to-neon-cyan/10",
  "from-neon-purple/20 to-neon-blue/10",
  "from-neon-silver/20 to-neon-blue/10",
  "from-green-500/20 to-neon-cyan/10",
  "from-neon-purple/20 to-pink-500/10",
];
const borderColors = [
  "border-neon-blue/20",
  "border-neon-purple/20",
  "border-neon-silver/20",
  "border-green-500/20",
  "border-pink-500/20",
];
const iconColors = ["text-neon-blue", "text-neon-purple", "text-neon-silver", "text-green-400", "text-pink-400"];

interface Props { lang: Lang }

export default function Solutions({ lang }: Props) {
  const t = translations[lang].solutions;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="section-padding relative overflow-hidden bg-dark-800">
      {/* bg decoration */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-neon-purple/20">
            <span className="w-2 h-2 bg-neon-purple rounded-full" />
            <span className="text-xs font-medium text-neon-purple/90 tracking-widest uppercase">{t.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-gradient-silver">{t.title} </span>
            <span className="text-gradient">{t.titleAccent}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/40 text-lg leading-relaxed">{t.subtitle}</p>
        </motion.div>

        {/* Cards grid — 2 + 3 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glass-card rounded-2xl p-6 border ${borderColors[i]} group cursor-default relative overflow-hidden`}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-5 border ${borderColors[i]}`}>
                    <Icon className={`w-6 h-6 ${iconColors[i]}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>

                  {/* Desc */}
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{item.desc}</p>

                  {/* Points */}
                  <div className="space-y-2 mb-5">
                    {item.points.map((point, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <Check className={`w-3.5 h-3.5 ${iconColors[i]} flex-shrink-0`} />
                        <span className="text-xs text-white/50">{point}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={localeHref(lang, hrefs[i])}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${iconColors[i]} hover:gap-2.5 transition-all`}
                  >
                    {lang === "en" ? "View Solution" : "查看方案"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
