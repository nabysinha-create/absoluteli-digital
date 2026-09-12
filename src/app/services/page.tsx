import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceCreativeProduction } from "@/components/services/ServiceCreativeProduction";
import { ServiceSocialContent } from "@/components/services/ServiceSocialContent";
import { ServiceCampaignCreative } from "@/components/services/ServiceCampaignCreative";
import { ServicePerformance } from "@/components/services/ServicePerformance";
import { IntegratedModel } from "@/components/services/IntegratedModel";
import { EngagementModels } from "@/components/services/EngagementModels";
import { DigitalCapabilities } from "@/components/services/DigitalCapabilities";
import { ClientJourney } from "@/components/services/ClientJourney";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Creative production, social media & content, campaign creative and performance marketing for visually driven brands.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <section className="bg-ivory pb-4 pt-4 md:pb-6">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Core Capabilities"
              title="Everything your brand needs to be seen."
              description="Choose a specific capability or bring us in as an integrated creative partner."
            />
          </Reveal>
        </Container>
      </section>

      <ServiceCreativeProduction />
      <ServiceSocialContent />
      <ServiceCampaignCreative />
      <ServicePerformance />

      <IntegratedModel />
      <EngagementModels />
      <DigitalCapabilities />
      <ClientJourney />

      <FinalCTA
        eyebrow="Start a Conversation"
        headline={
          <>
            You don&rsquo;t need every service.
            <br />
            You need the right ones working together.
          </>
        }
        supporting="Tell us what you're trying to achieve and we'll help define where Absoluteli can add the most value."
      />
    </>
  );
}
