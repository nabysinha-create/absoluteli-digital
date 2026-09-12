import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_PILLARS, ADDITIONAL_CAPABILITIES } from "@/data/services";

export function Services() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow="Capabilities" title="What we do" />
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {SERVICE_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 0.08} className="border-t border-line pt-8">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-lg text-copper">{pillar.number}</span>
                <h3 className="font-display text-2xl text-espresso">{pillar.title}</h3>
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-brown">{pillar.description}</p>
              <ul className="mt-5 flex flex-col gap-2">
                {pillar.capabilities.map((item) => (
                  <li key={item} className="text-sm text-brown/90">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="border-t border-line pt-10">
          <p className="eyebrow mb-5 text-brown">Additional digital capabilities</p>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {ADDITIONAL_CAPABILITIES.map((item) => (
              <span key={item} className="text-sm text-brown/80">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
