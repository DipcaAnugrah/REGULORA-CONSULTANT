import type { MetadataRoute } from "next";
import { siteUrl, launchReady } from "@/lib/config";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(launchReady ? { allow: "/", disallow: "/api/" } : { disallow: "/" }),
    },
    sitemap: siteUrl + "/sitemap.xml",
  };
}

export const dynamic = "force-static";
