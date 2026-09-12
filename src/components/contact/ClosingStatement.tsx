import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ClosingStatement() {
  return (
    <section className="bg-espresso-deep py-20 text-center text-cream md:py-28">
      <Container>
        <Reveal>
          <p className="font-display text-display-md leading-[1.08] text-cream">
            Good projects
            <br />
            start with
            <br />
            <span className="text-copper-light">good conversations.</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
