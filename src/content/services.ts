export const steps = [
  "Konsultasi awal",
  "Identifikasi kebutuhan",
  "Pemeriksaan dokumen & penawaran",
  "Pendampingan proses perizinan",
  "Pembaruan status & penyelesaian",
];
export const generalFaq = [
  [
    "Apakah saya bisa berkonsultasi sebelum memilih layanan?",
    "Bisa. Ceritakan jenis produk, kegiatan usaha, dan kendala Anda. Kami akan membantu memetakan kebutuhan sebelum Anda menentukan layanan.",
  ],
  [
    "Apakah penerbitan izin dijamin?",
    "Tidak. REGULORA CONSULTANT mendampingi proses; keputusan penerbitan izin merupakan kewenangan instansi terkait sesuai hasil evaluasi.",
  ],
  [
    "Berapa biaya dan waktu pendampingan?",
    "Ruang lingkup, biaya, dan perkiraan tahapan dibahas setelah kebutuhan serta kesiapan dokumen ditinjau. Waktu evaluasi instansi dapat berbeda untuk setiap pengajuan.",
  ],
  [
    "Apakah layanan dapat dilakukan secara online?",
    "Konsultasi dan peninjauan awal dokumen dapat dibahas secara daring. Kebutuhan kunjungan atau pemeriksaan lain disesuaikan dengan jenis layanan.",
  ],
  [
    "Bagaimana memulai konsultasi?",
    "Pilih layanan yang sesuai, kemudian hubungi kami melalui kanal kontak yang tersedia. Siapkan gambaran produk dan usaha Anda; tidak perlu mengirim dokumen sensitif pada pesan pertama.",
  ],
];
const entries = [
  {
    slug: "pkrt",
    name: "Perizinan PKRT",
    short: "PKRT",
    category: "Alat kesehatan & PKRT",
    summary: "Pendampingan perizinan produk Perbekalan Kesehatan Rumah Tangga.",
    audience:
      "Produsen, pemilik brand, dan importir produk kebutuhan kesehatan rumah tangga.",
    focus:
      "Identifikasi fungsi, klaim penggunaan, dan kategori produk menjadi titik awal peninjauan PKRT.",
    topics: [
      "Fungsi dan klaim produk",
      "Komposisi dan informasi produsen",
      "Rancangan label dan kemasan",
    ],
    question: "Apakah semua produk rumah tangga termasuk PKRT?",
    answer:
      "Kategorisasi perlu ditinjau dari fungsi, klaim, dan karakteristik produk. Nama dagang saja tidak cukup untuk menentukan jalur perizinannya.",
  },
  {
    slug: "idak-ipak",
    name: "IDAK / IPAK",
    short: "IDAK / IPAK",
    category: "Alat kesehatan & PKRT",
    summary:
      "Pendampingan kebutuhan perizinan kegiatan distribusi alat kesehatan.",
    audience:
      "Pelaku usaha yang merencanakan atau menjalankan distribusi alat kesehatan.",
    focus:
      "Peninjauan berfokus pada kegiatan distribusi, kesiapan sarana, dan organisasi usaha. Istilah izin serta jalur terkini diperiksa sesuai kegiatan Anda.",
    topics: [
      "Kegiatan dan cakupan distribusi",
      "Kesiapan sarana usaha",
      "Organisasi dan penanggung jawab",
    ],
    question: "Apakah izin distribusi sama dengan izin edar produk?",
    answer:
      "Kebutuhan perizinan kegiatan distribusi dan produk perlu ditinjau terpisah. Konsultasi membantu memetakan keduanya sesuai kegiatan usaha.",
  },
  {
    slug: "izin-edar-alat-kesehatan",
    name: "Izin Edar Alat Kesehatan",
    short: "Izin Edar Alkes",
    category: "Alat kesehatan & PKRT",
    summary:
      "Pendampingan penyiapan pengajuan izin edar produk alat kesehatan.",
    audience:
      "Produsen, distributor, serta importir yang memiliki kebutuhan perizinan produk alat kesehatan.",
    focus:
      "Peninjauan mencakup tujuan penggunaan, karakteristik produk, serta asal produksi untuk memetakan kebutuhan pengajuan.",
    topics: [
      "Tujuan penggunaan alat",
      "Spesifikasi dan asal produksi",
      "Dokumen produk yang sudah dimiliki",
    ],
    question: "Apakah setiap alat memiliki kebutuhan dokumen yang sama?",
    answer:
      "Tidak. Karakteristik, tujuan penggunaan, dan kategori produk dapat memengaruhi kebutuhan dokumen. Daftar final ditetapkan setelah peninjauan.",
  },
  {
    slug: "spp-irt",
    name: "SPP-IRT",
    short: "SPP-IRT",
    category: "Pangan & kosmetik",
    summary:
      "Pendampingan Pemenuhan Komitmen Produksi Pangan Olahan Industri yang merupakan perizinan bagi produk pangan tertentu produksi skala usaha industri rumah tangga",
    audience:
      "Pelaku usaha pangan rumah tangga yang ingin meninjau kesesuaian jalur perizinan produknya.",
    focus:
      "Kesesuaian jenis pangan dan proses produksi perlu ditelaah terlebih dahulu. SPP-IRT tidak berlaku untuk semua produk pangan.",
    topics: [
      "Jenis dan proses pengolahan pangan",
      "Lokasi serta skala produksi",
      "Kemasan dan cara penyimpanan",
    ],
    question: "Apakah semua pangan bisa menggunakan SPP-IRT?",
    answer:
      "Tidak. Jenis pangan dan proses produksi memengaruhi jalur yang sesuai. Produk Anda perlu ditinjau sebelum memilih SPP-IRT atau jalur lainnya.",
  },
  {
    slug: "notifikasi-kosmetik",
    name: "Notifikasi Kosmetik BPOM",
    short: "Notifikasi Kosmetik",
    category: "Pangan & kosmetik",
    summary:
      "Pendampingan persetujuan notifikasi yang harus dipenuhi sebelum produk kosmetik diedarkan di Indonesia.",
    audience:
      "Pemilik brand kosmetik, pelaku usaha kontrak produksi, produsen, dan importir kosmetik.",
    focus:
      "Peninjauan memperhatikan peran pemohon, model produksi atau impor, informasi formula, dan klaim produk.",
    topics: [
      "Model produksi atau impor",
      "Informasi formula dan produsen",
      "Klaim serta rancangan label",
    ],
    question: "Apakah brand dengan produksi maklon dapat berkonsultasi?",
    answer:
      "Bisa. Jelaskan hubungan dengan produsen dan dokumen yang sudah tersedia agar kebutuhan pemohon serta produk dapat dipetakan.",
  },
  {
    slug: "bpom-md-ml",
    name: "BPOM MD / ML",
    short: "BPOM MD / ML",
    category: "Pangan & kosmetik",
    summary:
      "Pendampingan registrasi pangan olahan produksi dalam negeri maupun impor.",
    audience:
      "Produsen pangan olahan, pemilik brand, dan importir produk pangan.",
    focus:
      "Asal produksi, jenis pangan, proses pengolahan, serta informasi label menjadi fokus awal peninjauan.",
    topics: [
      "Asal dan jenis produk pangan",
      "Komposisi serta proses produksi",
      "Informasi kemasan dan label",
    ],
    question: "Apa perbedaan MD dan ML?",
    answer:
      "MD berkaitan dengan pangan olahan produksi dalam negeri, sedangkan ML berkaitan dengan pangan olahan impor. Kesesuaian jalur dan persyaratan tetap perlu ditinjau untuk produk Anda.",
  },
];
export const services = entries.map((s) => ({
  ...s,
  description: `${s.summary} ${s.focus}`,
  requirements: [] as string[],
  preparation: s.topics,
  steps: [
    `Pemetaan ${s.short}`,
    `Peninjauan ${s.topics[0].toLowerCase()}`,
    "Penetapan ruang lingkup dan daftar dokumen",
    "Pendampingan pengajuan dan tindak lanjut",
    "Pembaruan hasil sesuai evaluasi instansi",
  ],
  faq: [[s.question, s.answer], generalFaq[1], generalFaq[2]],
  seoTitle: `Jasa Pengurusan ${s.name}`,
  metaDescription: s.summary,
  whatsappMessage: `Halo REGULORA CONSULTANT, saya ingin berkonsultasi mengenai ${s.name}.`,
  needsVerification: true,
}));
export const articles = [
  {
    slug: "persiapan-konsultasi-perizinan",
    title: "Sebelum konsultasi, siapkan 5 informasi tentang usaha Anda",
    category: "Panduan usaha",
    description:
      "Percakapan awal yang lebih terarah dimulai dari informasi yang sederhana.",
    sections: [
      [
        "Mulai dari gambaran usaha",
        "Jelaskan kegiatan utama, lokasi usaha, dan peran Anda sebagai produsen, pemilik brand, distributor, atau importir. Informasi ini membantu menentukan fokus pembicaraan.",
      ],
      [
        "Kenali produk Anda",
        "Catat nama produk, fungsi, asal produksi, dan cara pemasarannya. Jika ada beberapa varian, jelaskan perbedaan utamanya.",
      ],
      [
        "Petakan dokumen yang tersedia",
        "Buat daftar dokumen yang sudah dimiliki beserta statusnya. Pada tahap awal cukup sampaikan jenis dokumen; hindari mengirim identitas pribadi atau berkas rahasia tanpa kanal yang disepakati.",
      ],
      [
        "Ceritakan kendala dan rencana",
        "Sampaikan tahapan yang sudah dilakukan, pertanyaan yang belum terjawab, dan rencana peluncuran. Target internal tidak menjadi jaminan waktu penerbitan izin.",
      ],
      [
        "Sepakati langkah berikutnya",
        "Minta penjelasan ruang lingkup pendampingan, pembagian tanggung jawab, dan penawaran tertulis sebelum memulai pekerjaan.",
      ],
    ],
  },
  {
    slug: "memahami-ruang-lingkup-pendampingan",
    title: "Apa yang perlu dibahas dalam pendampingan perizinan?",
    category: "Catatan Regulora",
    description:
      "Kenali ruang lingkup, tanggung jawab, dan komunikasi sebelum memulai.",
    sections: [
      [
        "Ruang lingkup yang jelas",
        "Pendampingan dapat mencakup pemetaan kebutuhan, peninjauan kelengkapan, dan bantuan tindak lanjut. Layanan yang disepakati perlu dituangkan dalam penawaran.",
      ],
      [
        "Dokumen tetap menjadi tanggung jawab pemohon",
        "Kebenaran dan keabsahan informasi berasal dari pemilik usaha. Konsultan membantu meninjau kesiapan berdasarkan informasi yang diberikan.",
      ],
      [
        "Pembaruan proses",
        "Sepakati kanal komunikasi dan cara penyampaian status. Permintaan tambahan dari instansi dapat memerlukan dokumen atau tindakan dari pemohon.",
      ],
      [
        "Keputusan instansi",
        "Pendampingan tidak menjamin izin diterbitkan. Hasil evaluasi tetap menjadi kewenangan instansi terkait.",
      ],
    ],
  },
];
