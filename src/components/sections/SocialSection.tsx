import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const CAPABILITIES = [
  "Strategy",
  "Creative Direction",
  "Posts",
  "Reels",
  "Stories",
  "Content Calendar",
  "Publishing",
  "Community Support",
  "Analytics",
];

const GRID_TONES = [
  "bg-sand-deep",
  "bg-copper/70",
  "bg-espresso",
  "bg-brown",
  "bg-ivory-dim",
  "bg-copper-light/70",
  "bg-espresso-deep",
  "bg-sand",
  "bg-copper/40",
];

export function SocialSection() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <Reveal>
            <span className="eyebrow text-copper">Social media &amp; content</span>
            <h2 className="font-display text-display-md leading-[1.05] text-espresso mt-5">
              From content to
              <br />
              consistent brand presence.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-wrap gap-3">
            {CAPABILITIES.map((item) => (
              <span key={item} className="rounded-full border border-brown/25 px-4 py-2 text-sm text-brown">
                {item}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.16} className="mx-auto w-full max-w-sm">
          <div className="glow-border rounded-[2rem] bg-espresso p-3 shadow-xl">
            <div className="glass-panel mb-1 flex items-center gap-2 rounded-[1.5rem] px-3 py-3">
              <span className="h-8 w-8 rounded-full bg-cream/20" />
              <span className="h-2 w-24 rounded-full bg-cream/20" />
            </div>
            <div className="grid grid-cols-3 gap-1 p-1">
              {GRID_TONES.map((tone, i) => (
                <div key={i} className={`aspect-square ${tone}`} />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
