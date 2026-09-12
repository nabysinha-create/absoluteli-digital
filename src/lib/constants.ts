export const SITE_NAME = "Absoluteli Digital";

export const NAV_LINKS = [
  { label: "Our Work", href: "/our-work" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// Central contact/site configuration. Every contact CTA across the site
// should eventually read from here rather than hard-coding a number, handle
// or URL locally. Fields marked TODO are unconfirmed placeholders — replace
// with real details before launch; do not treat them as real contact info.
export const SITE_CONFIG = {
  brandName: SITE_NAME,
  domain: "https://absolutelidigital.com",
  email: "connect@absolutelidigital.com",
  phoneNumber: "+971562893969",
  phoneDisplay: "+971 56 289 3969",
  whatsappNumber: "971562893969", // digits only (no + or spaces), used for wa.me links
  whatsappDefaultMessage: "Hi Absoluteli Digital, I'd like to discuss a project.",
  instagramUrl: "https://instagram.com/absolutelidigital", // TODO: confirm real handle
  linkedinUrl: "https://linkedin.com/company/absolutelidigital", // TODO: confirm real page
  calendlyUrl: "https://calendly.com/connect-absolutelidigital",
} as const;

// Builds an official wa.me click-to-chat link with a URL-encoded message.
export function getWhatsAppUrl(message: string = SITE_CONFIG.whatsappDefaultMessage) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Builds a tel: link from the configured phone number.
export function getPhoneUrl() {
  return `tel:${SITE_CONFIG.phoneNumber}`;
}

// Kept for the existing components already built against this shape
// (e.g. FinalCTA). New code should prefer SITE_CONFIG / getWhatsAppUrl.
export const CONTACT_PLACEHOLDERS = {
  calendlyUrl: SITE_CONFIG.calendlyUrl,
  whatsappUrl: getWhatsAppUrl(),
  email: SITE_CONFIG.email,
} as const;
