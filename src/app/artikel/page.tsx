import Link from "next/link";
import { articles } from "@/content/services";
import { Breadcrumb } from "@/components/ui";
import { meta } from "@/lib/seo";
export const metadata = meta(
  "Artikel & Wawasan",
  "Panduan persiapan konsultasi dan wawasan pendampingan untuk pelaku usaha.",
  "/artikel",
);
export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Artikel" }]} />
          <span className="eyebrow">CATATAN REGULORA</span>
          <h1>
            Pahami prosesnya.
            <br />
            Persiapkan langkahnya.
          </h1>
          <p>
            Bacaan praktis untuk memulai percakapan tentang kebutuhan usaha
            Anda.
          </p>
        </div>
      </section>
      <section className="container page-body article-grid">
        {articles.map((a) => (
          <Link
            href={`/artikel/${a.slug}`}
            key={a.slug}
            className="article-card"
          >
            <span className="eyebrow">{a.category}</span>
            <h2>{a.title}</h2>
            <p>{a.description}</p>
            <span className="text-link">Baca artikel ↗</span>
          </Link>
        ))}
      </section>
    </>
  );
}
