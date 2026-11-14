# REGULORA CONSULTANT — situs statis untuk Hostinger Single

Website menghasilkan HTML, CSS, JavaScript, dan gambar di folder out. Hosting tidak memerlukan Node.js, database, Supabase, atau Upstash. Next.js/React hanya digunakan sebagai alat pembuat halaman di komputer pengembang.

## Membuat paket
1. Jalankan npm ci.
2. Salin .env.example menjadi .env.local.
3. Isi NEXT_PUBLIC_SITE_URL dengan domain HTTPS final, tanpa garis miring di akhir.
4. Untuk publikasi, set NEXT_PUBLIC_LAUNCH_READY=true. Jika false, situs meminta mesin pencari tidak mengindeks halaman.
5. Isi ID Google Analytics/Google Ads bila tersedia.
6. Jalankan npm run build. Hasilnya berada di out.

Perubahan variabel NEXT_PUBLIC memerlukan build ulang.

## Unggah ke Hostinger Single
Pilih website PHP/HTML. Unggah ISI folder out ke public_html melalui File Manager, termasuk .htaccess dan folder _next. index.html harus langsung berada di public_html. Jangan unggah source, node_modules, .next, atau .env.local. Aktifkan SSL dan pengalihan HTTPS dari dashboard hosting.

Semua halaman memiliki folder/index.html agar tautan langsung dan refresh bekerja. 404.html digunakan sebagai halaman tidak ditemukan melalui .htaccess.

## Formulir dan pengukuran
Formulir memvalidasi isian lalu membuka WhatsApp dengan pesan terisi. Pengunjung masih harus menekan Kirim di WhatsApp. Tidak ada penyimpanan lead atau notifikasi email dari server. Klik WhatsApp dicatat sebagai click_whatsapp setelah persetujuan analitik; ini bukan bukti pesan terkirim. Untuk Google Ads, buat/import konversi klik WhatsApp pada akun yang benar dan verifikasi tag sebelum beriklan.

## Pengembangan
npm run dev
npm run typecheck
npm run lint

npm start (server Next.js) tidak digunakan untuk versi statis. Folder supabase dan laporan peluncuran lama adalah arsip implementasi sebelumnya dan tidak perlu diunggah.
