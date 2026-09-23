import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PresentationFilm } from "@/components/presentation/furniture-interiors/PresentationFilm";

export function HeroFilm() {
  return (
    <section id="the-film" className="scroll-mt-10 bg-espresso-deep py-20 md:py-28">
      <Container className="flex flex-col items-center gap-12 text-center">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="eyebrow text-copper-light">01 / Product Storytelling</span>
          <h2 className="font-display max-w-4xl text-2xl leading-[1.05] text-ivory sm:text-4xl md:text-display-lg">
            One product.
            <br />A completely different story.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="w-full max-w-4xl">
          <PresentationFilm
            src="/images/work/furniture-campaign/section1-demo.mp4"
            poster="/images/work/furniture-campaign/section1-demo-poster.jpg"
          />
        </Reveal>

        <Reveal delay={0.16} className="flex flex-col items-center gap-3">
          <span className="eyebrow text-ivory-dim">
            Existing Product Assets → Cinematic Campaign Content
          </span>
          <span className="eyebrow text-ivory-dim/50">
            Product Films · Reels · Campaign Visuals · Social Creative
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
