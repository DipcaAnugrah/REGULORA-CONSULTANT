import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  Compass,
  MessagesSquare,
  Fingerprint,
  ScanLine,
} from "lucide-react";
import {
  SectionHeading,
  ServiceCards,
  FAQ,
  CTA,
  Workflow,
  Trust,
} from "@/components/ui";
import { WhatsApp } from "@/components/client";
import { meta } from "@/lib/seo";
export const metadata = meta(
  "Konsultasi Perizinan Produk & Usaha",
  "Pendampingan perizinan alat kesehatan, PKRT, pangan, dan kosmetik yang jelas dan terarah.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" /> PARTNER PERIZINAN USAHA ANDA
          </span>
          <h1>
            Langkah lebih pasti.
            <br />
            Usaha <span className="highlight">lebih siap.</span>
          </h1>
          <p className="hero-description">
            Urus perizinan produk dan usaha lebih mudah bersama{" "}
            <strong>REGULORA CONSULTANT.</strong> Pendampingan yang jelas dan
            terarah, dari memahami kebutuhan hingga menjalani proses.
          </p>
          <div className="actions">
            <WhatsApp />
            <Link className="button secondary" href="/layanan">
              Jelajahi layanan <ArrowUpRight size={18} />
            </Link>
          </div>
          <Trust />
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <Image
              src="/images/hero.jpeg"
              alt="Representasi visual Regulora dengan pose tangan terlipat"
              fill
              priority
              sizes="(max-width: 700px) 90vw, 520px"
            />
          </div>
          <span className="hero-flower" aria-hidden="true">
            ✳
          </span>
          <div className="photo-caption">
            <span className="caption-icon">↗</span>
            <div>
              Setiap usaha punya langkahnya.
              <strong>Kami bantu arahkan langkah Anda.</strong>
            </div>
          </div>
          <span className="vertical-label">CLARITY IN EVERY STEP</span>
        </div>
        <a href="#layanan" className="hero-bottom">
          KENALI LAYANAN KAMI <ArrowDown size={15} />
        </a>
      </section>
      <section className="sector-strip">
        <div className="container">
          <span>FOKUS PENDAMPINGAN</span>
          <span>Alat Kesehatan</span>
          <span className="pink-dot">✳</span>
          <span>PKRT</span>
          <span className="green-dot">✳</span>
          <span>Pangan</span>
          <span className="pink-dot">✳</span>
          <span>Kosmetik</span>
        </div>
      </section>
      <section className="section container" id="layanan">
        <div className="section-title-row">
          <SectionHeading
            eyebrow="LAYANAN KAMI"
            title="Kebutuhan berbeda. Pendampingan yang tepat."
            description="Temukan layanan yang sesuai dengan tahap perjalanan produk dan usaha Anda."
          />
          <Link href="/layanan" className="text-link">
            Semua layanan <ArrowUpRight size={18} />
          </Link>
        </div>
        <ServiceCards />
      </section>
      <section className="about-section">
        <div className="container about-grid">
          <div className="about-statement">
            <span className="eyebrow">TENTANG REGULORA</span>
            <h2>
              Di balik usaha yang siap melangkah,
              <br />
              <span>ada proses yang dipahami.</span>
            </h2>
            <div className="brand-art" aria-hidden="true">
              <span>r.</span>
              <span>↗</span>
            </div>
          </div>
          <div className="about-copy">
            <span className="small-label">KENALI PARTNER PERIZINAN ANDA</span>
            <p>
              Menjalani proses perizinan tidak harus terasa membingungkan. Kami
              hadir untuk membantu Anda memahami apa yang dibutuhkan dan langkah
              yang perlu dilakukan.
            </p>
            <p>
              REGULORA CONSULTANT menyediakan jasa konsultasi dan pendampingan
              perizinan produk serta usaha, dengan pendekatan yang disesuaikan
              dengan kebutuhan Anda.
            </p>
            <Link href="/tentang-kami" className="text-link">
              Lebih dekat dengan Regulora <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="CARA KAMI MENDAMPINGI"
          title="Bukan sekadar proses. Tentang kejelasan."
        />
        <div className="feature-grid">
          {[
            [
              Compass,
              "Pendampingan terarah",
              "Memetakan kebutuhan dan langkah yang relevan dengan usaha Anda.",
            ],
            [
              MessagesSquare,
              "Komunikasi jelas",
              "Informasi disampaikan dengan bahasa yang mudah dipahami.",
            ],
            [
              Fingerprint,
              "Sesuai kebutuhan",
              "Pendekatan yang mempertimbangkan jenis produk dan kondisi usaha.",
            ],
            [
              ScanLine,
              "Proses transparan",
              "Ruang lingkup dan tahapan dibahas sejak awal pendampingan.",
            ],
          ].map(([Icon, title, desc]) => {
            const I = Icon as typeof Compass;
            return (
              <div className="feature" key={title as string}>
                <I size={28} strokeWidth={1.5} />
                <h3>{title as string}</h3>
                <p>{desc as string}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="process-section">
        <div className="container">
          <SectionHeading
            eyebrow="ALUR PENDAMPINGAN"
            title="Selangkah demi selangkah, bersama Anda."
            description="Kenali gambaran proses sebelum memulai perjalanan perizinan."
          />
          <Workflow />
        </div>
      </section>
      <section className="section container faq-grid">
        <div>
          <SectionHeading
            eyebrow="PERTANYAAN UMUM"
            title="Mari perjelas, sebelum melangkah."
            description="Jawaban awal untuk pertanyaan yang mungkin ada di benak Anda."
          />
          <Link className="text-link" href="/faq">
            Lihat semua pertanyaan <ArrowUpRight size={18} />
          </Link>
        </div>
        <FAQ />
      </section>
      <CTA />
    </>
  );
}
