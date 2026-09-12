import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustryInteriors } from "@/components/industries/IndustryInteriors";
import { IndustryRestaurants } from "@/components/industries/IndustryRestaurants";
import { IndustryBeauty } from "@/components/industries/IndustryBeauty";
import { IndustryFashion } from "@/components/industries/IndustryFashion";
import { IndustryHospitality } from "@/components/industries/IndustryHospitality";
import { CrossIndustryCapability } from "@/components/industries/CrossIndustryCapability";
import { BeyondTheList } from "@/components/industries/BeyondTheList";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Absoluteli works with visually driven businesses — interiors & furniture, restaurants & cafés, beauty & skincare, fashion & lifestyle, and hospitality.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />

      <section className="bg-ivory pb-4 pt-4 md:pb-6">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Where We Work Best"
              title="Businesses built around things people can see, feel and experience."
              description="Products. Spaces. Food. Design. Experiences. These businesses already contain powerful visual stories. We help turn them into content and campaigns."
            />
          </Reveal>
        </Container>
      </section>

      <IndustryInteriors />
      <IndustryRestaurants />
      <IndustryBeauty />
      <IndustryFashion />
      <IndustryHospitality />

      <CrossIndustryCapability />
      <BeyondTheList />

      <FinalCTA
        eyebrow="Let's Create"
        headline={
          <>
            Your business already has a story.
            <br />
            Let&rsquo;s make people stop for it.
          </>
        }
        supporting="Tell us about your brand, your next launch or the content challenge you're trying to solve."
      />
    </>
  );
}
