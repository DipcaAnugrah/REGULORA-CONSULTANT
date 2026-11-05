import { Breadcrumb, ServiceCards, CTA } from "@/components/ui";
import { meta } from "@/lib/seo";
export const metadata = meta(
  "Layanan Perizinan",
  "Temukan pendampingan PKRT, IDAK/IPAK, izin edar alat kesehatan, SPP-IRT, kosmetik dan BPOM MD/ML.",
  "/layanan",
);
export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Layanan" }]} />
          <span className="eyebrow">LAYANAN REGULORA</span>
          <h1>
            Satu langkah awal.
            <br />
            Beragam kebutuhan usaha.
          </h1>
          <p>
            Pilih layanan untuk mengenali fokus pendampingan. Belum yakin? Kami
            bantu memetakan kebutuhan Anda saat konsultasi.
          </p>
        </div>
      </section>
      <section className="container page-body">
        <ServiceCards />
      </section>
      <CTA />
    </>
  );
}
