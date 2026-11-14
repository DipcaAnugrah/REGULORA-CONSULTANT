import { ContactForm } from "@/components/contact-form";
import { Breadcrumb } from "@/components/ui";
import { WhatsApp } from "@/components/client";
import {
  businessEmail,
  businessPhone,
  whatsappNumber,
} from "@/lib/config";
import { meta } from "@/lib/seo";
export const metadata = meta(
  "Kontak & Konsultasi",
  "Ceritakan kebutuhan perizinan produk dan usaha Anda melalui konsultasi Regulora.",
  "/kontak",
);
export default function Page() {
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
        <ContactForm />
        <aside className="info-panel">
          <h2>Lebih nyaman berdiskusi langsung?</h2>
          <p>
            Pilih kanal yang tersedia. Tidak perlu mengirim dokumen sensitif
            pada percakapan pertama.
          </p>
          <div className="contact-channels">
          {whatsappNumber && <WhatsApp />}
          <a className="text-link" href={`mailto:${businessEmail}`}>
            <span className="contact-channel-label">Email</span>
            {businessEmail}
          </a>
          <a
            className="text-link"
            href={`tel:${businessPhone.replace(/[^\d+]/g, "")}`}
          >
            <span className="contact-channel-label">Telepon</span>
            {businessPhone}
          </a>
          </div>
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
