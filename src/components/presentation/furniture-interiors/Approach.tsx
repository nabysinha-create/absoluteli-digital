import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Approach() {
  return (
    <section className="bg-espresso-deep py-20 md:py-28">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="eyebrow text-copper-light">The Idea</span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display max-w-5xl text-xl leading-[1.05] text-ivory sm:text-3xl md:text-5xl lg:text-display-lg">
            Don&rsquo;t create more content
            <br />
            just to create more content.
            <br />
            Create more from
            <br />
            what already matters.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="max-w-2xl text-base leading-relaxed text-ivory-dim md:text-lg">
            We combine creative direction, digital production and emerging technology to help visual
            brands produce campaign-quality content more efficiently — while keeping the product and
            brand at the centre of the story.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
