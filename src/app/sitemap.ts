import type { MetadataRoute } from "next";
import { services, articles } from "@/content/services";
import { legalSlugs } from "@/content/legal";
import { siteUrl, launchReady } from "@/lib/config";
import { locales, localePath } from "@/i18n";
const pages = [
  "/",
  "/tentang-kami",
  "/layanan",
  ...services.map((s) => "/layanan/" + s.slug),
  "/artikel",
  ...articles.map((a) => "/artikel/" + a.slug),
  "/faq",
  "/kontak",
  ...legalSlugs.map((l) => "/" + l),
];
// trailingSlash: true — list the final URLs, not ones that 301-redirect.
const url = (path: string) => {
  const p = path === "/" ? "/" : path + "/";
  return siteUrl + (p.startsWith("//") ? p.slice(1) : p);
};
export default function sitemap(): MetadataRoute.Sitemap {
  if (!launchReady) return [];
  return pages.flatMap((page) =>
    locales.map((lang) => ({
      url: url(localePath(lang, page)),
      alternates: {
        languages: Object.fromEntries([
          ...locales.map((l) => [l === "zh" ? "zh-CN" : l, url(localePath(l, page))]),
          ["x-default", url(page)],
        ]),
      },
    })),
  );
}
export const dynamic = "force-static";
