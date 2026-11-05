declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
const allowed: Record<string, string[]> = {
  page_view: ["page_title"],
  view_service: ["service"],
  contact_form_start: [],
  click_whatsapp: ["service"],
  generate_lead: ["service"],
  conversion: ["send_to", "transaction_id"],
};
/** Analytics must never break a successful lead submission. No contact fields are accepted. */
export function track(name: string, data: Record<string, string> = {}) {
  try {
    if (
      !allowed[name] ||
      localStorage.getItem("regulora-consent") !== "accepted"
    )
      return;
    const safe = Object.fromEntries(
      Object.entries(data).filter(([key]) => allowed[name].includes(key)),
    );
    window.gtag?.("event", name, {
      ...safe,
      page_location: location.origin + location.pathname,
      page_referrer: "",
    });
  } catch {
    /* Storage may be blocked by the browser. Measurement is optional. */
  }
}
