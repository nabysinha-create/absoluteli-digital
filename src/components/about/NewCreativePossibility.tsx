import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function NewCreativePossibility() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 text-cream md:py-28">
      <div aria-hidden className="radial-glow absolute inset-0 opacity-70" />
      <Container className="relative flex flex-col gap-14">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-copper-light">The New Creative Possibility</span>
          <h2 className="font-display text-display-md leading-[1.05] text-cream mt-5">
            Production has changed.
            <br />
            Creative ambition shouldn&rsquo;t shrink with it.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="max-w-2xl">
          <p className="text-base leading-relaxed text-cream-dim md:text-lg">
            Emerging creative technology lets a product move into an entirely new environment, a
            static photograph become a moving story, and a campaign concept be explored before a
            traditional production begins — bringing possibilities that once belonged to much
            larger budgets within reach of smaller brands too.
          </p>
        </Reveal>

        <Reveal delay={0.14} className="glow-border flex flex-col gap-1 self-start px-7 py-6">
          <p className="font-display text-2xl leading-[1.2] text-cream md:text-3xl">
            AI is part of our production capability.
          </p>
          <p className="font-display text-2xl italic leading-[1.2] text-copper-light md:text-3xl">
            The idea is still the point.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="glow-border-hover relative aspect-[16/9] w-full overflow-hidden border border-line-dark">
          <Image
            src="/images/about/new-possibility.jpg"
            alt=""
            fill
            sizes="90vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
