import { notFound } from "next/navigation";
import Link from "@/components/static-link";
import { services } from "@/content/services";
import { Breadcrumb, FAQ, CTA, Workflow, Trust } from "@/components/ui";
import { WhatsApp } from "@/components/client";
import { meta } from "@/lib/seo";
import { siteUrl } from "@/lib/config";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return s ? meta(s.seoTitle, s.metaDescription, `/layanan/${slug}`) : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Layanan",
        item: siteUrl + "/layanan",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: s.name,
        item: siteUrl + "/layanan/" + slug,
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="page-hero">
        <div className="container">
          <Breadcrumb
            items={[{ label: "Layanan", href: "/layanan" }, { label: s.short }]}
          />
          <span className="eyebrow">{s.category}</span>
          <h1>Jasa Pengurusan {s.name}</h1>
          <p>
            {s.summary} Mulai dengan peninjauan kebutuhan agar langkah
            berikutnya lebih terarah.
          </p>
          <div className="actions">
            <WhatsApp service={slug} label={`Konsultasikan ${s.short}`} />
            <Link className="button secondary" href={`/kontak?layanan=${slug}`}>
              Formulir konsultasi
            </Link>
          </div>
          <Trust />
        </div>
      </section>
      <section className="container page-body service-detail">
        <div className="two-column">
          <article className="prose">
            <h2>Pendampingan untuk kebutuhan Anda</h2>
            <p>{s.description}</p>
            <h2>Untuk siapa layanan ini?</h2>
            <p>{s.audience}</p>
            <h2>Apa yang kami bantu?</h2>
            <p>
              Kami membantu memetakan kebutuhan, meninjau kesiapan informasi,
              dan menjelaskan langkah tindak lanjut. Ruang lingkup pekerjaan dan
              penawaran disepakati sebelum pendampingan dimulai.
            </p>
          </article>
          <aside className="info-panel">
            <span className="eyebrow">PERSIAPAN KONSULTASI</span>
            <h2>Mari mulai dari informasi yang Anda miliki.</h2>
            <ul>
              {s.preparation.map((t) => (
                <li key={t}>✓ {t}</li>
              ))}
            </ul>
            <p>
              Ini adalah bahan diskusi awal, bukan daftar persyaratan resmi.
              Daftar dokumen pengajuan ditentukan setelah jenis produk dan
              kegiatan usaha ditinjau.
            </p>
            {s.requirements.length > 0 && (
              <ul>
                {s.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            )}
          </aside>
        </div>
        <div className="prose">
          <h2>Tahapan pendampingan</h2>
        </div>
        <Workflow items={s.steps} />
        <div className="section">
          <h2 style={{ marginBottom: 25 }}>Pertanyaan tentang {s.short}</h2>
          <FAQ items={s.faq} />
        </div>
        <p className="notice">
          Penerbitan izin merupakan kewenangan instansi terkait. Pendampingan
          tidak menjamin hasil atau durasi evaluasi.
        </p>
      </section>
      <CTA service={slug} />
    </>
  );
}
