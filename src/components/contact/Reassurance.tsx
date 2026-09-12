import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Reassurance() {
  return (
    <section className="bg-sand py-16 md:py-20">
      <Container>
        <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-display-sm leading-[1.15] text-espresso">
              Not sure what you need?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brown md:text-lg">
              That&rsquo;s completely fine. Tell us what you&rsquo;re trying to achieve rather
              than which service you think you need. We&rsquo;ll help identify the right
              approach.
            </p>
          </div>
          <Link
            href="#enquiry"
            className="eyebrow inline-flex shrink-0 items-center gap-2 text-espresso transition-colors hover:text-copper"
          >
            Start the Conversation
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
