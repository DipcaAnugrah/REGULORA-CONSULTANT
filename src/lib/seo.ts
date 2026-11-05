import type { Metadata } from "next";
import { siteUrl } from "./config";
export function meta(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: siteUrl + path,
      locale: "id_ID",
      type: "website",
      siteName: "REGULORA CONSULTANT",
      images: [
        {
          url: siteUrl + "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "REGULORA CONSULTANT — Pendampingan perizinan",
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
