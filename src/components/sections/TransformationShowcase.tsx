import { Fragment } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { TRANSFORMATIONS, type TransformationStage } from "@/data/transformations";

function StageMedia({ stage }: { stage: TransformationStage }) {
  if (stage.type === "video") {
    return <LazyVideo src={stage.src} poster={stage.poster} />;
  }

  return (
    <Image
      src={stage.src}
      alt={`${stage.label} — ${stage.caption}`}
      fill
      sizes="(min-width: 1024px) 30vw, 90vw"
      className="object-cover"
    />
  );
}

function StageCard({ stage, index }: { stage: TransformationStage; index: number }) {
  return (
    <Reveal delay={index * 0.12} className="min-w-0 flex-1">
      <div className="glow-border-hover group relative aspect-[4/5] w-full overflow-hidden border border-transparent bg-sand">
        <StageMedia stage={stage} />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep/75 via-espresso-deep/0 to-espresso-deep/35" />
        <span className="eyebrow absolute left-5 top-5 text-cream drop-shadow-[0_1px_3px_rgba(16,13,11,0.8)]">
          0{index + 1}
        </span>
        <div className="absolute inset-x-5 bottom-5">
          <p className="font-display text-2xl text-cream">{stage.label}</p>
          <p className="mt-1 text-sm text-cream-dim">{stage.caption}</p>
        </div>
      </div>
    </Reveal>
  );
}

function Connector() {
  return (
    <div className="flex shrink-0 items-center justify-center py-2 md:px-2 md:py-0">
      <span aria-hidden className="font-display text-2xl text-copper md:rotate-0 rotate-90">
        →
      </span>
    </div>
  );
}

export function TransformationShowcase() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="See the difference"
            title="One product. A whole campaign."
            description="From a simple product photograph to lifestyle visuals, social content and cinematic campaign films."
          />
        </Reveal>

        <div className="flex flex-col gap-20">
          {TRANSFORMATIONS.map((transformation) => (
            <div key={transformation.slug} className="flex flex-col md:flex-row md:items-stretch">
              {transformation.stages.map((stage, i) => (
                <Fragment key={stage.label}>
                  <StageCard stage={stage} index={i} />
                  {i < transformation.stages.length - 1 ? <Connector /> : null}
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
