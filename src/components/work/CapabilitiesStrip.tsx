const CAPABILITIES = [
  "Campaign Film",
  "Product Visuals",
  "Social Reels",
  "Lifestyle Content",
  "Ad Creative",
  "UGC Content",
  "Promotional Campaigns",
];

export function CapabilitiesStrip() {
  const items = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <section className="overflow-hidden border-y border-line-dark bg-espresso py-10 text-cream md:py-12">
      <p className="eyebrow mx-auto mb-6 w-full max-w-[1440px] px-6 text-copper-light md:px-10 xl:px-16">
        One asset can become
      </p>

      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl text-cream/90 md:text-3xl">
            {item}
            <span aria-hidden className="text-copper">
              ✦
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
