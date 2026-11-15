import { getDict, type Locale } from "@/i18n";
// Page order and URL slugs are shared by every language.
const serviceSlugs = [
  "pkrt",
  "idak-ipak",
  "izin-edar-alat-kesehatan",
  "spp-irt",
  "notifikasi-kosmetik",
  "bpom-md-ml",
] as const;
export function getServices(locale: Locale = "id") {
  const t = getDict(locale);
  return serviceSlugs.map((slug) => {
    const s = t.content.services[slug];
    return {
      ...s,
      slug,
      description: `${s.summary} ${s.focus}`,
      requirements: [] as string[],
      preparation: s.topics,
      steps: t.serviceDetail.steps(s.short, s.topics[0]),
      faq: [[s.question, s.answer], t.content.generalFaq[1], t.content.generalFaq[2]],
      seoTitle: t.serviceDetail.seoTitle(s.name),
      metaDescription: s.summary,
      whatsappMessage: t.whatsapp.serviceMessage(s.name),
      needsVerification: true,
    };
  });
}
export function getArticles(locale: Locale = "id") {
  return Object.entries(getDict(locale).content.articles).map(([slug, a]) => ({
    slug,
    ...a,
  }));
}
export const services = getServices("id");
export const articles = getArticles("id");
export const steps = getDict("id").content.steps;
export const generalFaq = getDict("id").content.generalFaq;
