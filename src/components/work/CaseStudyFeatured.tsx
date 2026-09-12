import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/TagList";
import { MediaTile } from "@/components/work/MediaTile";
import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyFeatured({ study }: { study: CaseStudy }) {
  const stages = study.media;

  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-5">
          <div className="flex flex-wrap items-baseline gap-4">
            <span className="eyebrow text-copper">{study.industry}</span>
            {study.concept ? <span className="eyebrow text-brown/50">Concept Project</span> : null}
          </div>
          <h2 className="font-display text-display-lg leading-[1.02] text-espresso">{study.title}</h2>
          <p className="font-display text-xl italic text-brown">{study.tagline}</p>
          <p className="max-w-2xl text-base leading-relaxed text-brown md:text-lg">{study.description}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <TagList tags={study.tags} tone="light" />
        </Reveal>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
          {stages.map((stage, i) => (
            <Reveal key={stage.label ?? i} delay={0.16 + i * 0.06} className="lg:flex-1">
              <MediaTile
                item={stage}
                aspectClassName="aspect-[4/5]"
                sizes="(min-width: 1024px) 33vw, 90vw"
                objectPosition={i === 1 ? "object-bottom" : "object-center"}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
