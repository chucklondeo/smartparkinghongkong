import type { Metadata } from "next";
import ThankYouView from "@/components/ThankYouView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "zh",
  path: "/thank-you",
  title: "多謝您的查詢",
  description: "我們已收到您的查詢，香港本地團隊將於一個工作天內與您聯絡。",
});

export default function ThankYouPageZh() {
  return <ThankYouView lang="zh" />;
}
