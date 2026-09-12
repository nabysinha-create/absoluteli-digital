"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SITE_CONFIG, getWhatsAppUrl, getPhoneUrl } from "@/lib/constants";
import { track } from "@/lib/analytics";

const CHANNELS = [
  {
    eyebrow: "Call",
    label: SITE_CONFIG.phoneDisplay,
    href: getPhoneUrl(),
    event: "phone_click" as const,
  },
  {
    eyebrow: "WhatsApp",
    label: "WhatsApp",
    href: getWhatsAppUrl(),
    event: "whatsapp_click" as const,
  },
  { eyebrow: "Email", label: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { eyebrow: "Instagram", label: "Instagram", href: SITE_CONFIG.instagramUrl },
  {
    eyebrow: "Book a Call",
    label: "Book a Call",
    href: SITE_CONFIG.calendlyUrl,
    event: "book_call_click" as const,
  },
];

export function QuickContact() {
  return (
    <section className="bg-charcoal py-16 text-cream md:py-20">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <span className="eyebrow text-copper-light">Prefer Direct Contact?</span>
        </Reveal>

        <Reveal
          delay={0.08}
          className="grid grid-cols-1 gap-px overflow-hidden border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-5"
        >
          {CHANNELS.map((channel) => {
            const opensInPage = channel.href.startsWith("mailto:") || channel.href.startsWith("tel:");
            return (
              <a
                key={channel.eyebrow}
                href={channel.href}
                onClick={() => channel.event && track(channel.event)}
                className="group flex min-w-0 flex-col gap-3 bg-charcoal px-7 py-8 transition-colors duration-300 hover:bg-espresso-deep"
                {...(opensInPage ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              >
                <span className="eyebrow text-cream-dim/70">{channel.eyebrow}</span>
                <span
                  className={`font-display flex items-center gap-2 text-cream ${
                    channel.eyebrow === "Call" || channel.eyebrow === "Email"
                      ? "text-lg md:text-xl"
                      : "text-xl md:text-2xl"
                  }`}
                >
                  <span className="min-w-0 break-words">{channel.label}</span>
                  <span
                    aria-hidden
                    className="shrink-0 text-copper-light transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
