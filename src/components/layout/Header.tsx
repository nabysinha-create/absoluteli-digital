"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG, getWhatsAppUrl, getPhoneUrl } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { track } from "@/lib/analytics";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Private client-presentation pages are self-contained (no site nav) —
  // hide the global header entirely there rather than surfacing links back
  // into the public marketing site.
  if (pathname?.startsWith("/presentation")) return null;

  const solid = scrolled || menuOpen;
  // Only the homepage opens on a dark (video) hero — every other page opens on
  // a light editorial hero, so the unscrolled header needs dark text there.
  // Once scrolled, the header is always the dark glass panel, so text is
  // always cream regardless of route.
  const isHomepage = pathname === "/";
  const overDark = solid || isHomepage;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        solid
          ? "border-line-dark bg-espresso-deep/75 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 md:px-10 xl:px-16">
        <Link href="/" onClick={() => setMenuOpen(false)} className="relative z-10 block">
          <Logo variant={overDark ? "light" : "dark"} className="h-6 md:h-7" priority />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`eyebrow transition-colors duration-500 ${
                overDark ? "text-cream hover:text-copper-light" : "text-espresso hover:text-copper"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <div className="hidden items-center gap-4 xl:flex">
            <a
              href={getPhoneUrl()}
              onClick={() => track("phone_click")}
              className={`eyebrow whitespace-nowrap transition-colors duration-500 ${
                overDark ? "text-cream/80 hover:text-copper-light" : "text-espresso/80 hover:text-copper"
              }`}
            >
              {SITE_CONFIG.phoneDisplay}
            </a>
            <span aria-hidden className={`h-3 w-px ${overDark ? "bg-cream/30" : "bg-espresso/30"}`} />
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click")}
              className={`eyebrow transition-colors duration-500 ${
                overDark ? "text-cream/80 hover:text-copper-light" : "text-espresso/80 hover:text-copper"
              }`}
            >
              WhatsApp
            </a>
          </div>

          <Link
            href="/contact"
            className={`inline-flex items-center justify-center border px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
              overDark
                ? "border-cream/50 text-cream hover:bg-cream hover:text-espresso"
                : "border-espresso/50 text-espresso hover:bg-espresso hover:text-cream"
            }`}
          >
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={`h-px w-6 transition-all duration-300 ${overDark ? "bg-cream" : "bg-espresso"} ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 transition-all duration-300 ${overDark ? "bg-cream" : "bg-espresso"} ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-line-dark bg-espresso-deep/95 px-6 pb-10 pt-6 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display block py-3 text-3xl text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center border border-cream/50 px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-cream"
            >
              Book a Discovery Call
            </Link>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={getPhoneUrl()}
                onClick={() => {
                  track("phone_click");
                  setMenuOpen(false);
                }}
                className="inline-flex items-center justify-center border border-cream/20 px-4 py-4 text-xs font-medium uppercase tracking-[0.18em] text-cream-dim transition-colors hover:border-cream/50 hover:text-cream"
              >
                Call Us
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  track("whatsapp_click");
                  setMenuOpen(false);
                }}
                className="inline-flex items-center justify-center border border-cream/20 px-4 py-4 text-xs font-medium uppercase tracking-[0.18em] text-cream-dim transition-colors hover:border-cream/50 hover:text-cream"
              >
                WhatsApp
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
