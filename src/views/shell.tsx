import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header, Footer } from "@/components/ui";
import { Analytics, WhatsApp } from "@/components/client";
import { siteUrl, launchReady, whatsappNumber } from "@/lib/config";
import { getDict, htmlLang, type Locale } from "@/i18n";
const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});
export function shellMetadata(lang: Locale): Metadata {
  const t = getDict(lang).site;
  return {
    metadataBase: new URL(siteUrl),
    title: { default: t.title, template: "%s | REGULORA CONSULTANT" },
    description: t.description,
    robots: { index: launchReady, follow: launchReady },
    openGraph: {
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}
/** Root <html> for one language. Each language has its own root layout so
 *  the static HTML carries the right lang attribute. */
export function RootShell({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  const t = getDict(lang);
  return (
    <html lang={htmlLang[lang]}>
      <body className={font.variable}>
        <a className="skip-link" href="#main">
          {t.site.skipLink}
        </a>
        <Header lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
        {whatsappNumber && (
          <div className="floating-whatsapp">
            <WhatsApp className="button green" label={t.whatsapp.floating} />
          </div>
        )}
        <Analytics />
        {process.env.NODE_ENV === "development" && !whatsappNumber && (
          <div className="dev-notice">{t.site.devNotice}</div>
        )}
      </body>
    </html>
  );
}
