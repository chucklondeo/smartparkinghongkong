import { FileWarning } from "lucide-react";
import type { Locale } from "@/lib/site-config";

/**
 * Honest placeholder for a page section that depends on an asset or fact
 * not yet supplied (real photo, confirmed spec, datasheet PDF, case study).
 * Renders a visible, professional "content required" state instead of a
 * fabricated value — see docs/content-required.md for what's tracked here.
 */
export default function ContentRequired({ locale, label }: { locale: Locale; label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-white/35 italic">
      <FileWarning className="w-3.5 h-3.5" aria-hidden />
      {label || (locale === "zh" ? "資料籌備中" : "Content required")}
    </span>
  );
}
