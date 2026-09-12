import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WorkCard } from "@/components/ui/WorkCard";
import { Button } from "@/components/ui/Button";
import { FEATURED_WORK } from "@/data/work";

// Homepage shows a curated set of four. The full set lives on /our-work.
// All tiles render at the same size in one grid — no oversized "hero" tile —
// so nothing needs more than a moment to take in.
const curated = FEATURED_WORK.filter(
  (p) =>
    p.slug === "lounge-beanbag" ||
    p.slug === "botanical-skincare" ||
    p.slug === "atelier-lookbook" ||
    p.slug === "cafe-aesthetics"
);

// Two additional niche visuals shown as plain, non-clickable cards (no
// dedicated case-study page behind them, unlike the WorkCard-driven tiles
// above) — same visual treatment (border, hover zoom, Concept Project tag)
// for consistency with the rest of the grid.
const NICHE_VISUALS = [
  {
    label: "Fitness & Wellness",
    title: "Focused Mindset",
    image: "/images/work/featured/fitness-focus.jpg",
  },
  {
    label: "Food & Beverage",
    title: "Golden Infusion",
    image: "/images/work/featured/beverage-infusion.jpg",
  },
];

function NicheCard({ label, title, image }: { label: string; title: string; image: string }) {
  return (
    <div className="group flex flex-col gap-4">
      <div className="glow-border-hover relative aspect-[4/5] w-full overflow-hidden border border-line-dark bg-sand">
        <Image
          src={image}
          alt={`${title} — ${label}`}
          fill
          sizes="(min-width: 1024px) 30vw, 45vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="eyebrow absolute left-4 top-4 rounded-full bg-espresso-deep/70 px-3 py-1 text-[10px] text-cream backdrop-blur-sm">
          Concept Project
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="eyebrow text-copper-light">{label}</span>
        <h3 className="font-display text-xl text-cream">{title}</h3>
      </div>
    </div>
  );
}

export function FeaturedWork() {
  return (
    <section className="bg-espresso py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="Portfolio" title="Selected work" tone="dark" />
          <Button href="/our-work" variant="on-dark-outline">
            View All Work →
          </Button>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 md:gap-8">
          {curated.map((project, i) => (
            <Reveal key={project.slug} delay={0.06 * i}>
              <WorkCard
                project={project}
                tone="dark"
                variant="minimal"
                sizes="(min-width: 1024px) 30vw, 45vw"
              />
            </Reveal>
          ))}
          {NICHE_VISUALS.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * (curated.length + i)}>
              <NicheCard {...item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
