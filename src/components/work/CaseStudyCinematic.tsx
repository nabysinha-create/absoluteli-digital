import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MediaTile } from "@/components/work/MediaTile";
import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyCinematic({ study }: { study: CaseStudy }) {
  const [first, second, third, fourth, fifth] = study.media;

  return (
    <section className="bg-espresso-deep py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-5">
          <div className="flex flex-wrap items-baseline gap-4">
            <span className="eyebrow text-copper-light">{study.industry}</span>
            {study.concept ? (
              <span className="eyebrow rounded-full bg-cream/10 px-3 py-1 text-cream-dim">Concept Project</span>
            ) : null}
          </div>
          <h2 className="font-display text-display-md leading-[1.05] text-cream">{study.title}</h2>
          <p className="max-w-2xl text-base leading-relaxed text-cream-dim md:text-lg">{study.description}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.1} className="sm:col-span-2 lg:col-span-2">
            <MediaTile item={first} aspectClassName="aspect-[4/5] lg:aspect-[16/10]" />
          </Reveal>
          <Reveal delay={0.16}>
            <MediaTile item={second} />
          </Reveal>
          <Reveal delay={0.22}>
            <MediaTile item={third} />
          </Reveal>
          <Reveal delay={0.28}>
            <MediaTile item={fourth} />
          </Reveal>
          <Reveal delay={0.34}>
            <MediaTile item={fifth} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
