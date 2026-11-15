import { notFound } from "next/navigation";
import Link from "@/components/static-link";
import {
  Breadcrumb,
  CTA,
  FAQ,
  ServiceCards,
  Trust,
  Workflow,
} from "@/components/ui";
import { WhatsApp } from "@/components/client";
import { ContactForm } from "@/components/contact-form";
import { getArticles, getServices } from "@/content/services";
import { getLegal, legalSlugs, type LegalSlug } from "@/content/legal";
import { businessEmail, businessPhone, siteUrl, whatsappNumber } from "@/lib/config";
import { meta } from "@/lib/seo";
import { getDict, localePath, type Locale } from "@/i18n";

/* ---------- About ---------- */
export function aboutMetadata(lang: Locale) {
  const t = getDict(lang).about;
  return meta(lang, t.metaTitle, t.metaDescription, "/tentang-kami");
}
export function AboutPage({ lang }: { lang: Locale }) {
  const t = getDict(lang).about;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb lang={lang} items={[{ label: t.breadcrumb }]} />
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>
            {t.titleA}
            <br />
            {t.titleB}
          </h1>
          <p>{t.intro}</p>
          <Trust lang={lang} />
        </div>
      </section>
      <section className="container page-body two-column">
        <article className="prose">
          <h2>{t.sectionA}</h2>
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <h2>{t.sectionB}</h2>
          <p>{t.p3}</p>
        </article>
        <aside className="info-panel">
          <h2>{t.principlesTitle}</h2>
          <ul>
            {t.principles.map((x, i) => (
              <li key={x}>
                0{i + 1} — {x}
              </li>
            ))}
          </ul>
          <p>{t.independence}</p>
        </aside>
      </section>
      <CTA lang={lang} />
    </>
  );
}

/* ---------- Services list ---------- */
export function servicesMetadata(lang: Locale) {
  const t = getDict(lang).servicesPage;
  return meta(lang, t.metaTitle, t.metaDescription, "/layanan");
}
export function ServicesPage({ lang }: { lang: Locale }) {
  const t = getDict(lang).servicesPage;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb lang={lang} items={[{ label: t.breadcrumb }]} />
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>
            {t.titleA}
            <br />
            {t.titleB}
          </h1>
          <p>{t.intro}</p>
        </div>
      </section>
      <section className="container page-body">
        <ServiceCards lang={lang} />
      </section>
      <CTA lang={lang} />
    </>
  );
}

/* ---------- Service detail ---------- */
export const serviceParams = () =>
  getServices("id").map((s) => ({ slug: s.slug }));
export function serviceMetadata(lang: Locale, slug: string) {
  const s = getServices(lang).find((s) => s.slug === slug);
  return s ? meta(lang, s.seoTitle, s.metaDescription, `/layanan/${slug}`) : {};
}
export function ServicePage({ lang, slug }: { lang: Locale; slug: string }) {
  const s = getServices(lang).find((s) => s.slug === slug);
  if (!s) notFound();
  const d = getDict(lang);
  const t = d.serviceDetail;
  const abs = (path: string) => siteUrl + localePath(lang, path) + (path === "/" ? "" : "/");
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: d.nav.home, item: abs("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: d.nav.services,
        item: abs("/layanan"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: s.name,
        item: abs("/layanan/" + slug),
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
            lang={lang}
            items={[
              { label: d.nav.services, href: "/layanan" },
              { label: s.short },
            ]}
          />
          <span className="eyebrow">{s.category}</span>
          <h1>{t.title(s.name)}</h1>
          <p>
            {s.summary} {t.introSuffix}
          </p>
          <div className="actions">
            <WhatsApp service={slug} label={t.consult(s.short)} />
            <Link
              className="button secondary"
              href={localePath(lang, `/kontak`) + `?layanan=${slug}`}
            >
              {t.formButton}
            </Link>
          </div>
          <Trust lang={lang} />
        </div>
      </section>
      <section className="container page-body service-detail">
        <div className="two-column">
          <article className="prose">
            <h2>{t.needsTitle}</h2>
            <p>{s.description}</p>
            <h2>{t.audienceTitle}</h2>
            <p>{s.audience}</p>
            <h2>{t.helpTitle}</h2>
            <p>{t.helpBody}</p>
          </article>
          <aside className="info-panel">
            <span className="eyebrow">{t.prepEyebrow}</span>
            <h2>{t.prepTitle}</h2>
            <ul>
              {s.preparation.map((x) => (
                <li key={x}>✓ {x}</li>
              ))}
            </ul>
            <p>{t.prepNote}</p>
          </aside>
        </div>
        <div className="prose">
          <h2>{t.stepsTitle}</h2>
        </div>
        <Workflow lang={lang} items={s.steps} />
        <div className="section">
          <h2 style={{ marginBottom: 25 }}>{t.faqTitle(s.short)}</h2>
          <FAQ lang={lang} items={s.faq} />
        </div>
        <p className="notice">{t.notice}</p>
      </section>
      <CTA lang={lang} service={slug} />
    </>
  );
}

/* ---------- Articles ---------- */
export function articlesMetadata(lang: Locale) {
  const t = getDict(lang).articlesPage;
  return meta(lang, t.metaTitle, t.metaDescription, "/artikel");
}
export function ArticlesPage({ lang }: { lang: Locale }) {
  const t = getDict(lang).articlesPage;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb lang={lang} items={[{ label: t.breadcrumb }]} />
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>
            {t.titleA}
            <br />
            {t.titleB}
          </h1>
          <p>{t.intro}</p>
        </div>
      </section>
      <section className="container page-body article-grid">
        {getArticles(lang).map((a) => (
          <Link
            href={localePath(lang, `/artikel/${a.slug}`)}
            key={a.slug}
            className="article-card"
          >
            <span className="eyebrow">{a.category}</span>
            <h2>{a.title}</h2>
            <p>{a.description}</p>
            <span className="text-link">{t.readMore}</span>
          </Link>
        ))}
      </section>
    </>
  );
}
export const articleParams = () =>
  getArticles("id").map((a) => ({ slug: a.slug }));
