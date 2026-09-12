import { NextResponse } from "next/server";

// TODO: connect a real delivery service before launch (e.g. Resend/Postmark
// for email, or a CRM webhook). Until then this route validates and logs
// submissions server-side only — it deliberately reports `delivered: false`
// so the client never shows a fake "message sent" state. See ContactForm.tsx,
// which renders a distinct, honest fallback (WhatsApp/email) when that flag
// is false.

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  website?: string;
  industry?: string;
  interests?: string[];
  projectType?: string;
  budget?: string;
  message?: string;
  // Honeypot field — real visitors never fill this in.
  companyWebsiteConfirm?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Bot hit the honeypot — accept quietly without processing or revealing
  // that anything was rejected.
  if (body.companyWebsiteConfirm) {
    return NextResponse.json({ ok: true, delivered: false }, { status: 200 });
  }

  const name = body.name?.trim();
  const company = body.company?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !company || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing_required_fields" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  console.info("[contact] enquiry received (not yet delivered — no delivery service connected):", {
    name,
    company,
    email,
    phone: body.phone?.trim() || undefined,
    website: body.website?.trim() || undefined,
    industry: body.industry || undefined,
    interests: body.interests?.length ? body.interests : undefined,
    projectType: body.projectType || undefined,
    budget: body.budget || undefined,
  });

  return NextResponse.json({ ok: true, delivered: false }, { status: 200 });
}
