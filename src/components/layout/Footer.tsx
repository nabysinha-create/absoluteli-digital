import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <Container className="flex flex-col gap-12 py-16 md:py-20">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-md">
            <Logo variant="light" className="h-7" />
            <p className="mt-4 text-sm leading-relaxed text-cream-dim">
              Creative production, social content and digital growth for visually driven brands.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="eyebrow text-cream-dim transition-colors hover:text-copper-light"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-8 border-t border-line-dark pt-8 text-xs text-cream-dim md:flex-row md:items-end">
          <div className="flex flex-col gap-2">
            <p>
              © {new Date().getFullYear()} Absoluteli Digital. A brand operated by Brand Station
              FZE. All rights reserved.
            </p>
            <nav className="flex items-center gap-2">
              {LEGAL_LINKS.map((link, i) => (
                <span key={link.href} className="flex items-center gap-2">
                  <Link href={link.href} className="transition-colors hover:text-cream">
                    {link.label}
                  </Link>
                  {i < LEGAL_LINKS.length - 1 ? <span aria-hidden>·</span> : null}
                </span>
              ))}
            </nav>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex w-fit items-center gap-1 transition-colors hover:text-cream"
            >
              {SITE_CONFIG.email}
              <span aria-hidden>↗</span>
            </a>
          </div>
          <p className="eyebrow">Creative &amp; Digital Growth Studio</p>
        </div>
      </Container>
    </footer>
  );
}
