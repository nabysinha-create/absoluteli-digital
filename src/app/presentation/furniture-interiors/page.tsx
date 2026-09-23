import type { Metadata } from "next";
import { PresentationHeader } from "@/components/presentation/furniture-interiors/Header";
import { Hero } from "@/components/presentation/furniture-interiors/Hero";
import { HeroFilm } from "@/components/presentation/furniture-interiors/HeroFilm";
import { MaterialFilm } from "@/components/presentation/furniture-interiors/MaterialFilm";
import { Proposition } from "@/components/presentation/furniture-interiors/Proposition";
import { BeyondProduct } from "@/components/presentation/furniture-interiors/BeyondProduct";
import { Approach } from "@/components/presentation/furniture-interiors/Approach";
import { Cta } from "@/components/presentation/furniture-interiors/Cta";
import { PresentationFooter } from "@/components/presentation/furniture-interiors/Footer";

// Private, unlisted outreach page — not linked from anywhere on the public
// site, not in NAV_LINKS, not in sitemap.ts, not part of the /our-work
// case-study data. Discoverable only via this exact URL, sent directly to
// prospects by the studio.
export const metadata: Metadata = {
  title: "Furniture & Interiors Creative",
  description:
    "Creative production and campaign content for furniture and interior brands. Transform existing product, showroom and project assets into cinematic digital campaigns.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

export default function FurnitureInteriorsPresentationPage() {
  return (
    <>
      <PresentationHeader />
      <main>
        <Hero />
        <HeroFilm />
        <MaterialFilm />
        <Proposition />
        <BeyondProduct />
        <Approach />
        <Cta />
      </main>
      <PresentationFooter />
    </>
  );
}
