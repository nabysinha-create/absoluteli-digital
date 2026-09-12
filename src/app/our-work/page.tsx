import type { Metadata } from "next";
import { WorkHero } from "@/components/work/WorkHero";
import { WorkGallery } from "@/components/work/WorkGallery";
import { CreativeLab } from "@/components/work/CreativeLab";
import { CapabilitiesStrip } from "@/components/work/CapabilitiesStrip";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Campaign films, product transformations, social content and visual storytelling created for brands across visually driven industries.",
  alternates: { canonical: "/our-work" },
};

export default function OurWorkPage() {
  return (
    <>
      <WorkHero />
      <WorkGallery />
      <CreativeLab />
      <CapabilitiesStrip />
      <FinalCTA
        eyebrow="Your brand could be next"
        headline={
          <>
            Have a product, space or idea?
            <br />
            Let&rsquo;s turn it into something worth watching.
          </>
        }
        supporting="Send us what you already have. We'll show you what it could become."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Us →"
      />
    </>
  );
}
