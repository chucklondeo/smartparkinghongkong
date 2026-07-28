import { WHATSAPP_NUMBER_INTL } from "./site-config";

/**
 * Builds a wa.me link pre-filled with the current page/product context.
 * wa.me opens the WhatsApp app directly on mobile and WhatsApp Web on desktop.
 */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(message)}`;
}

export function whatsAppEngineerMessage(lang: "en" | "zh", context: string): string {
  return lang === "zh"
    ? `你好，我想查詢 ${context} 的相關資料。`
    : `Hi, I'd like to speak with an engineer about ${context}.`;
}
