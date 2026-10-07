import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";

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

// Organization schema (schema.org/JSON-LD) so search engines can associate
// the domain with the brand — powers the knowledge-panel/sitelinks-search
// eligibility and search-result rich context. sameAs intentionally omits
// instagramUrl/linkedinUrl: those are still marked TODO/unconfirmed in
// SITE_CONFIG, and publishing an unverified social URL in structured data
// is worse than omitting it. Add them here once confirmed.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.brandName,
  url: SITE_CONFIG.domain,
  logo: `${SITE_CONFIG.domain}/images/brand/absoluteli-logo-dark.png`,
  description:
    "Absoluteli Digital transforms products, spaces and experiences into premium digital campaigns. Creative production, social content and digital growth for visually driven brands.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE_CONFIG.phoneNumber,
    email: SITE_CONFIG.email,
    contactType: "sales",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ivory text-espresso">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
