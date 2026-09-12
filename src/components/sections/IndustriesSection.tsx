import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { INDUSTRIES } from "@/data/industries";

export function IndustriesSection() {
  return (
    <section className="bg-charcoal py-16 md:py-24">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading eyebrow="Who we work with" title="Built for visual brands." tone="dark" />
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 0.06} className={i === 0 ? "sm:col-span-2 lg:col-span-4" : ""}>
              <Link
                href={`/${industry.slug === "interiors-furniture" ? "interiors" : industry.slug}`}
                className={`glow-border-hover group relative block w-full overflow-hidden border border-line-dark bg-sand ${
                  i === 0 ? "aspect-[2/1]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  sizes={i === 0 ? "90vw" : "(min-width: 1024px) 23vw, 90vw"}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep/70 via-espresso-deep/0 to-espresso-deep/0" />
                <p className="absolute inset-x-5 bottom-5 font-display text-xl text-cream md:text-2xl">
                  {industry.name}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
