import Link from "@/components/static-link";
import Image from "next/image";
import {
  ArrowUpRight,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  FlaskConical,
  PackageCheck,
  Utensils,
  Building2,
  Check,
} from "lucide-react";
import { services, generalFaq, steps } from "@/content/services";
import { Navigation, WhatsApp } from "./client";
import { businessEmail, businessPhone } from "@/lib/config";
export function Logo({ horizontal = false }: { horizontal?: boolean }) {
  if (horizontal) {
    return (
      <Link href="/" className="navbar-logo" aria-label="Regulora Consultant — Beranda">
        <span className="navbar-logo-symbol" aria-hidden="true">
          <Image src="/images/regulora-symbol.png" alt="" width={940} height={1120} priority />
        </span>
        <span className="navbar-logo-wordmark" aria-hidden="true">
          <Image src="/images/regulora-wordmark.png" alt="" width={2900} height={700} priority />
        </span>
      </Link>
    );
  }
  return (
    <Link href="/" className="logo" aria-label="Regulora Consultant — Beranda">
      <Image
        src="/images/regulora-logo-full.png"
        alt="Regulora Consultant"
        width={2850}
        height={1850}
        sizes="224px"
        className="logo-image"
        priority
      />
    </Link>
  );
}
export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Logo horizontal />
        <Navigation />
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>
            Pendampingan yang jelas.
            <br />
            Langkah usaha yang lebih terarah.
          </p>
          <span className="footer-note">
            Konsultasi & pendampingan perizinan
          </span>
        </div>
        <div>
          <h3>Layanan kami</h3>
          {services.map((s) => (
            <Link key={s.slug} href={`/layanan/${s.slug}`}>
              {s.name}
            </Link>
          ))}
        </div>
        <div>
          <h3>Kenali Regulora</h3>
          {[
            ["/tentang-kami", "Tentang kami"],
            ["/artikel", "Artikel & wawasan"],
            ["/faq", "Pertanyaan umum"],
            ["/kontak", "Hubungi kami"],
          ].map(([u, t]) => (
            <Link key={u} href={u}>
              {t}
            </Link>
          ))}
        </div>
        <div>
          <h3>Mari mulai percakapan</h3>
          <p>Ceritakan kebutuhan produk dan usaha Anda.</p>
          <WhatsApp className="text-link" label="Hubungi kami" />
          <a href={`mailto:${businessEmail}`}>{businessEmail}</a>
          <a href={`tel:${businessPhone.replace(/[^\d+]/g, "")}`}>
            {businessPhone}
          </a>
          {process.env.NEXT_PUBLIC_LEGAL_IDENTITY && (
            <p>{process.env.NEXT_PUBLIC_LEGAL_IDENTITY}</p>
          )}
        </div>
      </div>
      <div className="container footer-disclaimer">
        REGULORA CONSULTANT merupakan penyedia jasa pendampingan independen,
        bukan penerbit izin dan tidak berafiliasi resmi dengan instansi
        pemerintah.
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} REGULORA CONSULTANT</span>
        <div>
          <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
          <Link href="/syarat-ketentuan">Syarat & Ketentuan</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
const icons = [
  FlaskConical,
  Building2,
  Stethoscope,
  Utensils,
  Sparkles,
  PackageCheck,
];
export function ServiceCards() {
  return (
    <div className="service-grid">
      {services.map((s, i) => {
        const Icon = icons[i];
        return (
          <Link
            href={`/layanan/${s.slug}`}
            key={s.slug}
            className={`service-card tone-${i % 3}`}
          >
            <div className="service-top">
              <span className="icon-box">
                <Icon size={25} strokeWidth={1.5} />
              </span>
              <span className="service-number">0{i + 1}</span>
            </div>
            <span className="category">{s.category}</span>
            <h3>{s.name}</h3>
            <p>{s.summary}</p>
            <span className="card-link">
              Jelajahi layanan <ArrowUpRight size={18} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
export function FAQ({ items = generalFaq }: { items?: string[][] }) {
  return (
    <div className="faq-list">
      {items.map(([q, a], i) => (
        <details key={q}>
          <summary>
            <span className="faq-number">0{i + 1}</span>
            {q}
            <span className="faq-plus">+</span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function CTA({ service }: { service?: string }) {
  return (
    <section className="container cta-section">
      <div className="cta-image">
        <Image
          src="/images/consultation.jpeg"
          alt="Representasi visual Regulora dengan pose menyambut"
          fill
          sizes="(max-width: 700px) 100vw, 360px"
        />
      </div>
      <div className="cta-content">
        <span className="eyebrow">LANGKAH PERTAMA DIMULAI DI SINI</span>
        <h2>Masih bingung menentukan perizinan yang dibutuhkan?</h2>
        <p>
          Konsultasikan kebutuhan usaha dan produk Anda bersama REGULORA
          CONSULTANT.
        </p>
        <WhatsApp service={service} label="Hubungi konsultan kami" />
      </div>
      <span className="cta-decoration" aria-hidden="true">
        ✳
      </span>
    </section>
  );
}
export function Workflow({ items = steps }: { items?: string[] }) {
  return (
    <ol className="workflow">
      {items.map((s, i) => (
        <li key={s}>
          <span>0{i + 1}</span>
          <h3>{s}</h3>
        </li>
      ))}
    </ol>
  );
}
export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Beranda</Link>
      {items.map((x) => (
        <span key={x.label}>
          {" "}
          /{" "}
          {x.href ? (
            <Link href={x.href}>{x.label}</Link>
          ) : (
            <span aria-current="page">{x.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export function Trust() {
  return (
    <div className="trust">
      <span>
        <ShieldCheck size={17} />
        Pendampingan terarah
      </span>
      <span>
        <Check size={17} />
        Komunikasi transparan
      </span>
    </div>
  );
}
