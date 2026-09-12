import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  { step: "Talk", description: "Tell us what you're trying to achieve." },
  { step: "Define", description: "We recommend the right scope." },
  { step: "Create", description: "We build, refine and deliver." },
  { step: "Grow", description: "Continue, amplify or scale when it makes sense." },
];

export function ClientJourney() {
  return (
    <section className="bg-sand py-16 md:py-24">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow="Getting Started" title="Simple from the start." />
        </Reveal>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {STEPS.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.06} className="flex flex-col gap-2 border-t border-line pt-6">
              <span className="eyebrow text-copper">0{i + 1}</span>
              <p className="font-display text-xl text-espresso">{item.step}</p>
              <p className="text-sm leading-relaxed text-brown">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
