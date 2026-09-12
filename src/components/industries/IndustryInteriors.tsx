import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MediaTile } from "@/components/work/MediaTile";
import { CapabilityLists } from "@/components/industries/CapabilityLists";
import { INTERIORS_FURNITURE } from "@/data/industry-content";

const industry = INTERIORS_FURNITURE;

const SEQUENCE = [
  { type: "image" as const, src: "/images/projects/furniture/beanbag-original.jpg", label: "Original" },
  { type: "image" as const, src: "/images/projects/furniture/beanbag-lifestyle.jpg", label: "Transformation" },
  {
    type: "video" as const,
    src: "/images/projects/furniture/beanbag-film.mp4",
    poster: "/images/projects/furniture/beanbag-film-poster.jpg",
    label: "Campaign",
  },
];

function Connector() {
  return (
    <div className="flex shrink-0 items-center justify-center py-2 md:px-1 md:py-0">
      <span aria-hidden className="font-display text-xl text-copper md:rotate-0 rotate-90">
        →
      </span>
    </div>
  );
}

export function IndustryInteriors() {
  return (
    <section id={industry.slug} className="scroll-mt-24 bg-ivory py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-5">
          <span className="eyebrow text-copper">
            {industry.number} / {industry.name}
          </span>
          <h2 className="font-display text-display-lg leading-[1.02] text-espresso max-w-3xl">
            {industry.headline}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-brown md:text-lg">{industry.supportingCopy}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <CapabilityLists haveList={industry.haveList} createList={industry.createList} tone="light" />
        </Reveal>

        <Reveal delay={0.18} className="flex flex-col md:flex-row md:items-stretch">
          {SEQUENCE.map((item, i) => (
            <div key={item.label} className="flex flex-col md:flex-row md:flex-1">
              <MediaTile item={item} className="flex-1" />
              {i < SEQUENCE.length - 1 ? <Connector /> : null}
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.24}>
          <Button href={`/our-work?industry=${encodeURIComponent(industry.workFilterValue)}`} variant="secondary">
            {industry.ctaLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
