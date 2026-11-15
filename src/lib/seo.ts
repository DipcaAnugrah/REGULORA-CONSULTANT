import type { Metadata } from "next";
import { siteUrl } from "./config";
import { getDict, localePath, locales, ogLocale, type Locale } from "@/i18n";
const slash = (p: string) => (p.endsWith("/") ? p : p + "/");
/** `path` is the Indonesian path (e.g. "/layanan"); other languages are derived. */
export function meta(
  locale: Locale,
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = slash(localePath(locale, path));
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l === "zh" ? "zh-CN" : l, slash(localePath(l, path))]),
  );
  languages["x-default"] = slash(path);
  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      title,
      description,
      url: siteUrl + url,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      type: "website",
      siteName: "REGULORA CONSULTANT",
      images: [
        {
          url: siteUrl + "/opengraph-image",
          width: 1200,
          height: 630,
          alt: getDict(locale).site.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteUrl + "/opengraph-image"],
    },
  };
}
