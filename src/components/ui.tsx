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
import { getServices } from "@/content/services";
import { Navigation, WhatsApp } from "./client";
import { businessEmail, businessPhone } from "@/lib/config";
import { getDict, localePath, type Locale } from "@/i18n";
export function Logo({
  lang,
  horizontal = false,
}: {
  lang: Locale;
  horizontal?: boolean;
}) {
  const label = getDict(lang).nav.logoLabel;
  const home = localePath(lang);
  if (horizontal) {
    return (
      <Link href={home} className="navbar-logo" aria-label={label}>
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
    <Link href={home} className="logo" aria-label={label}>
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
export function Header({ lang }: { lang: Locale }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <Logo lang={lang} horizontal />
        <Navigation />
      </div>
    </header>
  );
}
export function Footer({ lang }: { lang: Locale }) {
  const t = getDict(lang).footer;
  const p = (path: string) => localePath(lang, path);
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Logo lang={lang} />
          <p>
            {t.taglineA}
            <br />
            {t.taglineB}
          </p>
          <span className="footer-note">{t.note}</span>
        </div>
        <div>
          <h3>{t.servicesTitle}</h3>
          {getServices(lang).map((s) => (
            <Link key={s.slug} href={p(`/layanan/${s.slug}`)}>
              {s.name}
            </Link>
          ))}
        </div>
        <div>
          <h3>{t.aboutTitle}</h3>
          {[
            ["/tentang-kami", t.aboutLink],
            ["/artikel", t.articlesLink],
            ["/faq", t.faqLink],
            ["/kontak", t.contactLink],
          ].map(([u, label]) => (
            <Link key={u} href={p(u)}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <h3>{t.talkTitle}</h3>
          <p>{t.talkBody}</p>
          <WhatsApp className="text-link" label={t.talkButton} />
          <a href={`mailto:${businessEmail}`}>{businessEmail}</a>
          <a href={`tel:${businessPhone.replace(/[^\d+]/g, "")}`}>
            {businessPhone}
          </a>
          {process.env.NEXT_PUBLIC_LEGAL_IDENTITY && (
            <p>{process.env.NEXT_PUBLIC_LEGAL_IDENTITY}</p>
          )}
        </div>
      </div>
      <div className="container footer-disclaimer">{t.disclaimer}</div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} REGULORA CONSULTANT</span>
        <div>
          <Link href={p("/kebijakan-privasi")}>{t.privacy}</Link>
          <Link href={p("/syarat-ketentuan")}>{t.terms}</Link>
          <Link href={p("/disclaimer")}>{t.disclaimerLink}</Link>
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
export function ServiceCards({ lang }: { lang: Locale }) {
  const explore = getDict(lang).common.exploreService;
  return (
    <div className="service-grid">
      {getServices(lang).map((s, i) => {
        const Icon = icons[i];
        return (
          <Link
            href={localePath(lang, `/layanan/${s.slug}`)}
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
              {explore} <ArrowUpRight size={18} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
export function FAQ({ lang, items }: { lang: Locale; items?: string[][] }) {
  items ??= getDict(lang).content.generalFaq;
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
export function CTA({ lang, service }: { lang: Locale; service?: string }) {
  const t = getDict(lang).common;
  return (
    <section className="container cta-section">
      <div className="cta-image">
        <Image
          src="/images/consultation.jpeg"
          alt={t.ctaImageAlt}
          fill
          sizes="(max-width: 700px) 100vw, 360px"
        />
      </div>
      <div className="cta-content">
        <span className="eyebrow">{t.ctaEyebrow}</span>
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaBody}</p>
        <WhatsApp service={service} label={t.ctaButton} />
      </div>
      <span className="cta-decoration" aria-hidden="true">
        ✳
      </span>
    </section>
  );
}
export function Workflow({ lang, items }: { lang: Locale; items?: string[] }) {
  items ??= getDict(lang).content.steps;
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
  lang,
  items,
}: {
  lang: Locale;
  items: { label: string; href?: string }[];
}) {
  const t = getDict(lang);
  return (
    <nav className="breadcrumb" aria-label={t.common.breadcrumbLabel}>
      <Link href={localePath(lang)}>{t.nav.home}</Link>
      {items.map((x) => (
        <span key={x.label}>
          {" "}
          /{" "}
          {x.href ? (
            <Link href={localePath(lang, x.href)}>{x.label}</Link>
          ) : (
            <span aria-current="page">{x.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export function Trust({ lang }: { lang: Locale }) {
  const t = getDict(lang).common;
  return (
    <div className="trust">
      <span>
        <ShieldCheck size={17} />
        {t.trustA}
      </span>
      <span>
        <Check size={17} />
        {t.trustB}
      </span>
    </div>
  );
}
