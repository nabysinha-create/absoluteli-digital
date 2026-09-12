import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MediaTile } from "@/components/work/MediaTile";
import { BEAUTY_SKINCARE } from "@/data/industry-content";

const industry = BEAUTY_SKINCARE;

export function IndustryBeauty() {
  return (
    <section id={industry.slug} className="scroll-mt-24 bg-ivory py-20 md:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1 flex flex-col gap-6">
          <span className="eyebrow text-copper">
            {industry.number} / {industry.name}
          </span>
          <h2 className="font-display text-display-md leading-[1.05] text-espresso">{industry.headline}</h2>
          <p className="max-w-lg text-base leading-relaxed text-brown md:text-lg">{industry.supportingCopy}</p>

          <ul className="mt-2 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {industry.createList.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-brown/90">
                {item}
              </li>
            ))}
          </ul>

          <Button
            href={`/our-work?industry=${encodeURIComponent(industry.workFilterValue)}`}
            variant="secondary"
            className="mt-2 self-start"
          >
            {industry.ctaLabel}
          </Button>
        </Reveal>

        <Reveal delay={0.12} className="order-1 lg:order-2">
          <MediaTile
            item={{ type: "image", src: "/images/work/botanical-skincare/lifestyle.jpg" }}
            aspectClassName="aspect-[4/5]"
            showCaption={false}
          />
        </Reveal>
      </Container>
    </section>
  );
}
