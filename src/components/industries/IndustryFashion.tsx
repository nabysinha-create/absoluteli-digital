import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MediaTile } from "@/components/work/MediaTile";
import { FASHION_LIFESTYLE } from "@/data/industry-content";

const industry = FASHION_LIFESTYLE;

export function IndustryFashion() {
  return (
    <section id={industry.slug} className="scroll-mt-24 bg-espresso-deep py-20 md:py-28">
      <Container className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1fr_0.9fr]">
        <Reveal className="flex flex-col justify-center gap-6">
          <span className="eyebrow text-copper-light">
            {industry.number} / {industry.name}
          </span>
          <h2 className="font-display text-display-lg leading-[0.98] text-cream">{industry.headline}</h2>
          <p className="max-w-md text-base leading-relaxed text-cream-dim md:text-lg">{industry.supportingCopy}</p>

          <p className="eyebrow flex flex-wrap gap-x-2 gap-y-1 text-cream-dim/70">
            {industry.createList.map((item, i) => (
              <span key={item}>
                {item}
                {i < industry.createList.length - 1 ? <span className="mx-2 text-cream-dim/30">/</span> : null}
              </span>
            ))}
          </p>

          <Button
            href={`/our-work?industry=${encodeURIComponent(industry.workFilterValue)}`}
            variant="on-dark-outline"
            className="mt-2 self-start"
          >
            {industry.ctaLabel}
          </Button>
        </Reveal>

        <Reveal delay={0.14}>
          <MediaTile
            item={{ type: "image", src: "/images/work/deargals/ai-modelling.jpg" }}
            aspectClassName="aspect-[4/5] lg:aspect-auto lg:h-full"
            className="lg:h-full"
            showCaption={false}
          />
        </Reveal>
      </Container>
    </section>
  );
}
