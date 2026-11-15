import id, { type Dict } from "./id";
import en from "./en";
import zh from "./zh";

export type { Dict };
export const locales = ["id", "en", "zh"] as const;
export type Locale = (typeof locales)[number];
/** Languages served under a path prefix. Indonesian keeps the original URLs. */
export const prefixedLocales = ["en", "zh"] as const;

const dicts: Record<Locale, Dict> = { id, en, zh };
export const getDict = (locale: Locale): Dict => dicts[locale];

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
export const toLocale = (value: string): Locale =>
  isLocale(value) ? value : "id";

export const htmlLang: Record<Locale, string> = {
  id: "id",
  en: "en",
  zh: "zh-CN",
};
export const ogLocale: Record<Locale, string> = {
  id: "id_ID",
  en: "en_US",
  zh: "zh_CN",
};
export const localeLabel: Record<Locale, { short: string; name: string }> = {
  id: { short: "ID", name: "Indonesia" },
  en: { short: "EN", name: "English" },
  zh: { short: "中文", name: "中文" },
};

/** Path of `path` (Indonesian form, e.g. "/layanan/pkrt") in another language. */
export function localePath(locale: Locale, path = "/") {
  if (locale === "id") return path;
  return `/${locale}${path === "/" ? "/" : path}`;
}
export function localeFromPath(path: string | null): Locale {
  const first = (path || "/").split("/")[1];
  return first === "en" || first === "zh" ? first : "id";
}
/** "/en/layanan/pkrt/" -> "/layanan/pkrt/" */
export function stripLocale(path: string) {
  const locale = localeFromPath(path);
  return locale === "id" ? path : path.slice(locale.length + 1) || "/";
}
