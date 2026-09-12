import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const FOCUS_WORDS = ["Products.", "Spaces.", "Experiences.", "Stories."];

export function WhyWeExist() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <Container className="flex flex-col gap-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="eyebrow text-copper">Why We Exist</span>
            <h2 className="font-display text-display-md leading-[1.05] text-espresso mt-5">
              More content isn&rsquo;t
              <br />
              the answer.
              <br />
              <span className="italic text-copper">Better content is.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center gap-4">
            <p className="max-w-md text-base leading-relaxed text-brown md:text-lg">
              Brands today are expected to create constantly — more posts, more reels, more
              campaigns. But creating more doesn&rsquo;t automatically make a brand more
              interesting.
            </p>
            <p className="max-w-md text-base leading-relaxed text-brown md:text-lg">
              We built Absoluteli around a different idea: start with what&rsquo;s already worth
              noticing, and find a better way to show it.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.16}
          className="flex flex-col items-start gap-8 border-t border-line pt-10 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-col gap-1">
            {FOCUS_WORDS.map((word) => (
              <span
                key={word}
                className="font-display text-display-sm uppercase leading-[1.05] text-espresso"
              >
                {word}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span aria-hidden className="font-display text-3xl text-copper">
              →
            </span>
            <p className="font-display max-w-[14ch] text-display-sm italic leading-[1.1] text-copper">
              Turned into content worth watching.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
