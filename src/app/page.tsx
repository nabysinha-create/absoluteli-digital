import { Hero } from "@/components/sections/Hero";
import { TransformationShowcase } from "@/components/sections/TransformationShowcase";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ServiceEcosystem } from "@/components/sections/ServiceEcosystem";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

// The remaining section components (value proposition, detailed services,
// interiors feature, social media, performance, about) are intentionally not
// rendered here — the homepage is scoped to these six sections. They're kept
// in src/components/sections for reuse on their future dedicated pages
// (/services, /interiors, /about).
export default function Home() {
  return (
    <>
      <Hero />
      <TransformationShowcase />
      <FeaturedWork />
      <ServiceEcosystem />
      <IndustriesSection />
      <FinalCTA />
    </>
  );
}
