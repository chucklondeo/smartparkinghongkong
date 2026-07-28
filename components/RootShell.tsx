import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Shared root document shell. Next.js App Router only allows a nested
 * layout to declare <html>/<body> if it is itself a "root layout" — since
 * this app has two (app/(en)/layout.tsx for "/" and app/zh-hk/layout.tsx
 * for "/zh-hk/*"), each renders this shell with its own `lang`, giving
 * every page a correct <html lang> instead of one shared value.
 */
export default function RootShell({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className="scroll-smooth">
      {/* eslint-disable-next-line @next/next/no-head-element -- App Router root layouts use a native <head>; next/head is Pages Router only. */}
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://gsfwnzuvnzmfczyzefrd.supabase.co" />
        <link rel="dns-prefetch" href="https://gsfwnzuvnzmfczyzefrd.supabase.co" />
      </head>
      <body className={`${inter.variable} font-sans bg-dark-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
