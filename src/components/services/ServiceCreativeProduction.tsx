import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MediaTile } from "@/components/work/MediaTile";
import { SERVICE_PILLARS } from "@/data/services";

const pillar = SERVICE_PILLARS[0];

const SEQUENCE = [
  { type: "image" as const, src: "/images/services/creative-production/source-asset.jpg", label: "Source Asset" },
  { type: "image" as const, src: "/images/services/creative-production/creative-transformation.jpg", label: "Creative Transformation" },
  { type: "image" as const, src: "/images/services/creative-production/finished-content.jpg", label: "Finished Content" },
];

function Connector() {
  return (
    <div className="flex shrink-0 items-center justify-center py-2 md:px-1 md:py-0">
      <span aria-hidden className="font-display text-xl text-copper md:rotate-0 rotate-90">
        →
      </span>
    </div>
  );
}

export function ServiceCreativeProduction() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-5">
          <span className="font-display text-lg text-copper">{pillar.number}</span>
          <h2 className="font-display text-display-md leading-[1.05] text-espresso">{pillar.title}</h2>
          <p className="font-display text-xl italic text-brown">{pillar.statement}</p>
          <p className="max-w-2xl text-base leading-relaxed text-brown md:text-lg">{pillar.supportingCopy}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={0.1}>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {pillar.capabilities.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-brown/90">
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/our-work" variant="secondary" className="mt-8">
              View Creative Work →
            </Button>
          </Reveal>

          <Reveal delay={0.18} className="flex flex-col md:flex-row md:items-stretch">
            {SEQUENCE.map((item, i) => (
              <div key={item.label} className="flex flex-col md:flex-row md:flex-1">
                <MediaTile item={item} aspectClassName="aspect-[9/16]" className="flex-1" />
                {i < SEQUENCE.length - 1 ? <Connector /> : null}
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
