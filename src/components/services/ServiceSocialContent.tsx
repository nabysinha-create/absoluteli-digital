import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { SERVICE_PILLARS } from "@/data/services";

const pillar = SERVICE_PILLARS[1];

const PLATFORMS = ["Instagram", "Facebook", "Pinterest", "TikTok"];

type SocialTile = {
  label: string;
  src: string;
  aspect: string;
  video?: boolean;
  poster?: string;
};

const LEFT_COLUMN: SocialTile[] = [
  {
    label: "Reel",
    src: "/images/services/social/reel.mp4",
    poster: "/images/services/social/reel-poster.jpg",
    video: true,
    aspect: "aspect-[9/16]",
  },
  { label: "Carousel", src: "/images/services/social/carousel.jpg", aspect: "aspect-[16/10]" },
];

const RIGHT_COLUMN: SocialTile[] = [
  { label: "Post", src: "/images/services/social/post.jpg", aspect: "aspect-square" },
  { label: "Story", src: "/images/services/social/story.jpg", aspect: "aspect-[3/4]" },
];

export function ServiceSocialContent() {
  return (
    <section className="bg-charcoal py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-5">
          <span className="font-display text-lg text-copper-light">{pillar.number}</span>
          <h2 className="font-display text-display-md leading-[1.05] text-cream">{pillar.title}</h2>
          <p className="font-display text-xl italic text-cream-dim">{pillar.statement}</p>
          <p className="max-w-2xl text-base leading-relaxed text-cream-dim md:text-lg">{pillar.supportingCopy}</p>
        </Reveal>

        <Reveal delay={0.06} className="eyebrow flex flex-wrap gap-x-3 gap-y-1 text-cream-dim/70">
          {PLATFORMS.map((platform, i) => (
            <span key={platform}>
              {platform}
              {i < PLATFORMS.length - 1 ? <span className="ml-3 text-cream-dim/40">·</span> : null}
            </span>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-[1fr_1fr]">
          <Reveal delay={0.12}>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {pillar.capabilities.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-cream-dim">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-4 sm:flex-row">
            {[LEFT_COLUMN, RIGHT_COLUMN].map((column, colIndex) => (
              <div key={colIndex} className="flex flex-1 flex-col gap-4">
                {column.map((item) => (
                  <div
                    key={item.label}
                    className={`glow-border-hover group relative w-full overflow-hidden border border-line-dark bg-sand ${item.aspect}`}
                  >
                    {item.video ? (
                      <LazyVideo
                        src={item.src}
                        poster={item.poster}
                        mediaClassName="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 22vw, 45vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    )}
                    <span className="eyebrow absolute left-3 top-3 text-cream drop-shadow-[0_1px_3px_rgba(16,13,11,0.8)]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
