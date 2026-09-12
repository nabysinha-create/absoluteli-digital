import type { Metadata } from "next";
import { TermsConditions } from "@/components/legal/TermsConditions";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Website Terms & Conditions for Absoluteli Digital.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <TermsConditions />;
}
