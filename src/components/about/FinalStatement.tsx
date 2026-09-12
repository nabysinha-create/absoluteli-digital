import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function FinalStatement() {
  return (
    <section className="relative overflow-hidden bg-espresso-deep py-24 text-cream md:py-32">
      <div aria-hidden className="absolute inset-0 opacity-[0.12]">
        <Image
          src="/images/about/final-statement-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div aria-hidden className="absolute inset-0 bg-espresso-deep/80" />

      <Container className="relative flex flex-col items-center gap-2 text-center">
        <Reveal>
          <p className="font-display text-display-md leading-[1.08] text-cream-dim">
            We don&rsquo;t want to make more noise.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display text-display-md leading-[1.08] text-cream">
            We want to make better reasons
            <br />
            to pay attention.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
