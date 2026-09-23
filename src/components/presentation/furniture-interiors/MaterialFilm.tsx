import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PresentationFilm } from "@/components/presentation/furniture-interiors/PresentationFilm";

// Same design language as HeroFilm, deliberately varied: charcoal
// background instead of espresso-deep, left-aligned instead of centered, so
// the two film sections read as distinct beats rather than a repeated block.
export function MaterialFilm() {
  return (
    <section className="bg-charcoal py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex max-w-4xl flex-col gap-4">
          <span className="eyebrow text-copper-light">02 / Material &amp; Design Storytelling</span>
          <h2 className="font-display text-2xl leading-[1.05] text-ivory sm:text-4xl md:text-display-lg">
            The material can become
            <br />
            part of the story.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ivory-dim md:text-lg">
            From material details and craftsmanship to atmosphere and architecture, we create visual
            stories that communicate more than a conventional product photograph can.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <PresentationFilm
            src="/images/work/furniture-campaign/section2-material.mp4"
            poster="/images/work/furniture-campaign/section2-material-poster.jpg"
          />
        </Reveal>
      </Container>
    </section>
  );
}
