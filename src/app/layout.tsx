import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header, Footer } from "@/components/ui";
import { Analytics, WhatsApp } from "@/components/client";
import { siteUrl, launchReady, whatsappNumber } from "@/lib/config";
import "./globals.css";
const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "REGULORA CONSULTANT | Pendampingan Perizinan",
    template: "%s | REGULORA CONSULTANT",
  },
  description:
    "Konsultasi dan pendampingan perizinan alat kesehatan, PKRT, pangan, dan kosmetik.",
  robots: { index: launchReady, follow: launchReady },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={font.variable}>
        <a className="skip-link" href="#main">
          Lewati ke konten
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {whatsappNumber && (
          <div className="floating-whatsapp">
            <WhatsApp className="button green" label="Chat WhatsApp" />
          </div>
        )}
        <Analytics />
        {process.env.NODE_ENV === "development" && !whatsappNumber && (
          <div className="dev-notice">
            Development: nomor WhatsApp belum dikonfigurasi. CTA diarahkan ke
            kontak.
          </div>
        )}
      </body>
    </html>
  );
}
