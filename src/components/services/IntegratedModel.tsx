import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  { step: "Strategy", description: "Understand the brand, audience and opportunity." },
  { step: "Create", description: "Develop concepts, stories and visual direction." },
  { step: "Produce", description: "Create campaign films, content and digital assets." },
  { step: "Manage", description: "Plan, publish and maintain brand presence." },
  { step: "Amplify", description: "Distribute through paid media and test creative." },
  { step: "Grow", description: "Learn, refine and scale what works." },
];

export function IntegratedModel() {
  return (
    <section className="relative overflow-hidden bg-espresso-deep py-20 text-cream md:py-28">
      <div aria-hidden className="radial-glow absolute inset-0 opacity-70" />
      <Container className="relative flex flex-col gap-16">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-copper-light">The Absoluteli Ecosystem</span>
          <h2 className="font-display text-display-md leading-[1.05] text-cream mt-5">
            One creative partner.
            <br />
            From idea to customer.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {STEPS.map((item, i) => (
            <Reveal
              key={item.step}
              delay={i * 0.06}
              className="relative flex flex-col gap-3 border-t border-line-dark pt-6"
            >
              <span
                aria-hidden
                className="absolute -top-[3px] left-0 h-[5px] w-[5px] rounded-full bg-glow shadow-[0_0_10px_2px_rgba(226,146,79,0.65)]"
              />
              <span className="eyebrow text-copper-light">0{i + 1}</span>
              <p className="font-display text-xl text-cream">{item.step}</p>
              <p className="text-sm leading-relaxed text-cream-dim">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
