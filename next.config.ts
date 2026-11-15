import type { NextConfig } from "next";
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  // Several root layouts (one per language) need a single global 404 page.
  experimental: { globalNotFound: true },
};
export default config;
