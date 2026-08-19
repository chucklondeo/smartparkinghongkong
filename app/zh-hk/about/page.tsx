import type { Metadata } from "next";
import AboutView from "@/components/AboutView";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "zh",
  path: "/about",
  title: "關於 Londeo Access",
  description: "Londeo Access 為香港設計及整合智慧停車與門禁系統，提供本地安裝、調試、維修及支援服務。",
});

export default function AboutPageZh() {
  return <AboutView lang="zh" />;
}
