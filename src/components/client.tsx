"use client";
import Link from "@/components/static-link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MessageCircle, Menu, X, Check, ChevronDown } from "lucide-react";
import { Flag } from "./flag";
import { getServices } from "@/content/services";
import {
  getDict,
  localeFromPath,
  localeLabel,
  localePath,
  locales,
  stripLocale,
  type Locale,
} from "@/i18n";
import { gtmId, whatsappUrl } from "@/lib/config";
import { track } from '@/lib/analytics';
export { track } from '@/lib/analytics';
/** Client components read the language from the URL (/en/…, /zh/…, else Indonesian). */
export function useLocale() {
  return localeFromPath(usePathname());
}
export function WhatsApp({
  service,
  label,
  className = "button primary",
}: {
  service?: string;
  label?: string;
  className?: string;
}) {
  const lang = useLocale();
  const t = getDict(lang).whatsapp;
  const s = getServices(lang).find((x) => x.slug === service);
  const message = s?.whatsappMessage || t.generalMessage;
  const href = whatsappUrl(message);
  return (
    <Link
      className={className}
      href={href || localePath(lang, "/kontak")}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onClick={(e) => {
        if (!href) return;
        const url = new URL(href);
        const query = new URLSearchParams(location.search);
        const campaign = ["utm_source", "utm_medium", "utm_campaign"]
          .map((k) => {
            const v = query.get(k);
            return v && /^[a-zA-Z0-9_.-]{1,100}$/.test(v) ? `${k}: ${v}` : "";
          })
          .filter(Boolean)
          .join(", ");
        url.searchParams.set(
          "text",
          `${message}\n${t.pageLine}: ${location.pathname}${campaign ? `\n${t.campaignLine}: ${campaign}` : ""}`,
        );
        e.currentTarget.href = url.toString();
        track("click_whatsapp", { service: service || "general" });
      }}
    >
      <MessageCircle size={18} />
      {label || (href ? t.button : t.fallback)}
      <ArrowUpRight size={17} />
    </Link>
  );
}
function LanguageLinks({ lang, base }: { lang: Locale; base: string }) {
  return locales.map((l) => (
    <Link
      key={l}
      className="lang-option"
      href={localePath(l, base)}
      hrefLang={l === "zh" ? "zh-CN" : l}
      lang={l === "zh" ? "zh-CN" : l}
      aria-current={l === lang ? "true" : undefined}
    >
      <Flag locale={l} />
      <span>{localeLabel[l].name}</span>
      {l === lang && <Check size={15} className="lang-check" aria-hidden="true" />}
    </Link>
  ));
}
/** Flag + language name. Header: dropdown; mobile menu: plain list. */
export function LanguageSwitcher({
  variant = "dropdown",
}: {
  variant?: "dropdown" | "list";
}) {
  const path = usePathname() || "/";
  const lang = localeFromPath(path);
  const base = stripLocale(path);
  const label = getDict(lang).nav.language;
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: Event) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !box.current?.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);
  if (variant === "list")
    return (
      <div className="lang-list" role="group" aria-label={label}>
        <LanguageLinks lang={lang} base={base} />
      </div>
    );
  return (
    <div className="lang-dropdown" ref={box}>
      <button
        type="button"
        className="lang-current"
        aria-label={`${label}: ${localeLabel[lang].name}`}
        aria-expanded={open}
        aria-controls="lang-menu"
        onClick={() => setOpen(!open)}
      >
        <Flag locale={lang} />
        <span>{localeLabel[lang].name}</span>
        <ChevronDown size={15} aria-hidden="true" className="lang-chevron" />
      </button>
      {open && (
        <div id="lang-menu" className="lang-menu" role="group" aria-label={label}>
          <LanguageLinks lang={lang} base={base} />
        </div>
      )}
    </div>
  );
}
export function Navigation() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const lang = localeFromPath(path);
  const t = getDict(lang).nav;
  const services = getServices(lang);
  const p = (u: string) => localePath(lang, u);
  return (
    <>
      <nav className="desktop-nav" aria-label={t.mainLabel}>
        <Link href={p("/")} aria-current={path === p("/") ? "page" : undefined}>
          {t.home}
        </Link>
        <Link href={p("/tentang-kami")}>{t.about}</Link>
        <div className="nav-dropdown">
          <Link href={p("/layanan")}>
            {t.services} <span>⌄</span>
          </Link>
          <div className="dropdown-panel">
            {services.map((s) => (
              <Link key={s.slug} href={p(`/layanan/${s.slug}`)}>
                {s.name}
              </Link>
            ))}
          </div>
        </div>
        <Link href={p("/artikel")}>{t.articles}</Link>
        <Link href={p("/kontak")}>{t.contact}</Link>
      </nav>
      <LanguageSwitcher />
      <Link className="button primary header-cta" href={p("/kontak")}>
        {t.consultNow} <ArrowUpRight size={16} />
      </Link>
      <button
        className="menu-toggle"
        aria-label={open ? t.close : t.open}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label={t.mobileLabel}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {[
            ["/", t.home],
            ["/tentang-kami", t.about],
            ["/layanan", t.allServices],
            ...services.map((s) => [`/layanan/${s.slug}`, s.name]),
            ["/artikel", t.articles],
            ["/kontak", t.consultNow],
          ].map(([url, label]) => (
            <Link href={p(url)} key={url} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <LanguageSwitcher variant="list" />
        </nav>
      )}
    </>
  );
}
export function Analytics() {
  const [consent, setConsent] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [gtmQueued, setGtmQueued] = useState(false);
  const path = usePathname();
  const t = getDict(localeFromPath(path)).cookie;
  const last = useRef("");
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const ads = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const id = gtmId || ga || ads;
  useEffect(() => {
    queueMicrotask(() =>
      setConsent(localStorage.getItem("regulora-consent") || "unset"),
    );
  }, []);
  useEffect(() => {
    // Consent Mode: GTM loads for every visitor who has not refused, with
    // storage denied until "Izinkan". Google then sees the tag and can model
    // conversions without cookies. An explicit "Tolak" keeps GTM off.
    // The consent default must be in the dataLayer before gtm.js runs.
    if (!gtmId || !consent || consent === "rejected" || window.reguloraGtm)
      return;
    const granted = consent === "accepted" ? "granted" : "denied";
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag("consent", "default", {
      analytics_storage: granted,
      ad_storage: granted,
      ad_user_data: granted,
      ad_personalization: "denied",
    });
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    window.reguloraGtm = true;
    queueMicrotask(() => setGtmQueued(true));
  }, [consent]);
  useEffect(() => {
    if (!loaded || !consent || consent === "rejected" || last.current === path)
      return;
    last.current = path;
    track("page_view", {
      page_location: location.origin + path,
      page_title: document.title,
    });
    const page = stripLocale(path);
    if (page.startsWith("/layanan/"))
      track("view_service", { service: page.split("/")[2] });
  }, [path, loaded, consent]);
  if (!id) return null;
  function choose(value: string) {
    localStorage.setItem("regulora-consent", value);
    setConsent(value);
    if (value === "accepted" && window.gtag) {
      // Re-accepting after a rejection in the same visit restores measurement.
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
      });
    }
    if (value === "rejected" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      last.current = "";
    }
  }
  return (
    <>
      {gtmId && gtmQueued && (
        <Script
          id="gtm"
          src={`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`}
          onReady={() => setLoaded(true)}
        />
      )}
      {!gtmId && consent === "accepted" && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id!)}`}
          onReady={() => {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function () {
              // Google's command queue consumes Arguments objects, not event arrays.
              // eslint-disable-next-line prefer-rest-params
              window.dataLayer.push(arguments);
            };
            window.gtag("consent", "default", {
              analytics_storage: "granted",
              ad_storage: "granted",
              ad_user_data: "denied",
              ad_personalization: "denied",
            });
            window.gtag("js", new Date());
            const config = {
              send_page_view: false,
              page_location: location.origin + location.pathname,
              page_referrer: "",
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
            };
            if (ga) window.gtag("config", ga, config);
            if (ads) window.gtag("config", ads, config);
            setLoaded(true);
          }}
        />
      )}
      {consent === "unset" ? (
        <aside className="cookie" aria-label={t.label}>
          <strong>{t.title}</strong>
          <p>{t.body}</p>
          <Link href={localePath(localeFromPath(path), "/kebijakan-privasi")}>
            {t.policyLink}
          </Link>
          <div className="actions">
            <button
              className="button primary"
              onClick={() => choose("accepted")}
            >
              {t.accept}
            </button>
            <button
              className="button secondary"
              onClick={() => choose("rejected")}
            >
              {t.reject}
            </button>
          </div>
        </aside>
      ) : (
        <button
          className="privacy-settings"
          onClick={() => setConsent("unset")}
        >
          {t.settings}
        </button>
      )}
    </>
  );
}
