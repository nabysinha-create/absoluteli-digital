import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://absolutelidigital.com"),
  title: {
    default: "Absoluteli Digital — AI Creative & Digital Growth Studio",
    template: "%s | Absoluteli Digital",
  },
  description:
    "Absoluteli Digital transforms products, spaces and experiences into premium digital campaigns. Creative production, social content and digital growth for visually driven brands.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Absoluteli Digital — AI Creative & Digital Growth Studio",
    description:
      "We turn products & spaces into campaigns people want to watch. Creative production, social content and digital growth for visually driven brands.",
    url: "https://absolutelidigital.com",
    siteName: "Absoluteli Digital",
    type: "website",
    images: [
      {
        url: "/images/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Absoluteli Digital — Creative & Digital Growth Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Absoluteli Digital — AI Creative & Digital Growth Studio",
    description: "We turn products & spaces into campaigns people want to watch.",
    images: ["/images/og/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ivory text-espresso">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
