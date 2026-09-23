import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

// Simplified version of the site footer — no NAV_LINKS row, no
// contact-channel grid, no full nav. Just brand, legal, copyright.
export function PresentationFooter() {
  return (
    <footer className="bg-espresso-deep text-ivory">
      <Container className="flex flex-col gap-8 py-14 md:py-16">
        <div className="flex flex-col items-start gap-3">
          <Logo variant="light" className="h-6" />
          <span className="eyebrow text-ivory-dim">Creative Production · Content · Digital Growth</span>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-6 border-t border-line-dark pt-6 text-xs text-ivory-dim md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Absoluteli Digital. All rights reserved.</p>
          <nav className="flex items-center gap-2">
            {LEGAL_LINKS.map((link, i) => (
              <span key={link.href} className="flex items-center gap-2">
                <Link href={link.href} className="transition-colors hover:text-ivory">
                  {link.label}
                </Link>
                {i < LEGAL_LINKS.length - 1 ? <span aria-hidden>·</span> : null}
              </span>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
