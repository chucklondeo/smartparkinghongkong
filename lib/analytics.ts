/**
 * Thin, typed analytics event helper.
 *
 * No GA4/GTM property exists in this repository today, so this pushes to
 * `window.dataLayer` only if it's present (i.e. only if `NEXT_PUBLIC_GA_ID`
 * is set and a GA/GTM snippet has been loaded). Nothing is sent, and no
 * network request is made, when no analytics ID is configured — see
 * docs/cms-setup-required.md for how to wire in a real GA4 property.
 */

export type AnalyticsEvent =
  | "nav_product_click"
  | "product_view"
  | "solution_view"
  | "datasheet_download"
  | "quote_start"
  | "form_submit_success"
  | "form_submit_error"
  | "whatsapp_click"
  | "email_click"
  | "demo_booking"
  | "language_switch";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: AnalyticsEvent, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer.push({ event, ...params });
}
