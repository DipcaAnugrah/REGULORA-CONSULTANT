import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container page-body">
      <span className="eyebrow">404 · HALAMAN TIDAK DITEMUKAN</span>
      <h1>
        Mari kembali
        <br />
        ke langkah awal.
      </h1>
      <p style={{ marginTop: 20 }}>
        Halaman ini tidak tersedia. Temukan layanan yang Anda butuhkan dari
        beranda.
      </p>
      <Link className="button primary" style={{ marginTop: 25 }} href="/">
        Kembali ke beranda ↗
      </Link>
    </section>
  );
}
