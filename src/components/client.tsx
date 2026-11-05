"use client";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MessageCircle, Menu, X } from "lucide-react";
import { services } from "@/content/services";
import { whatsappUrl } from "@/lib/config";
import { track } from '@/lib/analytics';
export { track } from '@/lib/analytics';
export function WhatsApp({
  service,
  label,
  className = "button primary",
}: {
  service?: string;
  label?: string;
  className?: string;
}) {
  const s = services.find((x) => x.slug === service);
  const message =
    s?.whatsappMessage ||
    "Halo REGULORA CONSULTANT, saya ingin berkonsultasi mengenai perizinan produk dan usaha.";
  const href = whatsappUrl(message);
  return (
    <Link
      className={className}
      href={href || "/kontak"}
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
          `${message}\nHalaman: ${location.pathname}${campaign ? `\nKampanye: ${campaign}` : ""}`,
        );
        e.currentTarget.href = url.toString();
        track("click_whatsapp", { service: service || "general" });
      }}
    >
      <MessageCircle size={18} />
      {label || (href ? "Konsultasi via WhatsApp" : "Konsultasi sekarang")}
      <ArrowUpRight size={17} />
    </Link>
  );
}
export function Navigation() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <>
      <nav className="desktop-nav" aria-label="Navigasi utama">
        <Link href="/" aria-current={path === "/" ? "page" : undefined}>
          Beranda
        </Link>
        <Link href="/tentang-kami">Tentang Kami</Link>
        <div className="nav-dropdown">
          <Link href="/layanan">
            Layanan <span>⌄</span>
          </Link>
          <div className="dropdown-panel">
            {services.map((s) => (
              <Link key={s.slug} href={`/layanan/${s.slug}`}>
                {s.name}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/artikel">Artikel</Link>
        <Link href="/kontak">Kontak</Link>
      </nav>
      <Link className="button primary header-cta" href="/kontak">
        Konsultasi Sekarang <ArrowUpRight size={16} />
      </Link>
      <button
        className="menu-toggle"
        aria-label={open ? "Tutup navigasi" : "Buka navigasi"}
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
          aria-label="Navigasi seluler"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {[
            ["/", "Beranda"],
            ["/tentang-kami", "Tentang Kami"],
            ["/layanan", "Semua Layanan"],
            ...services.map((s) => [`/layanan/${s.slug}`, s.name]),
            ["/artikel", "Artikel"],
            ["/kontak", "Konsultasi Sekarang"],
          ].map(([url, label]) => (
            <Link href={url} key={url} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
export function Analytics() {
  const [consent, setConsent] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const path = usePathname();
  const last = useRef("");
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const ads = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const id = ga || ads;
  useEffect(() => {
    queueMicrotask(() =>
      setConsent(localStorage.getItem("regulora-consent") || "unset"),
    );
  }, []);
  useEffect(() => {
    if (!loaded || consent !== "accepted" || last.current === path) return;
    last.current = path;
    track("page_view", {
      page_location: location.origin + path,
      page_title: document.title,
    });
    if (path.startsWith("/layanan/"))
      track("view_service", { service: path.split("/")[2] });
  }, [path, loaded, consent]);
  if (!id) return null;
  function choose(value: string) {
    localStorage.setItem("regulora-consent", value);
    setConsent(value);
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
      {consent === "accepted" && (
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
        <aside className="cookie" aria-label="Preferensi analitik">
          <strong>Pilihan privasi Anda</strong>
          <p>
            Izinkan analitik dan pengukuran iklan untuk membantu kami memahami
            penggunaan situs. Formulir tetap dapat digunakan tanpa persetujuan.
          </p>
          <Link href="/kebijakan-privasi">Baca kebijakan privasi</Link>
          <div className="actions">
            <button
              className="button primary"
              onClick={() => choose("accepted")}
            >
              Izinkan
            </button>
            <button
              className="button secondary"
              onClick={() => choose("rejected")}
            >
              Tolak
            </button>
          </div>
        </aside>
      ) : (
        <button
          className="privacy-settings"
          onClick={() => setConsent("unset")}
        >
          Preferensi cookie
        </button>
      )}
    </>
  );
}
