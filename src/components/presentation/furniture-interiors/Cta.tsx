import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-espresso-deep py-28 text-ivory md:py-36">
      <div aria-hidden className="radial-glow absolute inset-0" />
      <Container className="relative flex flex-col items-center gap-10 text-center">
        <Reveal>
          <span className="eyebrow text-copper-light">Have a Product or Collection in Mind?</span>
        </Reveal>

        <Reveal delay={0.08} className="max-w-3xl">
          <h2 className="font-display text-display-lg leading-[1.05] text-ivory">
            Show us what you have.
            <br />
            We&rsquo;ll show you what
            <br />
            it could become.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="max-w-md text-base leading-relaxed text-ivory-dim md:text-lg">
            Send us an existing product photograph, showroom image or completed project and let&rsquo;s
            explore what can be created from it.
          </p>
        </Reveal>

        <Reveal delay={0.24} className="flex flex-wrap items-center justify-center gap-4">
          <Button href={SITE_CONFIG.calendlyUrl} variant="on-dark">
            Book a Creative Call
          </Button>
          <Button href={`mailto:${SITE_CONFIG.email}`} variant="on-dark-outline">
            {SITE_CONFIG.email}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
