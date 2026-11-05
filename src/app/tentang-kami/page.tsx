import { Breadcrumb, CTA, Trust } from "@/components/ui";
import { meta } from "@/lib/seo";
export const metadata = meta(
  "Tentang Kami",
  "Kenali REGULORA CONSULTANT, penyedia jasa konsultasi dan pendampingan perizinan produk dan usaha.",
  "/tentang-kami",
);
export default function Page() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Tentang kami" }]} />
          <span className="eyebrow">KENALI REGULORA</span>
          <h1>
            Partner untuk memahami proses.
            <br />
            Teman untuk melangkah.
          </h1>
          <p>
            Kami percaya perjalanan perizinan dimulai dari pemahaman yang jelas
            tentang kebutuhan usaha Anda.
          </p>
          <Trust />
        </div>
      </section>
      <section className="container page-body two-column">
        <article className="prose">
          <h2>Pendampingan yang dekat dengan usaha Anda</h2>
          <p>
            REGULORA CONSULTANT adalah penyedia jasa konsultasi dan pendampingan
            pengurusan perizinan produk serta usaha di Indonesia. Fokus layanan
            kami mencakup alat kesehatan, PKRT, pangan, dan kosmetik.
          </p>
          <p>
            Kami membantu UMKM, pemilik brand, produsen, distributor, dan
            importir memetakan kebutuhan sebelum menjalani proses pengajuan.
            Setiap kegiatan usaha memiliki konteks berbeda; karena itu,
            pendampingan dimulai dari percakapan.
          </p>
          <h2>Kejelasan sejak awal</h2>
          <p>
            Ruang lingkup, pembagian tanggung jawab, dan biaya dibahas
            berdasarkan kebutuhan serta kesiapan dokumen. Kami tidak memberikan
            janji bahwa izin pasti diterbitkan atau selesai dalam waktu
            tertentu.
          </p>
        </article>
        <aside className="info-panel">
          <h2>Prinsip kami</h2>
          <ul>
            <li>01 — Pendampingan terarah</li>
            <li>02 — Komunikasi yang mudah dipahami</li>
            <li>03 — Pendekatan sesuai kebutuhan</li>
            <li>04 — Proses dan ruang lingkup transparan</li>
          </ul>
          <p>
            REGULORA CONSULTANT merupakan penyedia jasa independen, bukan
            instansi penerbit izin.
          </p>
        </aside>
      </section>
      <CTA />
    </>
  );
}
