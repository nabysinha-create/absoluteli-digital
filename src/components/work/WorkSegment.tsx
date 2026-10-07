import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MediaTile } from "@/components/work/MediaTile";
import type { WorkSegment as WorkSegmentType, WorkSegmentSlot } from "@/data/work-segments";

function EmptySlot() {
  return (
    <div className="relative flex aspect-[4/5] w-full items-center justify-center border border-dashed border-line bg-sand">
      <span className="eyebrow text-brown/40">Coming Soon</span>
    </div>
  );
}

// Full-width landscape film, click-to-play so nothing but the poster loads up front.
function SegmentFilm({
  film,
  dark,
  footnote,
}: {
  film: WorkSegmentSlot & { src: string };
  dark: boolean;
  footnote?: string;
}) {
  return (
    <Reveal delay={0.16} className="flex flex-col gap-4">
      <MediaTile
        item={{ type: film.type ?? "image", src: film.src, poster: film.poster, label: film.label, caption: film.caption }}
        aspectClassName="aspect-video"
        className="glow-border"
        sizes="(min-width: 1024px) 80vw, 95vw"
        clickToPlay
      />
      {footnote ? (
        <span className={`eyebrow text-center ${dark ? "text-ivory-dim/60" : "text-brown/60"}`}>{footnote}</span>
      ) : null}
    </Reveal>
  );
}

function withSrc(films: WorkSegmentSlot[]) {
  return films.filter((f): f is WorkSegmentSlot & { src: string } => Boolean(f.src));
}

function FeaturedSegment({ segment }: { segment: WorkSegmentType }) {
  const [first, second, film] = segment.slots;

  return (
    <section className="relative overflow-hidden bg-espresso-deep py-20 md:py-28">
      {/* Soft tungsten glow behind the film — atmosphere only. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-2/3 h-[60%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/10 blur-[120px]"
      />

      <Container className="relative flex flex-col gap-12 md:gap-16">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex flex-col gap-5">
            <span className="eyebrow text-copper-light">Featured · {segment.industry}</span>
            <h2 className="font-display text-display-lg leading-[1.02] text-ivory">{segment.title}</h2>
          </div>
          {segment.description ? (
            <p className="max-w-md text-base leading-relaxed text-cream-dim md:text-right">{segment.description}</p>
          ) : null}
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[first, second].map((slot, i) => (
            <Reveal key={slot.label} delay={0.1 + i * 0.06}>
              {slot.src ? (
                <MediaTile
                  item={{ type: slot.type ?? "image", src: slot.src, poster: slot.poster, label: slot.label, caption: slot.caption }}
                  aspectClassName="aspect-[4/5]"
                  sizes="(min-width: 640px) 45vw, 90vw"
                  clickToPlay
                />
              ) : (
                <EmptySlot />
              )}
            </Reveal>
          ))}
        </div>

        {withSrc([film, ...(segment.extraFilms ?? [])]).map((f, i) => (
          <SegmentFilm
            key={f.label}
            film={f}
            dark
            footnote={i === 0 ? "Existing Product Assets → Cinematic Campaign Content" : undefined}
          />
        ))}
      </Container>
    </section>
  );
}

export function WorkSegment({ segment }: { segment: WorkSegmentType }) {
  if (segment.featured) return <FeaturedSegment segment={segment} />;

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
                  clickToPlay
                />
              ) : (
                <EmptySlot />
              )}
            </Reveal>
          ))}
        </div>

        {withSrc(segment.extraFilms ?? []).map((f) => (
          <SegmentFilm key={f.label} film={f} dark={false} />
        ))}
      </Container>
    </section>
  );
}
