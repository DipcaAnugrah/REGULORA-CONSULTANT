import { Breadcrumb, FAQ, CTA } from "@/components/ui";
import { meta } from "@/lib/seo";
export const metadata = meta(
  "Pertanyaan Umum",
  "Jawaban seputar konsultasi, biaya, proses, dan pendampingan perizinan di Regulora.",
  "/faq",
);
export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "FAQ" }]} />
          <h1>
            Pertanyaan Anda,
            <br />
            langkah awal kita.
          </h1>
          <p>Kenali cara kerja pendampingan sebelum memulai.</p>
        </div>
      </section>
      <section className="container page-body prose">
        <FAQ />
      </section>
      <CTA />
    </>
  );
}
