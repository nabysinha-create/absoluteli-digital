"use client";

import { useRef, useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";
import { track } from "@/lib/analytics";

const INDUSTRY_OPTIONS = [
  "Interiors & Furniture",
  "Restaurants & Cafés",
  "Beauty & Skincare",
  "Fashion & Lifestyle",
  "Hospitality",
  "Retail / Ecommerce",
  "Other",
];

const INTEREST_OPTIONS = [
  "Creative Production",
  "Social Media & Content",
  "Campaign & Brand Creative",
  "Performance Marketing",
  "Ecommerce / Digital Support",
  "Not Sure Yet",
];

const PROJECT_TYPE_OPTIONS = [
  "One-Off Project",
  "Ongoing Monthly Support",
  "Campaign / Launch",
  "Looking for a Creative Partner",
  "Not Sure Yet",
];

const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not Sure Yet",
  "Prefer Not to Say",
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  industry: string;
  interests: string[];
  projectType: string;
  budget: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  website: "",
  industry: "",
  interests: [],
  projectType: "",
  budget: "",
  message: "",
};

type FieldErrors = Partial<Record<"name" | "company" | "email" | "message", string>>;

type SubmitStatus = "idle" | "submitting" | "delivered" | "received" | "error";

const inputClasses =
  "w-full border-0 border-b border-line bg-transparent py-3 text-base text-espresso placeholder:text-brown/40 focus:outline-none focus:border-copper transition-colors";

