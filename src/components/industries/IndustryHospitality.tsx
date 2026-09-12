import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { HOSPITALITY } from "@/data/industry-content";

const industry = HOSPITALITY;

export function IndustryHospitality() {
  return (
    <section id={industry.slug} className="scroll-mt-24 bg-ivory py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <Reveal className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src="/images/industries-page/hospitality/banner.jpg"
            alt=""
            fill
            sizes="90vw"
            className="object-cover"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal delay={0.08} className="flex flex-col gap-5">
            <span className="eyebrow text-copper">
              {industry.number} / {industry.name}
            </span>
            <h2 className="font-display text-display-md leading-[1.05] text-espresso">{industry.headline}</h2>
            <p className="max-w-lg text-base leading-relaxed text-brown md:text-lg">{industry.supportingCopy}</p>
            <Button
              href={`/our-work?industry=${encodeURIComponent(industry.workFilterValue)}`}
              variant="secondary"
              className="mt-2 self-start"
            >
              {industry.ctaLabel}
            </Button>
          </Reveal>

          <Reveal delay={0.14}>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {industry.createList.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-brown/90">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
