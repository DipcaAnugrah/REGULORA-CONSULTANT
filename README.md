# REGULORA CONSULTANT

Website Next.js App Router, TypeScript, Tailwind CSS, Plus Jakarta Sans, Lucide, React Hook Form, dan Zod. Implementasi lokal; belum dipublikasikan dan belum siap menerima lead sampai konfigurasi produksi diuji.

## Menjalankan

Node.js 22.13+ atau 24 LTS direkomendasikan. Paket dikunci pada `package-lock.json`.

```powershell
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Buka URL yang dicetak terminal. Isi `NEXT_PUBLIC_SITE_URL` dengan origin yang sama persis dengan URL browser, termasuk port. Default `http://localhost:3000`; jika menggunakan `127.0.0.1`, ubah variabel tersebut. Endpoint menolak Origin yang berbeda.

```powershell
npm run lint
npm run typecheck
npm test
npm run build
npm start
# Di terminal terpisah, memerlukan Chrome terpasang:
npm run test:e2e
```

Tes browser default memeriksa konfigurasi kosong, 17 route, tautan, FAQ, menu, metadata, accessibility, dan viewport 360/390/768/1280/1440. Jangan jalankan suite konfigurasi kosong terhadap deployment aktif. Gambar QA dan laporan JSON berada di `test-results/`.

## Struktur

- `src/app`: route, metadata, sitemap/robots, OG image, API lead.
- `src/components`: UI bersama, navbar, tracking/consent, formulir.
- `src/content/services.ts`: keenam layanan dan artikel; tidak ada CMS kompleks.
- `src/content/legal.ts`: kebijakan sesuai perilaku implementasi.
- `src/lib`: konfigurasi, SEO, normalisasi nomor dan validasi bersama.
- `public/images`: salinan foto asli tanpa perubahan wajah.
- `supabase/schema.sql`: tabel lead dan pembatasan akses.
- `tests`: unit dan browser QA.
- `LAUNCH-REPORT.md`: status implementasi, pengujian, dan blocker.

## WhatsApp dan identitas bisnis

Isi nomor asli pada `NEXT_PUBLIC_WHATSAPP_NUMBER`, misalnya format internasional tanpa plus. Nomor Indonesia dengan awalan 0 dinormalisasi ke 62; nomor tidak valid tidak menghasilkan tautan. Jangan isi nomor contoh sebagai kontak sungguhan. Tombol diarahkan ke kontak jika kosong. Floating CTA hanya muncul jika nomor valid.

Isi `NEXT_PUBLIC_BUSINESS_EMAIL` dan `NEXT_PUBLIC_LEGAL_IDENTITY` hanya dengan data yang telah diverifikasi. Identitas legal bisa menyebut penyelenggara usaha perseorangan sesuai dokumen; jangan mengisi klaim PT. Komponen `Logo` di `src/components/ui.tsx` menjadi titik penggantian logo final. Konfirmasi izin publikasi kedua foto kepada pemiliknya sebelum launch.

## Penyimpanan lead — wajib sebelum launch

1. Siapkan proyek Supabase milik bisnis dan jalankan `supabase/schema.sql` di SQL editor.
2. Isi `SUPABASE_URL` dan `SUPABASE_SERVICE_ROLE_KEY` di secret hosting/server, bukan variabel `NEXT_PUBLIC_*`.
3. Siapkan Upstash Redis dan isi `UPSTASH_REDIS_REST_URL` serta `UPSTASH_REDIS_REST_TOKEN`.
4. Isi `TRUSTED_IP_HEADER` hanya jika reverse proxy menimpa header tersebut dengan alamat pengunjung yang terpercaya. Tanpa ini, limit 5 permintaan / 10 menit dibagi semua pengunjung. Untuk Vercel, verifikasi kontrak header platform sebelum memilihnya. Jangan percaya header yang bebas dikirim pengguna pada Node server yang terbuka langsung.
5. Kirim data pengujian berlabel jelas melalui UI, cek satu baris tersimpan di Supabase, lalu hapus baris pengujian. Uji timeout/retry, penolakan Origin, spam, dan rate limit di staging.
6. Ulangi request dengan UUID sama: primary key mencegah baris ganda. UI mempertahankan input setelah respons sukses dan tidak mengirim lagi. Jangan mereset UUID pada retry jaringan yang hasilnya belum diketahui.
7. Batasi anggota Supabase, aktifkan pengamanan akun, tentukan masa retensi dan petugas tindak lanjut. Perbarui kebijakan privasi sesuai praktik yang disetujui.

Tidak ada penyimpanan ke file lokal atau fallback palsu. Kehadiran env mengaktifkan form, tetapi bukan bukti koneksi sehat. Respons sukses hanya setelah insert berhasil; kegagalan backend tidak dilog bersama data pribadi. Lead hanya dapat diakses server memakai service-role; tidak ada endpoint publik untuk membacanya. Status `new`, `qualified`, `closed`, `archived` diubah manual oleh pengelola yang berwenang. Klik WhatsApp bukan lead terverifikasi dan bukan transaksi.

