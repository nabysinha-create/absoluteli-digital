// No analytics platform is wired up yet. This just gives every meaningful
// interaction a stable, semantic event name so a real provider (GA4,
// Segment, PostHog, etc.) can be dropped into this one function later
// without touching call sites.
export type AnalyticsEvent =
  | "book_call_click"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "portfolio_click";

export function track(event: AnalyticsEvent, data?: Record<string, unknown>) {
  if (process.env.NODE_ENV !== "production") {
    console.debug(`[track] ${event}`, data ?? {});
  }
}
