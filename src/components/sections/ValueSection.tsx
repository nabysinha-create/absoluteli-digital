import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const YOU_HAVE = ["Product photographs", "Project photography", "Showroom images", "Existing videos", "Brand assets"];
const WE_CREATE = ["Campaign visuals", "Cinematic films", "Social content", "Promotional campaigns", "Paid-media creative"];

function ChipList({ items, tone }: { items: string[]; tone: "muted" | "accent" }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border px-4 py-2 text-sm ${
            tone === "accent"
              ? "glow-border bg-copper/10 text-cream"
              : "border-cream/20 text-cream-dim"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ValueSection() {
  return (
    <section className="relative overflow-hidden bg-espresso-deep py-20 text-cream md:py-24">
      <div aria-hidden className="radial-glow absolute inset-0" />
      <Container className="relative grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <span className="eyebrow text-copper-light">The opportunity</span>
          <h2 className="font-display text-display-md leading-[1.05] text-cream mt-5">
            From ordinary assets
            <br />
            to extraordinary campaigns.
          </h2>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal delay={0.08}>
            <p className="eyebrow mb-4 text-cream-dim">You already have</p>
            <ChipList items={YOU_HAVE} tone="muted" />
          </Reveal>
          <Reveal delay={0.16}>
            <p className="eyebrow mb-4 text-copper-light">We turn it into</p>
            <ChipList items={WE_CREATE} tone="accent" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
