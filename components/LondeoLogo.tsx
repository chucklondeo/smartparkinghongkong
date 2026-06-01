"use client";

/**
 * LondeoLogo — SVG recreation of the official brand mark.
 * Adapted for dark backgrounds: navy box + cyan LPR brackets +
 * city skyline + striped barrier arm + white "LONDEO" wordmark.
 *
 * Props:
 *   height  – rendered height in px (width scales proportionally)
 *   variant – "light" (dark bg) | "dark" (light bg)
 */

interface Props {
  height?: number;
  variant?: "light" | "dark";
}

export default function LondeoLogo({ height = 44, variant = "light" }: Props) {
  // Canonical design dimensions
  const W = 580;
  const H = 130;
  const scale = height / H;

  // Color tokens — 八字配色：金神主色、火神輔色
  const navy      = variant === "light" ? "#1A1609" : "#1B2A5E";
  const wordmark  = variant === "light" ? "#FFFFFF"  : "#1B2A5E";
  const cyan      = "#F59E0B";   // Gold (Metal 金神) replaces blue
  const orange    = "#DC2626";   // Fire Red (火神) accent
  const silver    = "#D97706";   // Deep gold for barrier arm
  const skyGray   = variant === "light" ? "rgba(245,185,80,0.45)" : "rgba(80,100,140,0.5)";
  const boxBorder = variant === "light" ? "rgba(245,158,11,0.45)" : "rgba(27,42,94,0.5)";

  return (
    <svg
      viewBox={`0 -18 ${W} ${H + 18}`}
      width={W * scale}
      height={(H + 18) * scale}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Londeo Smart Parking"
      role="img"
    >
      {/* ─── LEFT ICON BOX ──────────────────────────────────────────── */}
      {/* Box shadow / glow layer */}
      <rect x="2" y="2" width="120" height="126" rx="10"
        fill="none" stroke={boxBorder} strokeWidth="1.5" />
      {/* Main box */}
      <rect x="0" y="0" width="122" height="128" rx="11"
        fill={navy} />

      {/* City skyline silhouette (bottom 48px of box) */}
      <g fill={skyGray}>
        <rect x="8"  y="98" width="8"  height="24" rx="1" />
        <rect x="18" y="90" width="10" height="32" rx="1" />
        <rect x="30" y="82" width="8"  height="40" rx="1" />
        <rect x="40" y="88" width="6"  height="34" rx="1" />
        <rect x="48" y="78" width="10" height="44" rx="1" />
        <rect x="60" y="86" width="8"  height="36" rx="1" />
        <rect x="70" y="92" width="6"  height="30" rx="1" />
        <rect x="78" y="84" width="10" height="38" rx="1" />
        <rect x="90" y="94" width="8"  height="28" rx="1" />
        <rect x="100" y="100" width="6" height="22" rx="1" />
        <rect x="108" y="90" width="8" height="32" rx="1" />
      </g>

      {/* LPR scan bracket — top-left */}
      <path d="M12 12 L12 28 M12 12 L28 12" stroke={cyan} strokeWidth="4" strokeLinecap="round" />
      {/* LPR scan bracket — top-right */}
      <path d="M110 12 L110 28 M110 12 L94 12" stroke={cyan} strokeWidth="4" strokeLinecap="round" />
      {/* LPR scan bracket — bottom-left */}
      <path d="M12 72 L12 56 M12 72 L28 72" stroke={cyan} strokeWidth="3.5" strokeLinecap="round" />
      {/* LPR scan bracket — bottom-right */}
      <path d="M110 72 L110 56 M110 72 L94 72" stroke={cyan} strokeWidth="3.5" strokeLinecap="round" />

      {/* Licence plate mock */}
      <rect x="28" y="34" width="66" height="26" rx="4"
        fill="none" stroke={cyan} strokeWidth="2" strokeDasharray="3 2" opacity="0.7" />
      {/* Plate text hint */}
      <rect x="34" y="42" width="12" height="10" rx="2" fill={cyan} opacity="0.6" />
      <rect x="50" y="42" width="8"  height="10" rx="2" fill={cyan} opacity="0.5" />
      <rect x="62" y="42" width="12" height="10" rx="2" fill={cyan} opacity="0.6" />
      <rect x="78" y="42" width="8"  height="10" rx="2" fill={cyan} opacity="0.5" />

      {/* ─── BARRIER ARM ────────────────────────────────────────────── */}
      {/*
        Arm: diagonal stripe bar from box top-right (≈110,14) going
        upper-right to about (380,8). Rotated ~-8deg around pivot.
      */}
      <g transform="rotate(-7, 110, 18)">
        {/* Arm body — clipped stripe pattern */}
        <defs>
          <clipPath id="armClip">
            <rect x="108" y="8" width="270" height="20" rx="4" />
          </clipPath>
        </defs>
        {/* Base arm fill */}
        <rect x="108" y="8" width="270" height="20" rx="4" fill={silver} />
        {/* Diagonal stripes — navy */}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((i) => (
          <rect
            key={i}
            x={116 + i * 18}
            y="8"
            width="9"
            height="20"
            fill={navy}
            clipPath="url(#armClip)"
          />
        ))}
        {/* Orange tip section */}
        <rect x="340" y="8" width="38" height="20" rx="0" fill={orange} clipPath="url(#armClip)" />
        {/* Top highlight line */}
        <rect x="108" y="8" width="270" height="2" rx="1" fill="rgba(255,255,255,0.4)" />
      </g>

      {/* Pivot hinge circle on box */}
      <circle cx="116" cy="18" r="6" fill={silver} />
      <circle cx="116" cy="18" r="3" fill={navy} />

      {/* ─── WORDMARK: LONDEO ───────────────────────────────────────── */}
      <text
        x="146"
        y="98"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="84"
        letterSpacing="1"
        fill={wordmark}
      >
        LONDEO
      </text>
    </svg>
  );
}
