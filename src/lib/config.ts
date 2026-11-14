export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const launchReady =
  process.env.NEXT_PUBLIC_LAUNCH_READY === "true" &&
  siteUrl.startsWith("https://");
export function normalizePhone(value: string) {
  const clean = value.replace(/[\s()+-]/g, "");
  const number = clean.startsWith("0") ? "62" + clean.slice(1) : clean;
  return /^[1-9]\d{7,14}$/.test(number) ? number : null;
}
export const whatsappNumber = normalizePhone(
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "081949387620",
);
export const businessPhone =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "081949387620";
export const businessEmail =
  process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "reguloraconsultant@gmail.com";
const gtm = process.env.NEXT_PUBLIC_GTM_ID || "GTM-MB6442QH";
/** Google Tag Manager container. When set, GA4/Ads tags are managed inside GTM. */
export const gtmId = /^GTM-[A-Z0-9]{4,12}$/.test(gtm) ? gtm : null;
export function whatsappUrl(message: string) {
  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    : null;
}
