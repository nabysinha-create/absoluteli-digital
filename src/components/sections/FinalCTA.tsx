import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CONTACT_PLACEHOLDERS } from "@/lib/constants";

export function FinalCTA({
  eyebrow = "Start a project",
  headline = (
    <>
      Have something worth showing?
      <br />
      Let&rsquo;s make people notice it.
    </>
  ),
  supporting = "Tell us about your brand, product or upcoming campaign.",
  primaryLabel = "Book a Discovery Call",
  primaryHref = CONTACT_PLACEHOLDERS.calendlyUrl,
  secondaryLabel = "WhatsApp Us →",
}: {
  eyebrow?: string;
  headline?: React.ReactNode;
  supporting?: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-espresso-deep py-28 text-cream md:py-36">
      <div aria-hidden className="radial-glow absolute inset-0" />
      <Container className="relative flex flex-col items-center gap-10 text-center">
        <Reveal>
          <span className="eyebrow text-copper-light">{eyebrow}</span>
        </Reveal>

        <Reveal delay={0.06} className="max-w-3xl">
          <h2 className="font-display text-display-lg leading-[1.02] text-cream">{headline}</h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="max-w-md text-base leading-relaxed text-cream-dim md:text-lg">{supporting}</p>
        </Reveal>

        <Reveal delay={0.22} className="flex flex-wrap items-center justify-center gap-4">
          <Button href={primaryHref} variant="on-dark">
            {primaryLabel}
          </Button>
          <Button href={CONTACT_PLACEHOLDERS.whatsappUrl} variant="on-dark-outline">
            {secondaryLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
