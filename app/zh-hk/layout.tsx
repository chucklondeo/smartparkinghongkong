import type { Metadata } from "next";
import RootShell from "@/components/RootShell";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Londeo Access | 香港智慧停車及門禁解決方案",
    template: "%s | Londeo Access",
  },
  description:
    "Londeo Access 為香港市場設計及整合智慧停車與自動門禁系統——AI 車牌識別相機、伺服道閘、邊緣控制盒、繳費終端及人行通道閘，並配以雲端停車管理平台。",
  alternates: {
    canonical: `${SITE_URL}/zh-hk`,
    languages: { "en-HK": SITE_URL, "zh-HK": `${SITE_URL}/zh-hk`, "x-default": SITE_URL },
  },
  openGraph: {
    title: "Londeo Access | 香港智慧停車及門禁解決方案",
    description: "AI 車牌識別相機、24V 伺服道閘、邊緣控制盒、繳費終端及人行通道閘，並整合雲端停車管理平台。",
    url: `${SITE_URL}/zh-hk`,
    siteName: "Londeo Access",
    locale: "zh_HK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Londeo Access | 香港智慧停車及門禁解決方案",
    description: "香港智慧停車及自動門禁系統。",
  },
  robots: { index: true, follow: true },
};

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="zh-Hant-HK">
      <JsonLd data={organizationJsonLd()} />
      {children}
    </RootShell>
  );
}
