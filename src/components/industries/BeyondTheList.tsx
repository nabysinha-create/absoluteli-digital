import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function BeyondTheList() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <Container className="flex flex-col items-start gap-6">
        <Reveal>
          <span className="eyebrow text-copper">Beyond the List</span>
        </Reveal>
        <Reveal delay={0.06} className="max-w-2xl">
          <h2 className="font-display text-display-sm leading-[1.15] text-espresso">
            Don&rsquo;t see your industry here?
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="max-w-xl">
          <p className="text-base leading-relaxed text-brown md:text-lg">
            These are the sectors where our visual-first approach is especially powerful — not
            the limits of where we work.
          </p>
          <p className="mt-3 text-base leading-relaxed text-brown md:text-lg">
            If your business has a product, place or experience worth showing, we&rsquo;d like to
            hear about it.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <Button href="/contact" variant="secondary">
            Tell Us About Your Brand →
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
