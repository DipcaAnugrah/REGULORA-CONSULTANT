import { ContactForm } from "@/components/contact-form";
import { Breadcrumb } from "@/components/ui";
import { WhatsApp } from "@/components/client";
import {
  businessEmail,
  businessPhone,
  leadsReady,
  whatsappNumber,
} from "@/lib/config";
import { services } from "@/content/services";
import { meta } from "@/lib/seo";
export const dynamic = "force-dynamic";
export const metadata = meta(
  "Kontak & Konsultasi",
  "Ceritakan kebutuhan perizinan produk dan usaha Anda melalui konsultasi Regulora.",
  "/kontak",
);
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ layanan?: string }>;
}) {
  const { layanan } = await searchParams;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb items={[{ label: "Kontak" }]} />
          <span className="eyebrow">MARI MULAI PERCAKAPAN</span>
          <h1>
            Langkah pertama Anda,
            <br />
            kami dengarkan.
          </h1>
          <p>
            Ceritakan kebutuhan usaha Anda. Kita petakan langkah selanjutnya
            bersama.
          </p>
        </div>
      </section>
      <section className="container page-body two-column">
        <ContactForm
          ready={leadsReady()}
          initialService={
            services.some((s) => s.slug === layanan) ? layanan! : ""
          }
        />
        <aside className="info-panel">
          <h2>Lebih nyaman berdiskusi langsung?</h2>
          <p>
            Pilih kanal yang tersedia. Tidak perlu mengirim dokumen sensitif
            pada percakapan pertama.
          </p>
          {whatsappNumber && <WhatsApp service={layanan} />}{" "}
          <a className="text-link" href={`mailto:${businessEmail}`}>
            {businessEmail}
          </a>
          <a
            className="text-link"
            href={`tel:${businessPhone.replace(/[^\d+]/g, "")}`}
          >
            {businessPhone}
          </a>
          <h2 style={{ marginTop: 35 }}>Apa yang dibahas?</h2>
          <ul>
            <li>Jenis produk dan kegiatan usaha</li>
            <li>Posisi proses perizinan saat ini</li>
            <li>Dokumen yang sudah tersedia</li>
            <li>Ruang lingkup pendampingan</li>
          </ul>
          <p>Konsultasi awal tidak mengikat Anda pada perjanjian layanan.</p>
        </aside>
      </section>
    </>
  );
}
