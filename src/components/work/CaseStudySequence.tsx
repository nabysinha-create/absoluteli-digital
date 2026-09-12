import { Fragment } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/TagList";
import { MediaTile } from "@/components/work/MediaTile";
import type { CaseStudy } from "@/data/case-studies";

function Connector() {
  return (
    <div className="flex shrink-0 items-center justify-center py-2 md:px-1 md:py-0">
      <span aria-hidden className="font-display text-xl text-copper md:rotate-0 rotate-90">
        →
      </span>
    </div>
  );
}

export function CaseStudySequence({ study }: { study: CaseStudy }) {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-5">
          <div className="flex flex-wrap items-baseline gap-4">
            <span className="eyebrow text-copper">{study.industry}</span>
            {study.concept ? <span className="eyebrow text-brown/50">Concept Project</span> : null}
          </div>
          <h2 className="font-display text-display-md leading-[1.05] text-espresso">{study.tagline}</h2>
          <p className="max-w-2xl text-base leading-relaxed text-brown md:text-lg">{study.description}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <TagList tags={study.tags} tone="light" />
        </Reveal>

        <div className="flex flex-col md:flex-row md:items-stretch">
          {study.media.map((item, i) => (
            <Fragment key={item.caption ?? i}>
              <Reveal delay={i * 0.1} className="min-w-0 flex-1">
                <MediaTile item={item} />
              </Reveal>
              {i < study.media.length - 1 ? <Connector /> : null}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
