import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_PILLARS } from "@/data/services";

const pillar = SERVICE_PILLARS[3];

const FLOW = ["Creative", "Distribution", "Test", "Learn", "Optimize"];

export function ServicePerformance() {
  return (
    <section className="relative overflow-hidden bg-espresso py-20 text-cream md:py-28">
      <Container className="relative flex flex-col gap-12">
        <Reveal className="flex flex-col gap-5">
          <span className="font-display text-lg text-copper-light">{pillar.number}</span>
          <h2 className="font-display text-display-md leading-[1.05] text-cream">{pillar.title}</h2>
          <p className="font-display text-xl italic text-cream-dim">{pillar.statement}</p>
          <p className="max-w-2xl text-base leading-relaxed text-cream-dim md:text-lg">{pillar.supportingCopy}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {pillar.capabilities.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-cream-dim">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.18} className="flex flex-col gap-6 border-t border-line-dark pt-8 sm:flex-row sm:flex-wrap">
          {FLOW.map((step, i) => (
            <div key={step} className="relative flex flex-1 items-center gap-3">
              <span
                aria-hidden
                className="h-[6px] w-[6px] shrink-0 rounded-full bg-glow shadow-[0_0_10px_2px_rgba(226,146,79,0.65)]"
              />
              <p className="font-display text-lg text-cream">{step}</p>
              {i < FLOW.length - 1 ? (
                <span aria-hidden className="ml-2 hidden text-copper-light sm:inline">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
