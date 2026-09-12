import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const DELIVERABLES = [
  "Project Reveal Films",
  "Cinematic Reels",
  "Product Transformations",
  "Before/After Stories",
  "Social Content",
  "Campaign Visuals",
  "Pinterest Content",
];

export function InteriorsFeature() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal className="glow-border-hover group relative aspect-[4/5] w-full overflow-hidden border border-transparent lg:order-2">
          <Image
            src="/images/industries/furniture-interiors.svg"
            alt="Interiors & Furniture"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Reveal>

        <div className="flex flex-col gap-8 lg:order-1">
          <Reveal>
            <span className="eyebrow text-copper">Priority focus</span>
            <h2 className="font-display text-display-md leading-[1.05] text-espresso mt-5">
              Your projects deserve more
              <br />
              than static photographs.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-brown md:text-lg">
              We transform project photography, product images and completed spaces into
              cinematic content and social campaigns.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-wrap gap-3">
            {DELIVERABLES.map((item) => (
              <span key={item} className="rounded-full border border-brown/25 px-4 py-2 text-sm text-brown">
                {item}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.18}>
            <Button href="/interiors" variant="primary">
              Explore Interiors &amp; Furniture
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
