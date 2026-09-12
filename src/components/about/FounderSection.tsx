import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Not rendered on /about yet — enable in src/app/about/page.tsx once real
 * founder photography, name, role and a written story are available.
 * Do not fill the placeholder below with invented biography content.
 */
export function FounderSection() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1fr]">
        <Reveal>
          <div className="flex aspect-[4/5] w-full items-center justify-center border border-dashed border-line bg-sand">
            <span className="eyebrow text-brown/50">Founder Portrait — Placeholder</span>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-5">
          <span className="eyebrow text-copper">Behind Absoluteli</span>
          <h2 className="font-display text-display-md leading-[1.05] text-espresso">
            Creative thinking
            <br />
            should stay human.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-brown md:text-lg">
            Founder story pending — name, role and a short introduction will appear here.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
