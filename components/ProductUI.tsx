"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Car, ParkingSquare, AlertTriangle, MapPin, CreditCard } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

interface Props { lang: Lang }

const revenueData = [42, 58, 53, 70, 65, 82, 75, 90, 85, 100, 92, 84];
const occupancyData = [55, 68, 72, 80, 88, 92, 95, 91, 87, 82, 76, 70];

export default function ProductUI({ lang }: Props) {
  const t = translations[lang].dashboard;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="dashboard" className="section-padding relative overflow-hidden bg-dark-800">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-blue/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-neon-blue/20">
            <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
            <span className="text-xs font-medium text-neon-blue/90 tracking-widest uppercase">{t.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-gradient-silver">{t.title} </span>
            <span className="text-gradient">{t.titleAccent}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/40 text-lg leading-relaxed">{t.subtitle}</p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-3xl border border-neon-blue/20 overflow-hidden"
        >
          {/* Window chrome */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-dark-900/60">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex items-center gap-2 glass px-4 py-1 rounded-lg">
              <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
              <span className="text-xs text-white/40 font-mono">app.londeoaccess.com.hk/dashboard</span>
            </div>
            <div className="text-xs text-white/30 font-mono uppercase tracking-widest">
              {lang === "en" ? "Interface concept / Demo data" : "介面概念／示範數據"}
            </div>
          </div>

          <div className="bg-dark-900/80 p-6">
            {/* Top KPI row */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              {[
                { label: t.todayRevenue, value: "HK$84,620", sub: "↑ 12.4%", color: "text-neon-blue", Icon: TrendingUp },
                { label: t.vehicleIn, value: "1,240", sub: "today", color: "text-green-400", Icon: Car },
                { label: t.vehicleOut, value: "1,198", sub: "today", color: "text-yellow-400", Icon: Car },
                { label: t.occupancy, value: "87%", sub: "current", color: "text-neon-purple", Icon: ParkingSquare },
                { label: t.alerts, value: "2", sub: "active", color: "text-red-400", Icon: AlertTriangle },
              ].map((kpi, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="glass rounded-xl p-4 border border-white/5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/40">{kpi.label}</span>
                    <kpi.Icon className={`w-3.5 h-3.5 ${kpi.color}`} />
                  </div>
                  <div className={`text-xl font-black ${kpi.color}`}>{kpi.value}</div>
                  <div className="text-xs text-white/30 mt-0.5">{kpi.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Revenue chart */}
              <div className="lg:col-span-2 glass rounded-xl p-5 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-white/70">{lang === "en" ? "Revenue (Last 12h)" : "收入（過去12小時）"}</h4>
                  <span className="text-xs text-neon-blue">Live</span>
                </div>
                {/* Mini bar chart */}
                <div className="flex items-end gap-1 h-24">
                  {revenueData.map((v, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-neon-blue/20 rounded-sm hover:bg-neon-blue/40 transition-colors"
                      style={{ minHeight: "4px" }}
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${v}%` } : { height: 0 }}
                      transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-white/20 mt-2">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>24:00</span>
                </div>
              </div>

              {/* Payment breakdown */}
              <div className="glass rounded-xl p-5 border border-white/5">
                <h4 className="text-sm font-semibold text-white/70 mb-4">{t.paymentBreakdown}</h4>
                <div className="space-y-3">
                  {[
                    { name: "Octopus", pct: 42, color: "#F59E0B" },
                    { name: "FPS", pct: 28, color: "#DC2626" },
                    { name: "Card", pct: 18, color: "#E2E8F0" },
                    { name: "Mobile", pct: 12, color: "#FBBF24" },
                  ].map((p, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs text-white/50 mb-1">
                        <span>{p.name}</span>
                        <span style={{ color: p.color }}>{p.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: p.color }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${p.pct}%` } : {}}
                          transition={{ delay: 0.7 + i * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live activity */}
              <div className="glass rounded-xl p-5 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-white/70">{t.liveActivity}</h4>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div className="space-y-2">
                  {[
                    { lp: "MN 9876", action: lang === "en" ? "Entry" : "進場", time: "just now", green: true },
                    { lp: "HK 4521", action: lang === "en" ? "Exit · Octopus" : "離場 · 八達通", time: "1m ago", green: false },
                    { lp: "KL 7734", action: lang === "en" ? "Entry" : "進場", time: "2m ago", green: true },
                    { lp: "NT 2281", action: lang === "en" ? "Exit · FPS" : "離場 · 轉數快", time: "3m ago", green: false },
                    { lp: "HK 8801", action: lang === "en" ? "Entry" : "進場", time: "5m ago", green: true },
                  ].map((ev, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + i * 0.05 }}
                      className="flex items-center justify-between py-1.5 border-b border-white/5"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${ev.green ? "bg-green-400" : "bg-yellow-400"}`} />
                        <span className="text-xs font-mono text-white/80">{ev.lp}</span>
                        <span className="text-xs text-white/30">{ev.action}</span>
                      </div>
                      <span className="text-xs text-white/20">{ev.time}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sites map overview */}
              <div className="lg:col-span-2 glass rounded-xl p-5 border border-white/5">
                <h4 className="text-sm font-semibold text-white/70 mb-4">{t.sites}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: lang === "en" ? "Causeway Bay" : "銅鑼灣", spaces: 420, occ: 91 },
                    { name: lang === "en" ? "Mong Kok" : "旺角", spaces: 280, occ: 87 },
                    { name: lang === "en" ? "Tsim Sha Tsui" : "尖沙咀", spaces: 350, occ: 78 },
                    { name: lang === "en" ? "Kwun Tong" : "觀塘", spaces: 500, occ: 65 },
                  ].map((site, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.9 + i * 0.08 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/3 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-neon-blue/60" />
                        <div>
                          <p className="text-xs font-semibold text-white">{site.name}</p>
                          <p className="text-xs text-white/30">{site.spaces} {lang === "en" ? "spaces" : "車位"}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-bold ${site.occ > 85 ? "text-red-400" : site.occ > 70 ? "text-yellow-400" : "text-green-400"}`}>
                          {site.occ}%
                        </p>
                        <p className="text-xs text-white/30">{lang === "en" ? "occupied" : "已佔用"}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
