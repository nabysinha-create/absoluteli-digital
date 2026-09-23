import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const YOU_HAVE = [
  "Product Photography",
  "Showroom Images",
  "Project Photography",
  "Catalogues",
  "Existing Videos",
  "Brand Assets",
];

const WE_MAKE = [
  "Campaign Films",
  "Cinematic Reels",
  "Product Stories",
  "Launch Creative",
  "Social Content",
  "Paid-Media Creative",
];

export function Proposition() {
  return (
    <section className="bg-espresso-deep py-20 md:py-28">
      <Container className="flex flex-col gap-16">
        <Reveal className="max-w-4xl">
          <h2 className="font-display text-2xl leading-[1.05] text-ivory sm:text-4xl md:text-display-lg">
            You may already have
            <br />
            everything we need.
          </h2>
        </Reveal>

        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-center md:gap-16">
          <Reveal delay={0.06} className="flex w-full max-w-xs flex-col gap-5 text-center md:text-left">
            <span className="eyebrow text-copper-light">You Already Have</span>
            <ul className="flex flex-col gap-3">
              {YOU_HAVE.map((item) => (
                <li key={item} className="font-display text-xl text-ivory md:text-2xl">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12} className="flex items-center justify-center py-2 md:self-stretch md:py-0">
            <span
              aria-hidden
              className="rotate-90 font-display text-3xl text-copper-light md:rotate-0 md:text-4xl"
            >
              →
            </span>
          </Reveal>

          <Reveal delay={0.18} className="flex w-full max-w-xs flex-col gap-5 text-center md:text-left">
            <span className="eyebrow text-copper-light">We Turn It Into</span>
            <ul className="flex flex-col gap-3">
              {WE_MAKE.map((item) => (
                <li key={item} className="font-display text-xl text-ivory md:text-2xl">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="flex flex-col items-center gap-5 border-t border-line-dark pt-14 text-center">
          <h3 className="font-display max-w-4xl text-xl uppercase leading-[1.05] text-ivory sm:text-3xl md:text-display-md">
            More value from the assets
            <br />
            you already own.
          </h3>
          <p className="max-w-xl text-base leading-relaxed text-ivory-dim md:text-lg">
            Instead of creating an entirely new production every time your brand needs content, we
            help extend the creative life of the assets you already have.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
