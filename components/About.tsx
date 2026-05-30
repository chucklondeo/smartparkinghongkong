"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Award, Layers, HeadphonesIcon } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

const valueIcons = [Globe, Award, Layers, HeadphonesIcon];

interface Props { lang: Lang }

export default function About({ lang }: Props) {
  const t = translations[lang].about;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-dark-900">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-purple/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-neon-blue/8 rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-neon-purple/20">
                <span className="w-2 h-2 bg-neon-purple rounded-full" />
                <span className="text-xs font-medium text-neon-purple/90 tracking-widest uppercase">{t.badge}</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
                <span className="text-gradient-silver">{t.title} </span>
                <span className="text-gradient">{t.titleAccent}</span>
              </h2>
              <div className="space-y-4 text-white/50 leading-relaxed">
                <p>{t.desc1}</p>
                <p>{t.desc2}</p>
                <p>{t.desc3}</p>
              </div>
            </motion.div>
          </div>

          {/* Right — value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl p-6 border border-white/8 hover:border-neon-blue/25 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-neon-blue" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-xs text-white/45 leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
