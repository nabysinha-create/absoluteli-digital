import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const FLOW = ["Your Product / Space / Experience", "Story", "Content", "Campaign", "Audience"];

export function CrossIndustryCapability() {
  return (
    <section className="relative overflow-hidden bg-espresso-deep py-20 text-cream md:py-28">
      <div aria-hidden className="radial-glow absolute inset-0" />
      <Container className="relative flex flex-col gap-14">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-copper-light">Different industries. Same principle.</span>
          <h2 className="font-display text-display-md leading-[1.05] text-cream mt-5">
            Start with what makes
            <br />
            your brand worth seeing.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center">
          {FLOW.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span
                aria-hidden
                className="h-[6px] w-[6px] shrink-0 rounded-full bg-glow shadow-[0_0_10px_2px_rgba(226,146,79,0.65)]"
              />
              <p className="font-display text-xl text-cream">{step}</p>
              {i < FLOW.length - 1 ? (
                <span aria-hidden className="ml-3 hidden text-copper-light sm:inline">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.18} className="max-w-xl">
          <p className="text-base leading-relaxed text-cream-dim md:text-lg">
            The industry changes. The approach doesn&rsquo;t — find the strongest visual story,
            create around it and put it where the right audience can discover it.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