## Analytics dan Ads

- Isi `NEXT_PUBLIC_GA_ID` (GA4), `NEXT_PUBLIC_GOOGLE_ADS_ID` dan `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION` (destination lengkap dari akun Ads). GTM tidak digunakan agar tidak menggandakan tag.
- Script Google dimuat hanya setelah opt-in. Pengguna dapat menolak atau mengubah pilihan; pilihan disimpan di localStorage. Consent analytics/ad storage digunakan untuk pengukuran, dengan ad personalization/user data denied.
- Event: `page_view`, `view_service`, `contact_form_start`, `click_whatsapp`, `generate_lead`. Event `conversion` hanya setelah insert lead baru berhasil, memakai UUID sebagai transaction_id; respons duplicate tidak memicu lead/conversion baru.
- Matikan Enhanced Measurement yang mengirim pageview via history change dan form interactions di GA4 untuk menghindari event otomatis ganda. Jangan mengaktifkan user-provided data atau tag tambahan yang membaca field formulir.
- Page URL yang dikirim manual tidak membawa query/hash. Nama, email, telepon dan deskripsi tidak dikirim ke analytics. Jangan meletakkan PII di URL/kode UTM. Referrer dikosongkan pada konfigurasi tag.
- Uji penolakan tanpa request Google, penerimaan, perubahan rute, dan pencabutan. Verifikasi GA DebugView/Tag Assistant dan Ads pada akun sesungguhnya. Belum teruji pada akun bisnis karena ID tidak diberikan.

## Konten dan SEO

Setiap layanan memiliki `needsVerification: true`. `requirements` sengaja kosong: poin yang tampil adalah bahan konsultasi, bukan syarat resmi. Pengelola harus memverifikasi ketentuan terkini dan mengisi persyaratan beserta sumber/tanggal review sebelum menandai false. Artikel awal bersifat persiapan umum, bukan nasihat legal teknis. Referensi awal untuk review:

- Next.js: https://nextjs.org/docs/app/getting-started/installation
- BPOM pangan: https://pmpupo.pom.go.id/layanan
- BPOM kosmetik: https://registrasiotskk.pom.go.id/layanan
- Klasifikasi pangan: https://intelijen.pom.go.id/hot-issue/mengenal-izin-edar-pangan-apa-bedanya-spp-irt-dan-bpom-ri-md-ml

Sumber ini tidak menggantikan verifikasi aktual tiap produk dan persyaratan saat pengajuan. Layanan Kemenkes masih perlu review pengelola menggunakan sumber resmi terbaru.

Indexing default nonaktif (`noindex`, robots disallow, sitemap kosong). Setelah semua blocker selesai, isi domain HTTPS nyata dan `NEXT_PUBLIC_LAUNCH_READY=true`, lalu build ulang. Metadata, canonical, OG/Twitter, breadcrumb JSON-LD tersedia; tidak ada review atau rating buatan.

## Deployment

Jangan melakukan deployment publik tanpa persetujuan pemilik proyek. Setelah disetujui, gunakan hosting yang mendukung Node/Next.js (misalnya Vercel) atau server Node di belakang HTTPS reverse proxy. Ini bukan static export; API membutuhkan runtime Node.

1. Commit source dan lockfile ke repository privat. `.env.local` tidak boleh masuk Git.
2. Import repository, pilih Next.js, Node 24, install `npm ci`, build `npm run build`.
3. Set seluruh env server/public sebelum build. Variabel `NEXT_PUBLIC_*` dibekukan saat build: perubahan memerlukan rebuild.
4. Untuk VPS gunakan process manager dan reverse proxy ke `127.0.0.1:3000`. Script start sengaja bind loopback. Platform container yang mensyaratkan `0.0.0.0` perlu start command `next start --hostname 0.0.0.0` dan port sesuai platform.
5. Jalankan staging QA, uji persistence sebenarnya dan analytics. Pasang domain/HTTPS, verifikasi robots dan sitemap setelah membuka indexing.
6. Siapkan pemantauan uptime, backup database, pemilik akun, alur tindak lanjut lead, serta kebijakan retensi. Tidak ada notifikasi email otomatis atau dashboard admin pada versi ini.

## Catatan keamanan

Server melakukan validasi Zod, batas body 16 KiB, honeypot, origin check, deduplikasi UUID dan distributed rate limiting. React meng-escape teks dan query database menggunakan SDK terstruktur. Header keamanan diset. Endpoint gagal tertutup jika storage/rate-limit tidak tersedia. Rate limit dasar tidak menggantikan proteksi bot lanjutan jika terjadi serangan. Override minimatch 11.0.1 dipakai untuk menutup advisory pada dependency development typescript-eslint; lint dan build harus tetap diuji saat pembaruan dependency.
