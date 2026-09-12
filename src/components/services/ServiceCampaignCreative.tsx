import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICE_PILLARS } from "@/data/services";

const pillar = SERVICE_PILLARS[2];

const OUTPUTS = [
  { label: "Film", image: "/images/services/campaign/film.jpg" },
  { label: "Reel", image: "/images/services/campaign/reel.jpg" },
  { label: "Social Post", image: "/images/services/campaign/social-post.jpg" },
  { label: "Story", image: "/images/services/campaign/story.jpg" },
  { label: "Advertisement", image: "/images/services/campaign/advertisement.jpg" },
  { label: "Promotional Visual", image: "/images/services/campaign/promotional-visual.jpg" },
];

export function ServiceCampaignCreative() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-5">
          <span className="font-display text-lg text-copper">{pillar.number}</span>
          <h2 className="font-display text-display-md leading-[1.05] text-espresso">{pillar.title}</h2>
          <p className="font-display text-xl italic text-brown">{pillar.statement}</p>
          <p className="max-w-2xl text-base leading-relaxed text-brown md:text-lg">{pillar.supportingCopy}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-3">
            {pillar.capabilities.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-brown/90">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.18} className="flex flex-col items-center gap-8 pt-4">
          <div className="glow-border relative w-full max-w-md overflow-hidden bg-espresso-deep py-10 text-center">
            <div aria-hidden className="radial-glow absolute inset-0" />
            <p className="eyebrow relative text-copper-light">The Idea</p>
            <p className="relative mt-2 font-display text-3xl text-cream">Campaign Idea</p>
          </div>

          <span
            aria-hidden
            className="h-10 w-px bg-glow shadow-[0_0_10px_2px_rgba(226,146,79,0.5)]"
          />

          <div className="grid w-full grid-cols-3 gap-3 lg:grid-cols-6">
            {OUTPUTS.map((output) => (
              <div
                key={output.label}
                className="glow-border-hover group relative flex aspect-[4/5] items-end overflow-hidden border border-transparent bg-sand p-3"
              >
                <Image
                  src={output.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 16vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-espresso-deep/80 via-espresso-deep/10 to-transparent" />
                <p className="relative text-xs leading-snug text-cream">{output.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
