import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WorkCard } from "@/components/ui/WorkCard";
import { Button } from "@/components/ui/Button";
import { FEATURED_WORK } from "@/data/work";

// Homepage shows a curated set of four, with the priority industry (furniture &
// interiors) as the large featured tile. The full set lives on /our-work.
const featured = FEATURED_WORK.find((p) => p.slug === "lounge-beanbag")!;
const secondary = FEATURED_WORK.filter(
  (p) => p.slug === "botanical-skincare" || p.slug === "atelier-lookbook" || p.slug === "cafe-aesthetics"
);

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

        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
          <Reveal className="lg:w-2/3">
            <WorkCard
              project={featured}
              tone="dark"
              variant="minimal"
              aspectClassName="aspect-[4/5] lg:aspect-auto lg:flex-1"
              className="lg:h-full"
              sizes="(min-width: 1024px) 64vw, 90vw"
            />
          </Reveal>

          <div className="flex flex-col gap-8 lg:w-1/3">
            {secondary.map((project, i) => (
              <Reveal key={project.slug} delay={0.1 + i * 0.08}>
                <WorkCard project={project} tone="dark" variant="minimal" />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
