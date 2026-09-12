import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { LAB_PIECES } from "@/data/creative-lab";

export function CreativeLab() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow="Creative Lab" title="Ideas don't always need a brief." />
        </Reveal>

        <div className="columns-2 gap-4 lg:columns-3">
          {LAB_PIECES.map((piece, i) => (
            <Reveal
              key={piece.slug}
              delay={i * 0.06}
              className={`glow-border-hover group relative mb-4 block w-full overflow-hidden border border-transparent bg-sand break-inside-avoid ${piece.aspect}`}
            >
              {piece.video ? (
                <LazyVideo
                  src={piece.video}
                  poster={piece.poster}
                  mediaClassName="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <Image
                  src={piece.image}
                  alt={piece.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep/75 via-espresso-deep/0 to-espresso-deep/0" />
              <span className="eyebrow absolute left-4 top-4 rounded-full bg-espresso-deep/70 px-3 py-1 text-[10px] text-cream backdrop-blur-sm">
                {piece.category}
              </span>
              <p className="absolute inset-x-4 bottom-4 font-display text-lg text-cream">{piece.title}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
