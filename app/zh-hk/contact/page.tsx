import type { Metadata } from "next";
import ContactView from "@/components/ContactView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "zh",
  path: "/contact",
  title: "聯絡我們",
  description: "立即向 Londeo Access 香港團隊預約示範、索取報價或申請現場勘察。",
});

export default function ContactPageZh() {
  return <ContactView lang="zh" />;
}
