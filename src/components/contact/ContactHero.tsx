"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";
import { track } from "@/lib/analytics";

const EASE = [0.16, 1, 0.3, 1] as const;

const PATHS = [
  {
    label: "Book a Discovery Call",
    description: "Choose a convenient time for a short introductory conversation.",
    href: SITE_CONFIG.calendlyUrl,
    event: "book_call_click" as const,
  },
  {
    label: "WhatsApp Us",
    description: "Prefer a quick conversation? Message us directly.",
    href: getWhatsAppUrl(),
    event: "whatsapp_click" as const,
  },
  {
    label: "Write to Us",
    description: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    event: "email_click" as const,
  },
];

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-espresso-deep pb-16 pt-36 text-cream md:pb-20 md:pt-44">
      <div aria-hidden className="radial-glow absolute inset-0" />
      <Container className="relative flex flex-col gap-14">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="eyebrow text-copper-light"
          >
            Start a Conversation
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="font-display max-w-3xl text-display-xl leading-[0.98] text-cream"
          >
            Let&rsquo;s talk about
            <br />
            what you&rsquo;re building.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.16 }}
            className="max-w-lg text-base leading-relaxed text-cream-dim md:text-lg"
          >
            Have a product, space, campaign or brand that deserves more attention? Tell us what
            you&rsquo;re working on.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.24 }}
          className="grid grid-cols-1 gap-px overflow-hidden border border-line-dark bg-line-dark md:grid-cols-3"
        >
          {PATHS.map((path) => {
            const opensInPage = path.href.startsWith("mailto:");
            return (
            <a
              key={path.label}
              href={path.href}
              onClick={() => track(path.event)}
              className="group flex flex-col justify-between gap-8 bg-espresso-deep px-8 py-10 transition-colors duration-300 hover:bg-charcoal md:px-10 md:py-12"
              {...(opensInPage ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            >
              <div className="flex flex-col gap-3">
                <p className="font-display flex items-center gap-3 text-2xl text-cream md:text-3xl">
                  {path.label}
                  <span
                    aria-hidden
                    className="text-copper-light transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </p>
                <p className="max-w-xs text-sm leading-relaxed text-cream-dim md:text-base">
                  {path.description}
                </p>
              </div>
            </a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.32 }}
        >
          <Link
            href="#enquiry"
            className="eyebrow inline-flex items-center gap-2 text-cream-dim transition-colors hover:text-copper-light"
          >
            Or Send Us a Project Enquiry
            <span aria-hidden>↓</span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
