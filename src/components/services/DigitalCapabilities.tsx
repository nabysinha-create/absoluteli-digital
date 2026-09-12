import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DIGITAL_CAPABILITIES } from "@/data/services";

export function DigitalCapabilities() {
  return (
    <section className="bg-ivory py-16 md:py-20">
      <Container className="flex flex-col gap-10">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-copper">Beyond the Campaign</span>
          <h2 className="font-display text-display-sm leading-[1.1] text-espresso mt-4">
            Digital support when your brand needs it.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brown md:text-base">
            Selected digital capabilities can be integrated into broader creative and growth engagements.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {DIGITAL_CAPABILITIES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <p className="font-display text-lg text-espresso">{item.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-brown/80">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
