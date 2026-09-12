import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const MODELS = [
  {
    title: "Project",
    prompt: "Need something specific?",
    description:
      "For launches, campaigns, product films, creative transformations and individual production requirements.",
    examples: ["Campaign Film", "Product Launch", "Creative Campaign", "Content Production"],
    ctaLabel: "Discuss a Project →",
  },
  {
    title: "Ongoing",
    prompt: "Need consistency?",
    description: "For brands requiring continuous content creation and social presence.",
    examples: ["Monthly Content", "Social Management", "Reels & Creative", "Content Planning"],
    ctaLabel: "Explore Ongoing Support →",
  },
  {
    title: "Integrated",
    prompt: "Need a creative growth partner?",
    description: "Creative production, social content and paid amplification working together.",
    examples: ["Strategy", "Production", "Social", "Advertising", "Optimization"],
    ctaLabel: "Let's Talk →",
  },
];

export function EngagementModels() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow="Working Together" title="Start where you need us." />
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
          {MODELS.map((model, i) => (
            <Reveal key={model.title} delay={i * 0.08} className="flex flex-col gap-4 border-t border-line pt-8">
              <h3 className="font-display text-2xl text-espresso">{model.title}</h3>
              <p className="font-display text-lg italic text-brown">{model.prompt}</p>
              <p className="text-sm leading-relaxed text-brown/90">{model.description}</p>
              <ul className="flex flex-col gap-1.5">
                {model.examples.map((example) => (
                  <li key={example} className="text-sm text-brown/70">
                    {example}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="secondary" className="mt-2 self-start">
                {model.ctaLabel}
              </Button>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
