import type { Metadata } from "next";
import RootShell from "@/components/RootShell";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Londeo Access | Smart Parking & Access Solutions for Hong Kong",
    template: "%s | Londeo Access",
  },
  description:
    "Londeo Access designs and integrates smart parking and access control systems for Hong Kong — AI LPR cameras, servo barrier gates, edge controllers, payment kiosks and pedestrian access gates with a cloud parking platform.",
  alternates: {
    canonical: SITE_URL,
    languages: { "en-HK": SITE_URL, "zh-HK": `${SITE_URL}/zh-hk`, "x-default": SITE_URL },
  },
  openGraph: {
    title: "Londeo Access | Smart Parking & Access Solutions for Hong Kong",
    description:
      "AI LPR cameras, 24V servo barrier gates, edge controllers, payment kiosks and pedestrian access gates, integrated with a cloud parking management platform.",
    url: SITE_URL,
    siteName: "Londeo Access",
    locale: "en_HK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Londeo Access | Smart Parking & Access Solutions for Hong Kong",
    description: "Smart parking and access control systems for Hong Kong.",
  },
  robots: { index: true, follow: true },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="en">
      <JsonLd data={organizationJsonLd()} />
      {children}
    </RootShell>
  );
}
