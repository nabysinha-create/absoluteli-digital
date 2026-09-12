import type { Metadata } from "next";
import { CookiePolicy } from "@/components/legal/CookiePolicy";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Absoluteli Digital uses cookies and similar technologies.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return <CookiePolicy />;
}
