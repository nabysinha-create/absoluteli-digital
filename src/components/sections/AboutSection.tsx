import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <Container className="flex flex-col items-start gap-8">
        <Reveal>
          <span className="eyebrow text-copper">About Absoluteli</span>
        </Reveal>
        <Reveal delay={0.06} className="max-w-2xl">
          <p className="font-display text-display-sm leading-[1.15] text-espresso">
            A modern creative studio combining strategic thinking, emerging creative
            technology and digital marketing execution.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="max-w-xl">
          <p className="text-base leading-relaxed text-brown md:text-lg">
            Technology expands what is creatively possible. Strategy determines whether it matters.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <Button href="/about" variant="secondary">
            More About Us
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
