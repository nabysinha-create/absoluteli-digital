import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const PRINCIPLES = [
  { title: "Direct", description: "Clear communication without unnecessary layers." },
  {
    title: "Flexible",
    description: "Project-based or ongoing support, depending on what the brand actually needs.",
  },
  {
    title: "Curious",
    description: "We continuously explore new creative possibilities rather than relying on one production formula.",
  },
  {
    title: "Connected",
    description: "Strategy, production, social content and digital amplification work together rather than in separate silos.",
  },
];

export function HowWeWork() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-copper">Working With Absoluteli</span>
          <h2 className="font-display text-display-md leading-[1.05] text-espresso mt-5">
            Small enough to think.
            <br />
            Flexible enough to move.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-brown md:text-lg">
            We believe good creative work benefits from direct thinking, focused collaboration
            and the flexibility to adapt quickly.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {PRINCIPLES.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              className="flex flex-col gap-2 border-t border-line pt-6"
            >
              <span className="eyebrow text-copper">0{i + 1}</span>
              <p className="font-display text-xl text-espresso">{item.title}</p>
              <p className="text-sm leading-relaxed text-brown">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
