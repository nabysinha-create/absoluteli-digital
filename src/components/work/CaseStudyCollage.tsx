import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/TagList";
import { MediaTile } from "@/components/work/MediaTile";
import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyCollage({ study }: { study: CaseStudy }) {
  const [hero, ...rest] = study.media;

  return (
    <section className="bg-charcoal py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-5">
          <div className="flex flex-wrap items-baseline gap-4">
            <span className="eyebrow text-copper-light">{study.industry}</span>
            {study.concept ? <span className="eyebrow text-cream-dim/60">Concept Project</span> : null}
          </div>
          <h2 className="font-display text-display-md leading-[1.05] text-cream">
            {study.title} — {study.tagline}
          </h2>
          <p className="font-display text-xl italic text-cream-dim">
            From product graphics to a living brand world.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-cream-dim md:text-lg">{study.description}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <TagList tags={study.tags} tone="dark" />
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2">
          <Reveal delay={0.16} className="col-span-2 lg:row-span-2">
            <MediaTile item={hero} aspectClassName="aspect-square lg:aspect-auto lg:h-full" className="lg:h-full" />
          </Reveal>
          {rest.map((item, i) => (
            <Reveal key={item.caption ?? i} delay={0.2 + i * 0.06}>
              <MediaTile item={item} aspectClassName="aspect-[4/5]" showCaption={false} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
