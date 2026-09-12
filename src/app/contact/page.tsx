import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { QuickContact } from "@/components/contact/QuickContact";
import { Reassurance } from "@/components/contact/Reassurance";
import { ClosingStatement } from "@/components/contact/ClosingStatement";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your product, space or brand. Book a discovery call, message us on WhatsApp, or send a project enquiry.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <QuickContact />
      <Reassurance />
      <ClosingStatement />
    </>
  );
}