export function articleMetadata(lang: Locale, slug: string) {
  const a = getArticles(lang).find((a) => a.slug === slug);
  return a ? meta(lang, a.title, a.description, `/artikel/${slug}`) : {};
}
export function ArticlePage({ lang, slug }: { lang: Locale; slug: string }) {
  const a = getArticles(lang).find((a) => a.slug === slug);
  if (!a) notFound();
  const t = getDict(lang).articlesPage;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb
            lang={lang}
            items={[
              { label: t.breadcrumb, href: "/artikel" },
              { label: a.category },
            ]}
          />
          <span className="eyebrow">{a.category}</span>
          <h1>{a.title}</h1>
          <p>{a.description}</p>
        </div>
      </section>
      <article className="container prose page-body">
        {a.sections.map(([h, body]) => (
          <section key={h}>
            <h2>{h}</h2>
            <p>{body}</p>
          </section>
        ))}
        <p>{t.articleNote}</p>
      </article>
      <CTA lang={lang} />
    </>
  );
}

/* ---------- FAQ ---------- */
export function faqMetadata(lang: Locale) {
  const t = getDict(lang).faqPage;
  return meta(lang, t.metaTitle, t.metaDescription, "/faq");
}
export function FaqPage({ lang }: { lang: Locale }) {
  const t = getDict(lang).faqPage;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb lang={lang} items={[{ label: t.breadcrumb }]} />
          <h1>
            {t.titleA}
            <br />
            {t.titleB}
          </h1>
          <p>{t.intro}</p>
        </div>
      </section>
      <section className="container page-body prose">
        <FAQ lang={lang} />
      </section>
      <CTA lang={lang} />
    </>
  );
}

/* ---------- Contact ---------- */
export function contactMetadata(lang: Locale) {
  const t = getDict(lang).contactPage;
  return meta(lang, t.metaTitle, t.metaDescription, "/kontak");
}
export function ContactPage({ lang }: { lang: Locale }) {
  const t = getDict(lang).contactPage;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb lang={lang} items={[{ label: t.breadcrumb }]} />
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>
            {t.titleA}
            <br />
            {t.titleB}
          </h1>
          <p>{t.intro}</p>
        </div>
      </section>
      <section className="container page-body two-column">
        <ContactForm />
        <aside className="info-panel">
          <h2>{t.directTitle}</h2>
          <p>{t.directBody}</p>
          <div className="contact-channels">
            {whatsappNumber && <WhatsApp />}
            <a className="text-link" href={`mailto:${businessEmail}`}>
              <span className="contact-channel-label">{t.emailLabel}</span>
              {businessEmail}
            </a>
            <a
              className="text-link"
              href={`tel:${businessPhone.replace(/[^\d+]/g, "")}`}
            >
              <span className="contact-channel-label">{t.phoneLabel}</span>
              {businessPhone}
            </a>
          </div>
          <h2 style={{ marginTop: 35 }}>{t.topicsTitle}</h2>
          <ul>
            {t.topics.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p>{t.noCommitment}</p>
        </aside>
      </section>
    </>
  );
}

/* ---------- Legal ---------- */
export const legalParams = () => legalSlugs.map((legal) => ({ legal }));
const isLegal = (key: string): key is LegalSlug =>
  (legalSlugs as readonly string[]).includes(key);
export function legalMetadata(lang: Locale, key: string) {
  if (!isLegal(key)) return {};
  const p = getLegal(lang)[key];
  return meta(lang, p.title, p.intro, `/${key}`);
}
export function LegalPage({ lang, slug }: { lang: Locale; slug: string }) {
  if (!isLegal(slug)) notFound();
  const p = getLegal(lang)[slug];
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumb lang={lang} items={[{ label: p.title }]} />
          <h1>{p.title}</h1>
          <p>{p.intro}</p>
        </div>
      </section>
      <article className="container prose page-body">
        {p.sections.map(([h, body]) => (
          <section key={h}>
            <h2>{h}</h2>
            <p>{body}</p>
          </section>
        ))}
        <Link href={localePath(lang, "/kontak")}>
          {getDict(lang).legalPage.contactLink}
        </Link>
      </article>
    </>
  );
}
