import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SITE_CONFIG } from "@/lib/constants";

// Deliberately simplified — logo and exactly two links, no primary site
// navigation. This is a private outreach page; the goal is to minimize
// distractions, not offer a way back into the whole site.
export function PresentationHeader() {
  return (
    <header className="border-b border-line-dark bg-espresso-deep">
      <Container className="flex items-center justify-between py-5 md:py-6">
        <Link href="/" className="block">
          <Logo variant="light" className="h-6 md:h-7" priority />
        </Link>

        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            href="/our-work"
            className="eyebrow hidden text-ivory transition-colors hover:text-copper-light sm:inline"
          >
            View Our Work
          </Link>
          <a
            href={SITE_CONFIG.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-ivory/50 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory/10"
          >
            Book a Call
          </a>
        </nav>
      </Container>
    </header>
  );
}
