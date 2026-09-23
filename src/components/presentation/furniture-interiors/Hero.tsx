import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="bg-espresso-deep px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24 xl:px-16">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-7">
          <Reveal>
            <span className="eyebrow text-copper">Furniture &amp; Interiors</span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display text-display-xl uppercase leading-[0.95] tracking-tight text-ivory">
              From Product
              <br />
              to Campaign.
            </h1>
          </Reveal>

          <Reveal delay={0.16} className="flex max-w-lg flex-col gap-4">
            <p className="text-base leading-relaxed text-ivory-dim md:text-lg">
              Your product photography, showroom imagery and project assets already contain stories
              worth telling.
            </p>
            <p className="text-base leading-relaxed text-ivory-dim md:text-lg">
              We transform them into cinematic films, campaign visuals and social content designed to
              make people stop, feel and remember.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="flex flex-col gap-6 pt-2">
            <Button href="#the-film" variant="on-dark" className="w-fit">
              View the Work ↓
            </Button>
            <span className="eyebrow text-ivory-dim/70">
              Creative Production · Campaign Content · Digital Growth
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="glow-border-hover relative aspect-[4/5] w-full overflow-hidden border border-line-dark bg-charcoal">
            <Image
              src="/images/work/furniture-campaign/transformed.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
