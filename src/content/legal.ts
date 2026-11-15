import { getDict, type Locale } from "@/i18n";
export const legalSlugs = [
  "kebijakan-privasi",
  "syarat-ketentuan",
  "disclaimer",
] as const;
export type LegalSlug = (typeof legalSlugs)[number];
export const getLegal = (locale: Locale = "id") => getDict(locale).content.legal;
export const legal = getLegal("id");
