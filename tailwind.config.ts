import type { Config } from "tailwindcss";

/**
 * Color System — 八字喜用神配色
 * 日主甲木旺，喜用神：金（首選）、火（輔）
 * 九運（2024-2043）離火當令，南方旺位
 *
 * Primary:   金色 Gold  — 喜用神金，代表財富、權威
 * Secondary: 火紅 Red   — 輔助喜神，九運離火
 * Accent:    琥珀 Amber — 土（財星）
 * Base:      深色 Dark  — 中性承托，科技感
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 金神 Metal — Primary brand colour (喜用神首選)
        gold: {
          300: "#FDE68A",   // pale gold
          400: "#FBBF24",   // warm gold
          500: "#D97706",   // rich gold (main)
          600: "#B45309",   // deep gold
          glow: "#F59E0B",  // bright accent gold
        },
        // 火神 Fire — Secondary accent (輔助喜神 + 九運當令)
        fire: {
          300: "#FCA5A5",   // soft red
          400: "#F87171",   // medium red
          500: "#DC2626",   // strong red (main)
          600: "#B91C1C",   // deep red
          orange: "#EA580C", // orange-fire (土火交界)
        },
        // 保留部分 neon 用於科技感細節（降低比重）
        neon: {
          blue:   "#F59E0B",
          purple: "#DC2626",
          cyan:   "#FBBF24",
          silver: "#E2E8F0",  // upgraded to warmer silver
          gold:   "#F5C842",  // neon gold highlight
        },
        dark: {
          900: "#080604",   // warmer black (hint of earth)
          800: "#100E09",   // deep warm dark
          700: "#1A1609",   // dark amber-tinted
          600: "#231E0F",   // dark gold-tinted
          500: "#2D2714",   // mid dark warm
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        // Gold-tinted grid (Metal energy)
        "grid-pattern":
          "linear-gradient(rgba(212,151,10,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(212,151,10,0.07) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(217,119,6,0.18) 0%, transparent 70%)",
        "hero-gradient":
          "linear-gradient(135deg, #080604 0%, #100E09 50%, #1A1609 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        // Gold → Fire gradient (Metal feeds into Fire — 洩秀)
        "gold-gradient":   "linear-gradient(135deg, #F59E0B 0%, #DC2626 100%)",
        "gold-gradient-r": "linear-gradient(135deg, #FBBF24 0%, #D97706 100%)",
        "silver-gradient": "linear-gradient(135deg, #E2E8F0 0%, #F5C842 100%)",
        "fire-gradient":   "linear-gradient(135deg, #DC2626 0%, #EA580C 100%)",
      },
      backgroundSize: {
        grid: "50px 50px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float":      "float 6s ease-in-out infinite",
        "glow-gold":  "glowGold 2s ease-in-out infinite alternate",
        "scan":       "scan 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-20px)" },
        },
        glowGold: {
          from: { boxShadow: "0 0 20px rgba(217,119,6,0.4)" },
          to:   { boxShadow: "0 0 50px rgba(245,158,11,0.7), 0 0 90px rgba(220,38,38,0.2)" },
        },
        scan: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        gold:      "0 0 20px rgba(217,119,6,0.5), 0 0 40px rgba(217,119,6,0.15)",
        "gold-lg": "0 0 40px rgba(245,158,11,0.6), 0 0 80px rgba(220,38,38,0.15)",
        fire:      "0 0 20px rgba(220,38,38,0.4), 0 0 40px rgba(220,38,38,0.1)",
        glass:     "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(245,158,11,0.12)",
        "glass-sm":"0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(245,158,11,0.08)",
      },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [],
};
export default config;
