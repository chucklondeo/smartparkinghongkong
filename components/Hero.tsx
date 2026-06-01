"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

interface Props { lang: Lang }

export default function Hero({ lang }: Props) {
  const t = translations[lang].hero;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const isMobile = window.innerWidth < 768;
    const lineCount = isMobile ? 8 : 16;
    const particleCount = isMobile ? 25 : 50;

    const particles: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number }[] = [];
    const lines: { x1: number; y1: number; x2: number; y2: number; progress: number; speed: number; color: string }[] = [];

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x1: Math.random() * canvas.width, y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width, y2: Math.random() * canvas.height,
        progress: Math.random(), speed: 0.002 + Math.random() * 0.003,
        color: Math.random() > 0.5 ? "#00D4FF" : "#7B61FF",
      });
    }
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (canvas.width || 1200), y: Math.random() * (canvas.height || 800),
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        life: Math.random(), maxLife: 0.3 + Math.random() * 0.7,
      });
    }

    let raf: number;
    const handleVisibility = () => { if (document.hidden) cancelAnimationFrame(raf); else draw(); };
    document.addEventListener("visibilitychange", handleVisibility);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(0,212,255,0.04)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
      for (let y = 0; y < canvas.height; y += gridSize) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }

      lines.forEach((line) => {
        line.progress += line.speed;
        if (line.progress > 1) {
          line.progress = 0;
          line.x1 = Math.random() * canvas.width; line.y1 = Math.random() * canvas.height;
          line.x2 = Math.random() * canvas.width; line.y2 = Math.random() * canvas.height;
        }
        const px = line.x1 + (line.x2 - line.x1) * line.progress;
        const py = line.y1 + (line.y2 - line.y1) * line.progress;
        const grad = ctx.createLinearGradient(line.x1, line.y1, px, py);
        grad.addColorStop(0, "transparent"); grad.addColorStop(1, line.color + "60");
        ctx.strokeStyle = grad; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(line.x1, line.y1); ctx.lineTo(px, py); ctx.stroke();
        ctx.fillStyle = line.color; ctx.beginPath(); ctx.arc(px, py, 2, 0, Math.PI * 2); ctx.fill();
      });

      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.life += 0.005;
        if (p.life > p.maxLife || p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          p.x = Math.random() * canvas.width; p.y = Math.random() * canvas.height; p.life = 0;
        }
        const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.6;
        ctx.fillStyle = `rgba(192,216,255,${alpha})`; ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2); ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); document.removeEventListener("visibilitychange", handleVisibility); };
  }, []);

  const scrollToContact = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToPlatform = () => document.querySelector("#platform")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-900">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" aria-hidden />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">

        {/* Badge — CSS animation, visible immediately (no opacity:0) */}
        <div className="hero-fade-1 inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border border-neon-blue/20">
          <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
          <span className="text-xs font-medium text-neon-blue/90 tracking-widest uppercase">{t.badge}</span>
        </div>

        {/* H1 — LCP element, CSS animation so it's in DOM immediately */}
        <h1 className="hero-fade-2 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight mb-6">
          <span className="text-gradient-silver block">{t.title}</span>
          <span className="text-gradient block mt-1">{t.titleAccent}</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-fade-3 max-w-2xl text-lg text-white/50 leading-relaxed mb-10">
          {t.subtitle}
        </p>

        {/* CTAs — keep framer-motion only for hover/tap interactions */}
        <div className="hero-fade-4 flex flex-col sm:flex-row gap-4 mb-20">
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-neon-solid px-8 py-4 rounded-xl text-base font-bold flex items-center gap-2"
          >
            {t.cta1}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.button
            onClick={scrollToPlatform}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-neon px-8 py-4 rounded-xl text-base font-semibold flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            {t.cta2}
          </motion.button>
        </div>

        {/* Stats */}
        <div className="hero-fade-5 grid grid-cols-3 gap-8 sm:gap-16">
          {[t.stat1, t.stat2, t.stat3].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-neon-blue">{stat.value}</span>
              <span className="text-xs text-white/40 mt-1 text-center leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* LPR Visualisation Card */}
      <div className="hero-fade-6 relative z-10 w-full max-w-4xl mx-auto px-6 pb-24">
        <div className="glass-card rounded-2xl overflow-hidden border border-neon-blue/20 glow-blue-sm">
          <div className="flex items-center justify-between px-6 py-3 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="text-xs text-white/30 font-mono">Londeo Parking OS — Live Feed</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
              <span className="text-xs text-neon-blue">LIVE</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {/* LPR View */}
            <div className="bg-dark-800 p-5 col-span-1">
              <p className="text-xs text-white/30 mb-3 font-mono uppercase tracking-widest">LPR Camera</p>
              <div className="relative aspect-video bg-dark-900 rounded-lg overflow-hidden border border-neon-blue/10">
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-700" />
                <div className="absolute bottom-0 left-0 right-0 h-2/3">
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0.5 h-full bg-gradient-to-t from-white/20 to-transparent" />
                </div>
                <motion.div className="absolute inset-x-0 h-0.5 bg-neon-blue/80" animate={{ top: ["-2px", "100%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-neon-blue rounded px-4 py-1.5">
                  <span className="font-mono text-sm font-bold text-neon-blue tracking-widest">RK 2024</span>
                </div>
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-neon-blue/60" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-neon-blue/60" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-neon-blue/60" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-neon-blue/60" />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-dark-700 rounded-full overflow-hidden">
                  <div className="h-full bg-neon-blue rounded-full" style={{ width: "99.5%" }} />
                </div>
                <span className="text-xs text-neon-blue font-mono">99.5%</span>
              </div>
              <p className="text-xs text-white/30 mt-1">Recognition accuracy</p>
            </div>
            {/* Payment */}
            <div className="bg-dark-800 p-5">
              <p className="text-xs text-white/30 mb-3 font-mono uppercase tracking-widest">Payment Methods</p>
              <div className="space-y-2">
                {[
                  { name: "Octopus 八達通", pct: 42, color: "#00D4FF" },
                  { name: "FPS 轉數快", pct: 28, color: "#7B61FF" },
                  { name: "Visa / MC", pct: 18, color: "#C0D8FF" },
                  { name: "Apple / Google Pay", pct: 12, color: "#00F5FF" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/60">{item.name}</span>
                      <span style={{ color: item.color }}>{item.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ background: item.color, width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Revenue */}
            <div className="bg-dark-800 p-5">
              <p className="text-xs text-white/30 mb-3 font-mono uppercase tracking-widest">Today&apos;s Revenue</p>
              <div className="text-3xl font-black text-neon-blue mb-1">HK$84,620</div>
              <div className="flex items-center gap-1 text-xs text-green-400 mb-4">
                <span>↑ 12.4%</span><span className="text-white/30">vs yesterday</span>
              </div>
              <div className="space-y-3">
                {[{ label: "Entries", value: "1,240" }, { label: "Exits", value: "1,198" }, { label: "Occupancy", value: "87%" }].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-white/40">{item.label}</span>
                    <span className="font-mono font-bold text-white/80">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20" animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
