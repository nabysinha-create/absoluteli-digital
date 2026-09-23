import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";

// Unlisted concept page — not linked from anywhere on the public site, not
// in NAV_LINKS, not in sitemap.ts, not part of the /our-work case-study
// data. Reachable only via this exact URL; not password/auth protected.
export const metadata: Metadata = {
  title: "Tuka Holiday Homes — Private Concept",
  description: "A private creative concept presentation prepared by Absoluteli Digital.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

export default function TukaPresentationPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-6 pt-24 text-center md:pt-32">
        <Reveal>
          <span className="eyebrow text-copper">Private Creative Concept</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display text-display-xl leading-[0.98] text-espresso">Tuka Holiday Homes</h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="font-display text-xl italic text-brown md:text-2xl">
            A property storytelling concept by Absoluteli Digital
          </p>
        </Reveal>
      </div>

      <div className="mx-auto w-full max-w-4xl px-6 py-14 md:py-20">
        <Reveal delay={0.22}>
          <div className="glow-border-hover relative aspect-video w-full overflow-hidden border border-line-dark bg-espresso-deep">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/concepts/tuka/poster.jpg"
            >
              <source src="/concepts/tuka/demo.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto flex w-full max-w-2xl flex-col gap-5 px-6 pb-16 text-center">
        <Reveal>
          <span className="eyebrow text-copper">The Idea</span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-display text-2xl italic leading-relaxed text-brown md:text-3xl">
            &ldquo;We explored how Tuka&rsquo;s existing property imagery could move beyond traditional listing
            content and become a cinematic destination story.&rdquo;
          </p>
        </Reveal>
      </div>

      <div className="mx-auto flex w-full max-w-xl flex-col gap-4 px-6 pb-20 text-center text-sm leading-relaxed text-brown/70">
        <Reveal>
          <p>Prepared exclusively for presentation to Tuka Holiday Homes.</p>
        </Reveal>
        <Reveal delay={0.06}>
          <p>
            This independent creative concept was created by Absoluteli Digital for private presentation purposes.
            It has not been commissioned or endorsed by Tuka Holiday Homes and is not intended for public
            distribution.
          </p>
        </Reveal>
      </div>

      <div className="flex justify-center border-t border-line px-6 pb-16 pt-10">
        <Logo variant="dark" className="h-6 opacity-50" />
      </div>
    </main>
  );
}
