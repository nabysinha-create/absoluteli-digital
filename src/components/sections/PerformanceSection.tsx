import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const CHANNELS = ["Meta Ads", "Google Ads", "Retargeting", "Creative Testing"];

export function PerformanceSection() {
  return (
    <section className="bg-espresso py-20 text-cream md:py-28">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <span className="eyebrow text-copper-light">Performance marketing</span>
          <h2 className="font-display text-display-md leading-[1.05] text-cream mt-5">
            Great creative deserves
            <br />
            the right audience.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream-dim md:text-lg">
            We connect creative campaigns with performance marketing through Meta and Google
            advertising, retargeting and creative testing.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2 gap-6 border-t border-line-dark pt-8 lg:border-t-0 lg:border-l lg:pl-14 lg:pt-0">
          {CHANNELS.map((channel) => (
            <p key={channel} className="relative font-display text-lg text-cream">
              {channel}
              <span
                aria-hidden
                className="mt-2 block h-px w-8 bg-glow shadow-[0_0_8px_1px_rgba(226,146,79,0.6)]"
              />
            </p>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
