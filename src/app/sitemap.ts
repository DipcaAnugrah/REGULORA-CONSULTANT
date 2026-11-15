import type { MetadataRoute } from "next";
import { services, articles } from "@/content/services";
import { siteUrl, launchReady } from "@/lib/config";
export default function sitemap(): MetadataRoute.Sitemap {
  return launchReady
    ? [
        "",
        "/tentang-kami",
        "/layanan",
        ...services.map((s) => "/layanan/" + s.slug),
        "/artikel",
        ...articles.map((a) => "/artikel/" + a.slug),
        "/faq",
        "/kontak",
        "/kebijakan-privasi",
        "/syarat-ketentuan",
        "/disclaimer",
        // trailingSlash: true — list the final URLs, not ones that 301-redirect.
      ].map((p) => ({ url: siteUrl + p + "/" }))
    : [];
}

export const dynamic = "force-static";
