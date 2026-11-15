import Link from "@/components/static-link";
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
import { siteUrl, whatsappNumber, businessEmail } from "@/lib/config";
import { getServices } from "@/content/services";
import { getDict, htmlLang, localePath, type Locale } from "@/i18n";
const featureIcons = [Compass, MessagesSquare, Fingerprint, ScanLine];
export function homeMetadata(lang: Locale) {
  const t = getDict(lang).home;
  return meta(lang, t.metaTitle, t.metaDescription, "/");
}
// Business identity for search engines. No street address is published, so
// none is claimed here.
function businessSchema(lang: Locale) {
  const t = getDict(lang).home;
  const home = siteUrl + localePath(lang);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": siteUrl + "/#business",
        name: "REGULORA CONSULTANT",
        url: siteUrl + "/",
        logo: siteUrl + "/images/regulora-logo-full.png",
        image: siteUrl + "/images/hero.jpeg",
        description: t.schemaDescription,
        ...(whatsappNumber ? { telephone: "+" + whatsappNumber } : {}),
        email: businessEmail,
        areaServed: { "@type": "Country", name: "Indonesia" },
        knowsLanguage: ["id", "en", "zh"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.offerCatalog,
          itemListElement: getServices(lang).map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              url: siteUrl + localePath(lang, "/layanan/" + s.slug) + "/",
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": home + "#website",
        name: "REGULORA CONSULTANT",
        url: home,
        inLanguage: htmlLang[lang],
        publisher: { "@id": siteUrl + "/#business" },
      },
    ],
  };
}
export function HomePage({ lang }: { lang: Locale }) {
  const t = getDict(lang).home;
  const p = (path: string) => localePath(lang, path);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema(lang)).replace(/</g, "\\u003c"),
        }}
      />
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" /> {t.eyebrow}
          </span>
          <h1>
            {t.titleA}
            <br />
            {t.titleB} <span className="highlight">{t.titleHighlight}</span>
          </h1>
          <p className="hero-description">
            {t.introBefore} <strong>REGULORA CONSULTANT.</strong>{" "}
            {t.introAfter}
          </p>
          <div className="actions">
            <WhatsApp />
            <Link className="button secondary" href={p("/layanan")}>
              {t.exploreServices} <ArrowUpRight size={18} />
            </Link>
          </div>
          <Trust lang={lang} />
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <Image
              src="/images/hero.jpeg"
              alt={t.heroImageAlt}
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
              {t.captionA}
              <strong>{t.captionB}</strong>
            </div>
          </div>
          <span className="vertical-label">{t.verticalLabel}</span>
        </div>
        <a href="#layanan" className="hero-bottom">
          {t.scrollCue} <ArrowDown size={15} />
        </a>
      </section>
      <section className="sector-strip">
        <div className="container">
          <span>{t.sectorLabel}</span>
          {t.sectors.flatMap((sector, i) => [
            ...(i > 0
              ? [
                  <span
                    key={`dot-${i}`}
                    className={i % 2 ? "pink-dot" : "green-dot"}
                  >
                    ✳
                  </span>,
                ]
              : []),
            <span key={sector}>{sector}</span>,
          ])}
        </div>
      </section>
      <section className="section container" id="layanan">
        <div className="section-title-row">
          <SectionHeading
            eyebrow={t.servicesEyebrow}
            title={t.servicesTitle}
            description={t.servicesDescription}
          />
          <Link href={p("/layanan")} className="text-link">
            {t.allServices} <ArrowUpRight size={18} />
          </Link>
        </div>
        <ServiceCards lang={lang} />
      </section>
      <section className="about-section">
        <div className="container about-grid">
          <div className="about-statement">
            <span className="eyebrow">{t.aboutEyebrow}</span>
            <h2>
              {t.aboutTitleA}
              <br />
              <span>{t.aboutTitleB}</span>
            </h2>
            <div className="brand-art" aria-hidden="true">
              <span>r.</span>
              <span>↗</span>
            </div>
          </div>
          <div className="about-copy">
            <span className="small-label">{t.aboutLabel}</span>
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <Link href={p("/tentang-kami")} className="text-link">
              {t.aboutLink} <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading eyebrow={t.approachEyebrow} title={t.approachTitle} />
        <div className="feature-grid">
          {t.features.map(([title, desc], i) => {
            const I = featureIcons[i];
            return (
              <div className="feature" key={title}>
                <I size={28} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="process-section">
        <div className="container">
          <SectionHeading
            eyebrow={t.processEyebrow}
            title={t.processTitle}
            description={t.processDescription}
          />
          <Workflow lang={lang} />
        </div>
      </section>
      <section className="section container faq-grid">
        <div>
          <SectionHeading
            eyebrow={t.faqEyebrow}
            title={t.faqTitle}
            description={t.faqDescription}
          />
          <Link className="text-link" href={p("/faq")}>
            {t.faqLink} <ArrowUpRight size={18} />
          </Link>
        </div>
        <FAQ lang={lang} />
      </section>
      <CTA lang={lang} />
    </>
  );
}
