import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MediaTile } from "@/components/work/MediaTile";

const SECTORS = [
  { name: "Interiors & Furniture", slug: "interiors-furniture", image: "/images/industries-photo/interiors-furniture.jpg" },
  { name: "Restaurants & Cafés", slug: "restaurants-cafes", image: "/images/industries-photo/restaurants-cafes.jpg" },
  { name: "Beauty & Skincare", slug: "beauty-skincare", image: "/images/industries-photo/beauty-skincare.jpg" },
  { name: "Fashion & Lifestyle", slug: "fashion-lifestyle", image: "/images/industries-photo/fashion-lifestyle.jpg" },
  { name: "Hospitality", slug: "hospitality", image: "/images/industries-photo/hospitality.jpg" },
];

export function WhoWeWorkWith() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-copper">The Brands We Understand</span>
          <h2 className="font-display text-display-md leading-[1.05] text-espresso mt-5">
            Built for businesses with
            <br />
            something worth showing.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-brown md:text-lg">
            Our visual-first approach is particularly powerful for brands where products, spaces
            and experiences drive customer desire.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {SECTORS.map((sector) => (
            <Link key={sector.slug} href={`/industries#${sector.slug}`} className="group block">
              <MediaTile
                item={{ type: "image", src: sector.image, label: sector.name }}
                aspectClassName="aspect-[3/4]"
                showCaption={false}
              />
            </Link>
          ))}
        </Reveal>

        <Reveal
          delay={0.16}
          className="flex flex-col items-start gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-base leading-relaxed text-brown md:text-lg">
            These are our focus sectors — not our limits.
          </p>
          <Button href="/industries" variant="secondary">
            Explore Industries →
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
