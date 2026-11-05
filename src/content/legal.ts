export const legal = {
  "kebijakan-privasi": {
    title: "Kebijakan Privasi",
    intro:
      "Bagaimana data konsultasi dan preferensi privasi diproses di situs ini.",
    sections: [
      [
        "Data yang Anda berikan",
        "Formulir meminta nama, nomor WhatsApp, email opsional, layanan, deskripsi kebutuhan, dan persetujuan privasi. Data digunakan untuk menanggapi permintaan konsultasi. Jangan memasukkan nomor identitas, data kesehatan pribadi, atau dokumen rahasia ke formulir.",
      ],
      [
        "Penyimpanan dan keamanan",
        "Jika formulir diaktifkan, data dikirim melalui backend ke database Supabase dengan akses administratif terbatas. Sistem pembatasan permintaan menggunakan Upstash dan pengenal jaringan yang di-hash; isi konsultasi tidak dikirim ke layanan ini. Formulir tidak diaktifkan sebelum koneksi penyimpanan tersedia.",
      ],
      [
        "Analitik dan pengukuran iklan",
        "Google Analytics atau Google Ads hanya dimuat ketika dikonfigurasi dan Anda memilih Izinkan. Preferensi disimpan di browser. Peristiwa yang diukur meliputi kunjungan halaman, pembukaan layanan, awal pengisian formulir, klik WhatsApp, dan lead yang berhasil disimpan. Nama, kontak, isi konsultasi, dan parameter URL tidak dikirim sebagai parameter event analitik. Penyedia tracking dapat memproses informasi perangkat dan jaringan sesuai kebijakannya.",
      ],
      [
        "WhatsApp dan pihak ketiga",
        "Tautan WhatsApp membuka layanan pihak ketiga. Pesan dapat menyertakan halaman asal dan kode kampanye yang valid. Informasi yang Anda kirim di WhatsApp diproses sesuai kebijakan layanan tersebut.",
      ],
      [
        "Pilihan dan permintaan Anda",
        "Anda dapat menolak tracking atau mengubah pilihan melalui tombol Preferensi cookie ketika tracking tersedia. Penolakan tidak menghalangi penggunaan formulir. Untuk permintaan akses, koreksi, atau penghapusan data konsultasi, gunakan kanal pada halaman Kontak. Data disimpan selama diperlukan untuk tindak lanjut dan kewajiban yang berlaku; pengelola perlu meninjau dan menghapus data yang tidak lagi diperlukan.",
      ],
    ],
  },
  "syarat-ketentuan": {
    title: "Syarat & Ketentuan",
    intro: "Ketentuan dasar penggunaan situs dan permintaan konsultasi.",
    sections: [
      [
        "Informasi dan konsultasi",
        "Konten situs memberikan gambaran umum layanan. Pengiriman formulir merupakan permintaan untuk dihubungi, bukan perjanjian layanan atau pembayaran.",
      ],
      [
        "Kesepakatan layanan",
        "Pekerjaan dimulai berdasarkan ruang lingkup, biaya, dan pembagian tanggung jawab yang disepakati terpisah. Pengguna bertanggung jawab atas kebenaran serta keabsahan dokumen yang diberikan.",
      ],
      [
        "Evaluasi dan hasil",
        "Penerbitan izin dan proses evaluasi berada di bawah kewenangan instansi terkait. Tidak ada jaminan izin diterbitkan, durasi tertentu, atau hasil komersial dari penggunaan layanan.",
      ],
      [
        "Penggunaan situs",
        "Jangan menggunakan formulir untuk spam, memberikan data orang lain tanpa kewenangan, atau mengganggu keamanan situs. Pertanyaan terkait layanan dapat disampaikan melalui halaman Kontak.",
      ],
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    intro: "Batas peran REGULORA CONSULTANT dan informasi di situs ini.",
    sections: [
      [
        "Penyedia jasa independen",
        "REGULORA CONSULTANT adalah penyedia jasa konsultasi dan pendampingan, bukan lembaga penerbit izin. Tidak ada klaim afiliasi resmi dengan BPOM, Kementerian Kesehatan, atau instansi pemerintah lainnya.",
      ],
      [
        "Informasi umum",
        "Informasi layanan dan artikel bukan pengganti penilaian terhadap kegiatan atau produk tertentu. Ketentuan dapat berubah; jalur dan daftar dokumen perlu diperiksa terhadap sumber resmi saat pengajuan.",
      ],
      [
        "Tanpa jaminan penerbitan",
        "Hasil pengajuan ditentukan oleh instansi berdasarkan evaluasi. Biaya serta perkiraan tahapan hanya dapat dibahas setelah kebutuhan dan kesiapan dokumen ditinjau.",
      ],
    ],
  },
};
