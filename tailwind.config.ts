import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: "#00D4FF",
          cyan: "#00F5FF",
          silver: "#C0D8FF",
          purple: "#7B61FF",
        },
        dark: {
          900: "#020408",
          800: "#060C14",
          700: "#0A1628",
          600: "#0E1E38",
          500: "#132240",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(0,212,255,0.15) 0%, transparent 70%)",
        "hero-gradient":
          "linear-gradient(135deg, #020408 0%, #060C14 50%, #0A1628 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "neon-gradient": "linear-gradient(135deg, #00D4FF 0%, #7B61FF 100%)",
        "silver-gradient": "linear-gradient(135deg, #C0D8FF 0%, #00D4FF 100%)",
      },
      backgroundSize: {
        grid: "50px 50px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "scan": "scan 3s linear infinite",
        "data-flow": "dataFlow 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(0,212,255,0.3)" },
          to: { boxShadow: "0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(0,212,255,0.2)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        dataFlow: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      boxShadow: {
        neon: "0 0 20px rgba(0,212,255,0.4), 0 0 40px rgba(0,212,255,0.1)",
        "neon-lg": "0 0 40px rgba(0,212,255,0.5), 0 0 80px rgba(0,212,255,0.2)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        "glass-sm": "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