const selectClasses = `${inputClasses} appearance-none pr-8`;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: string;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="eyebrow mb-2 block text-brown/70">
      {children}
      {required ? <span className="text-copper"> *</span> : null}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-burgundy">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const hasStartedRef = useRef(false);

  function markStarted() {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      track("contact_form_start");
    }
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    markStarted();
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function toggleInterest(option: string) {
    markStarted();
    setValues((prev) => ({
      ...prev,
      interests: prev.interests.includes(option)
        ? prev.interests.filter((item) => item !== option)
        : [...prev.interests, option],
    }));
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = "Please tell us your name.";
    if (!values.company.trim()) next.company = "Please tell us your company or brand.";
    if (!values.email.trim()) next.email = "Please add a work email.";
    else if (!isValidEmail(values.email)) next.email = "That email address doesn't look right.";
    if (!values.message.trim()) next.message = "Tell us a little about the project.";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    track("contact_form_submit");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, companyWebsiteConfirm: honeypot }),
      });

      if (!response.ok) throw new Error("submission_failed");
      const data: { ok: boolean; delivered?: boolean } = await response.json();
      if (!data.ok) throw new Error("submission_failed");

      setStatus(data.delivered ? "delivered" : "received");
    } catch {
      setStatus("error");
    }
  }

  if (status === "delivered") {
    return (
      <section id="enquiry" className="scroll-mt-24 bg-ivory py-20 md:py-28">
        <Container className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="eyebrow text-copper">Thank You</span>
            <h2 className="font-display text-display-md leading-[1.05] text-espresso mt-5">
              Your message is on its way.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-brown md:text-lg">
              We&rsquo;ll take a look at what you&rsquo;ve shared and be in touch.
            </p>
            <div className="mt-8">
              <Button href={SITE_CONFIG.calendlyUrl} variant="secondary">
                Book a Call →
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    );
  }

  if (status === "received") {
    return (
      <section id="enquiry" className="scroll-mt-24 bg-ivory py-20 md:py-28">
        <Container className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="eyebrow text-copper">Thank You</span>
            <h2 className="font-display text-display-md leading-[1.05] text-espresso mt-5">
              We&rsquo;ve got your details.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-brown md:text-lg">
              Our enquiry system is still finishing setup, so we can&rsquo;t confirm delivery
              automatically just yet. To make sure this reaches us without delay, message us
              directly and mention what you shared — we&rsquo;ll pick it up from there.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={getWhatsAppUrl()} variant="secondary">
                WhatsApp Us →
              </Button>
              <Button href={`mailto:${SITE_CONFIG.email}`} variant="secondary">
                Email Us →
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    );
  }

  return (
    <section id="enquiry" className="scroll-mt-24 bg-ivory py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Tell Us a Little More"
            title="What can we help you create?"
            description="You don't need a perfect brief. Give us the basics and we'll take it from there."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">
            {/* Honeypot — hidden from real visitors, left empty by them. */}
            <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden>
              <label htmlFor="companyWebsiteConfirm">Leave this field empty</label>
              <input
                id="companyWebsiteConfirm"
                name="companyWebsiteConfirm"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
              <div>
                <FieldLabel htmlFor="field-name" required>Name</FieldLabel>
                <input
                  id="field-name"
                  type="text"
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputClasses}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "error-name" : undefined}
                />
                <FieldError id="error-name" message={errors.name} />
              </div>

              <div>
                <FieldLabel htmlFor="field-company" required>Company / Brand</FieldLabel>
                <input
                  id="field-company"
                  type="text"
                  value={values.company}
                  onChange={(e) => update("company", e.target.value)}
                  className={inputClasses}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? "error-company" : undefined}
                />
                <FieldError id="error-company" message={errors.company} />
              </div>

              <div>
                <FieldLabel htmlFor="field-email" required>Work Email</FieldLabel>
                <input
                  id="field-email"
                  type="email"
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClasses}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "error-email" : undefined}
                />
                <FieldError id="error-email" message={errors.email} />
              </div>

              <div>
                <FieldLabel htmlFor="field-phone">Phone / WhatsApp</FieldLabel>
                <input
                  id="field-phone"
                  type="tel"
                  value={values.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClasses}
                />
              </div>

              <div>
                <FieldLabel htmlFor="field-website">Website / Instagram</FieldLabel>
                <input
                  id="field-website"
                  type="text"
                  value={values.website}
                  onChange={(e) => update("website", e.target.value)}
                  className={inputClasses}
                  placeholder="yoursite.com or @yourbrand"
                />
              </div>

              <div className="relative">
                <FieldLabel htmlFor="field-industry">Industry</FieldLabel>
                <select
                  id="field-industry"
                  value={values.industry}
                  onChange={(e) => update("industry", e.target.value)}
                  className={selectClasses}
                >
                  <option value="">Select an industry</option>
                  {INDUSTRY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span aria-hidden className="pointer-events-none absolute right-0 top-[42px] text-brown/50">
                  ▾
                </span>
              </div>
            </div>

            <fieldset>
              <legend className="eyebrow mb-2 block text-brown/70">What Are You Looking For?</legend>
              <div className="mt-1 flex flex-wrap gap-3">
                {INTEREST_OPTIONS.map((option) => {
                  const active = values.interests.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleInterest(option)}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        active
                          ? "border-copper bg-copper/10 text-espresso"
                          : "border-line text-brown hover:border-copper/50"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
              <div className="relative">
                <FieldLabel htmlFor="field-project-type">Project Type</FieldLabel>
                <select
                  id="field-project-type"
                  value={values.projectType}
                  onChange={(e) => update("projectType", e.target.value)}
                  className={selectClasses}
                >
                  <option value="">Select a project type</option>
                  {PROJECT_TYPE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span aria-hidden className="pointer-events-none absolute right-0 top-[42px] text-brown/50">
                  ▾
                </span>
              </div>

              <div className="relative">
                <FieldLabel htmlFor="field-budget">Approximate Budget</FieldLabel>
                <select
                  id="field-budget"
                  value={values.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className={selectClasses}
                >
                  <option value="">Select a budget range (optional)</option>
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span aria-hidden className="pointer-events-none absolute right-0 top-[42px] text-brown/50">
                  ▾
                </span>
              </div>
            </div>

            <div>
              <FieldLabel htmlFor="field-message" required>Tell Us About the Project</FieldLabel>
              <textarea
                id="field-message"
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                rows={5}
                placeholder="Tell us what you're launching, promoting or trying to improve…"
                className={`${inputClasses} resize-none`}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "error-message" : undefined}
              />
              <FieldError id="error-message" message={errors.message} />
            </div>

            {status === "error" ? (
              <p role="alert" className="text-sm text-burgundy">
                Something went wrong sending that — please try again, or reach us directly on
                WhatsApp or email below.
              </p>
            ) : null}

            <div className="flex flex-col gap-3">
              <Button
                type="submit"
                variant="primary"
                className="self-start disabled:opacity-60"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Send Project Enquiry →"}
              </Button>
              <p className="text-sm text-brown/70">
                We&rsquo;ll review your enquiry and get back to you shortly.
              </p>
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
