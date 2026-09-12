import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const PRINCIPLES = [
  {
    number: "01",
    title: "Start With the Idea",
    description:
      "Tools don't make campaigns interesting. Ideas do. We begin with the brand, audience and story before deciding how it should be produced.",
  },
  {
    number: "02",
    title: "Make the Asset Work Harder",
    description:
      "A product photograph shouldn't have to remain a product photograph. A single asset can become a lifestyle visual, a reel, a campaign film, a social story or an advertisement.",
  },
  {
    number: "03",
    title: "Create With Purpose",
    description:
      "Beautiful content is valuable. Beautiful content connected to a clear brand and marketing objective is considerably more powerful.",
  },
];

export function PointOfView() {
  return (
    <section className="relative overflow-hidden bg-espresso-deep py-20 text-cream md:py-28">
      <div aria-hidden className="radial-glow absolute inset-0" />
      <Container className="relative flex flex-col gap-16">
        <Reveal className="max-w-3xl">
          <span className="eyebrow text-copper-light">Our Point of View</span>
          <h2 className="font-display text-display-lg leading-[1.05] text-cream mt-5">
            Technology changes what&rsquo;s possible.
            <br />
            <span className="text-copper-light">Strategy decides what&rsquo;s worth doing.</span>
          </h2>
        </Reveal>

        <div className="flex flex-col divide-y divide-line-dark border-t border-line-dark">
          {PRINCIPLES.map((principle, i) => (
            <Reveal
              key={principle.number}
              delay={i * 0.08}
              className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[110px_1fr] md:gap-10 md:py-10"
            >
              <span className="eyebrow text-copper-light">{principle.number}</span>
              <div className="flex flex-col gap-3">
                <p className="font-display text-2xl text-cream md:text-3xl">{principle.title}</p>
                <p className="max-w-xl text-base leading-relaxed text-cream-dim md:text-lg">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
