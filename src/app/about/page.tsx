import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { WhyWeExist } from "@/components/about/WhyWeExist";
import { PointOfView } from "@/components/about/PointOfView";
import { CreativeMeetsDigital } from "@/components/about/CreativeMeetsDigital";
import { NewCreativePossibility } from "@/components/about/NewCreativePossibility";
import { WhoWeWorkWith } from "@/components/about/WhoWeWorkWith";
import { HowWeWork } from "@/components/about/HowWeWork";
import { FounderSection } from "@/components/about/FounderSection";
import { FinalStatement } from "@/components/about/FinalStatement";
import { FinalCTA } from "@/components/sections/FinalCTA";

// Founder section is built (src/components/about/FounderSection.tsx) but kept
// out of the page until real founder photography, name, role and a written
// story are available. Flip to true once that content is ready.
const SHOW_FOUNDER_SECTION = false;

export const metadata: Metadata = {
  title: "About",
  description:
    "Absoluteli Digital is a creative and digital growth studio combining strategic thinking, visual storytelling and emerging creative technology to help brands show up differently.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyWeExist />
      <PointOfView />
      <CreativeMeetsDigital />
      <NewCreativePossibility />
      <WhoWeWorkWith />
      <HowWeWork />
      {SHOW_FOUNDER_SECTION ? <FounderSection /> : null}
      <FinalStatement />

      <FinalCTA
        eyebrow="Let's Create Something"
        headline={
          <>
            Have a product, space or story
            <br />
            worth showing better?
          </>
        }
        supporting="Tell us what you're working on. We'll help determine how creative, content and digital can work together around it."
      />
    </>
  );
}
