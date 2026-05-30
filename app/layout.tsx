import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Londeo Smart Parking | Hong Kong Smart Parking Management Platform",
  description:
    "Londeo provides smart parking software and integration solutions for Hong Kong property owners, shopping malls, commercial buildings and operators. Supports Octopus 八達通, FPS 轉數快, LPR cameras, cloud management and full hardware integration.",
  keywords:
    "smart parking Hong Kong, Octopus parking, FPS parking, LPR camera, parking management software, 智慧停車, 八達通停車, 轉數快停車場, 停車場管理系統, londeoaccess",
  metadataBase: new URL("https://www.londeoaccess.com.hk"),
  alternates: {
    canonical: "https://www.londeoaccess.com.hk",
  },
  openGraph: {
    title: "Londeo Smart Parking | Smart Parking Platform Built for Hong Kong",
    description:
      "Integrating Octopus 八達通, FPS 轉數快, credit cards, LPR cameras, barriers and cloud management — all in one platform. Serving Hong Kong property owners and operators.",
    url: "https://www.londeoaccess.com.hk",
    siteName: "Londeo Smart Parking",
    locale: "en_HK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Londeo Smart Parking | Hong Kong Smart Parking Platform",
    description:
      "Octopus, FPS, LPR, cloud management — one platform for Hong Kong car parks.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-dark-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
