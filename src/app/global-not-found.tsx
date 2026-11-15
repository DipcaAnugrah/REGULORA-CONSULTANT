import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "@/components/static-link";
import { getDict, localeLabel, localePath, prefixedLocales } from "@/i18n";
import "./globals.css";
const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});
const t = getDict("id").notFound;
export const metadata: Metadata = {
  title: "404 | REGULORA CONSULTANT",
  robots: { index: false },
};
// One 404 for every language (static hosting serves a single 404.html).
export default function GlobalNotFound() {
  return (
    <html lang="id">
      <body className={font.variable}>
        <main id="main">
          <section className="container page-body">
            <span className="eyebrow">{t.eyebrow}</span>
            <h1>
              {t.titleA}
              <br />
              {t.titleB}
            </h1>
            <p style={{ marginTop: 20 }}>{t.body}</p>
            <div className="actions" style={{ marginTop: 25 }}>
              <Link className="button primary" href="/">
                {t.button}
              </Link>
              {prefixedLocales.map((l) => (
                <Link
                  key={l}
                  className="button secondary"
                  href={localePath(l)}
                  lang={l === "zh" ? "zh-CN" : l}
                >
                  {getDict(l).notFound.button} ({localeLabel[l].short})
                </Link>
              ))}
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
