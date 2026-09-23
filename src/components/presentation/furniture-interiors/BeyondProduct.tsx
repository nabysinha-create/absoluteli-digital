import { Fragment } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const CHAIN = [
  "Project Reveal Film",
  "Design Detail Reels",
  "Before / After Stories",
  "Social Content",
  "Website Case Study",
  "Campaign Creative",
];

export function BeyondProduct() {
  return (
    <section className="bg-espresso-deep py-20 text-ivory md:py-28">
      <Container className="flex flex-col items-center gap-10 text-center">
        <Reveal className="flex flex-col items-center gap-5">
          <span className="eyebrow text-copper-light">Beyond the Product</span>
          <h2 className="font-display max-w-4xl text-2xl leading-[1.05] text-ivory sm:text-4xl md:text-display-lg">
            One completed project.
            <br />
            Weeks of content.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ivory-dim md:text-lg">
            A completed interior should not disappear after the photoshoot. We can transform project
            photography and existing footage into an ongoing content story across social, campaigns
            and digital channels.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 pt-4 md:gap-x-4">
          {CHAIN.map((item, i) => (
            <Fragment key={item}>
              <span className="eyebrow whitespace-nowrap text-ivory">{item}</span>
              {i < CHAIN.length - 1 ? (
                <span aria-hidden className="text-copper-light">
                  →
                </span>
              ) : null}
            </Fragment>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
