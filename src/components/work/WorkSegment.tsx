import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MediaTile } from "@/components/work/MediaTile";
import type { WorkSegment as WorkSegmentType } from "@/data/work-segments";

function EmptySlot() {
  return (
    <div className="relative flex aspect-[4/5] w-full items-center justify-center border border-dashed border-line bg-sand">
      <span className="eyebrow text-brown/40">Coming Soon</span>
    </div>
  );
}

export function WorkSegment({ segment }: { segment: WorkSegmentType }) {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-5">
          <span className="eyebrow text-copper">{segment.industry}</span>
          <h2 className="font-display text-display-lg leading-[1.02] text-espresso">{segment.title}</h2>
        </Reveal>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
          {segment.slots.map((slot, i) => (
            <Reveal key={slot.label} delay={0.1 + i * 0.06} className="lg:flex-1">
              {slot.src ? (
                <MediaTile
                  item={{
                    type: slot.type ?? "image",
                    src: slot.src,
                    poster: slot.poster,
                    label: slot.label,
                    caption: slot.caption,
                  }}
                  aspectClassName="aspect-[4/5]"
                  sizes="(min-width: 1024px) 33vw, 90vw"
                />
              ) : (
                <EmptySlot />
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
