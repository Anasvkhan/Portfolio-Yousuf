import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", variable: "--font-instrument", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Syed Yousuf Hussain — Digital Marketing Specialist",
  description:
    "Syed Yousuf Hussain — Digital Marketing Specialist focused on Meta Ads, Google Ads/PPC and performance-driven growth campaigns.",
  keywords: ["Digital Marketing", "Meta Ads", "Google Ads", "PPC", "Performance Marketing", "Media Buyer", "Karachi"],
  authors: [{ name: "Syed Yousuf Hussain" }],
  openGraph: {
    title: "Syed Yousuf Hussain — Digital Marketing Specialist",
    description: "Performance-driven Meta Ads & PPC campaigns that turn ad budgets into measurable growth.",
    type: "website",
    url: siteUrl,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#f4f1ea" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable} ${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
