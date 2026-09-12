import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const FLOW = ["Strategy", "Creative", "Content", "Social", "Paid Media", "Growth"];

export function CreativeMeetsDigital() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.8fr]">
        <Reveal className="flex flex-col gap-6">
          <span className="eyebrow text-copper">How We Think</span>
          <h2 className="font-display text-display-md leading-[1.05] text-espresso">
            We don&rsquo;t separate
            <br />
            creative from growth.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-brown md:text-lg">
            The content customers discover, the social presence they follow and the advertising
            that reaches them are all part of the same brand experience. This is why Absoluteli
            brings creative production, content, social media and digital amplification into one
            connected approach.
          </p>
          <div className="pt-2">
            <Button href="/services" variant="secondary">
              Explore Our Services →
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-col items-center gap-3 py-4">
          {FLOW.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-3">
              <span className="font-display text-xl uppercase tracking-wide text-espresso md:text-2xl">
                {step}
              </span>
              {i < FLOW.length - 1 ? (
                <span aria-hidden className="text-copper">
                  ↓
                </span>
              ) : null}
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
