import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MediaTile } from "@/components/work/MediaTile";
import { CapabilityLists } from "@/components/industries/CapabilityLists";
import { RESTAURANTS_CAFES } from "@/data/industry-content";

const industry = RESTAURANTS_CAFES;

export function IndustryRestaurants() {
  return (
    <section id={industry.slug} className="scroll-mt-24 bg-charcoal py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-5">
          <span className="eyebrow text-copper-light">
            {industry.number} / {industry.name}
          </span>
          <h2 className="font-display text-display-lg leading-[1.02] text-cream max-w-3xl">{industry.headline}</h2>
          <p className="max-w-2xl text-base leading-relaxed text-cream-dim md:text-lg">{industry.supportingCopy}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <CapabilityLists haveList={industry.haveList} createList={industry.createList} tone="dark" />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Reveal delay={0.16}>
            <MediaTile
              item={{ type: "image", src: "/images/work/restaurant-concept/interior.jpg", caption: "Atmosphere & interiors" }}
              aspectClassName="aspect-[4/5] sm:aspect-[3/4]"
            />
          </Reveal>
          <Reveal delay={0.22}>
            <MediaTile
              item={{ type: "image", src: "/images/work/restaurant-concept/food-photography.jpg", caption: "Close-up food cinematography" }}
              aspectClassName="aspect-[4/5] sm:aspect-[3/4]"
            />
          </Reveal>
        </div>

        <Reveal delay={0.28}>
          <Button href={`/our-work?industry=${encodeURIComponent(industry.workFilterValue)}`} variant="on-dark-outline">
            {industry.ctaLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
