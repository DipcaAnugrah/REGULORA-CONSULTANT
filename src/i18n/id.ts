// Indonesian source text for the whole site. en.ts and zh.ts must match this
// shape exactly (enforced by the `Dict` type), so a missing translation fails
// the typecheck instead of shipping a blank.
const id = {
  site: {
    title: "REGULORA CONSULTANT | Pendampingan Perizinan",
    description:
      "Konsultasi dan pendampingan perizinan alat kesehatan, PKRT, pangan, dan kosmetik.",
    ogAlt: "REGULORA CONSULTANT — Pendampingan perizinan",
    skipLink: "Lewati ke konten",
    devNotice:
      "Development: nomor WhatsApp belum dikonfigurasi. CTA diarahkan ke kontak.",
  },
  nav: {
    home: "Beranda",
    about: "Tentang Kami",
    services: "Layanan",
    allServices: "Semua Layanan",
    articles: "Artikel",
    contact: "Kontak",
    consultNow: "Konsultasi Sekarang",
    mainLabel: "Navigasi utama",
    mobileLabel: "Navigasi seluler",
    open: "Buka navigasi",
    close: "Tutup navigasi",
    logoLabel: "Regulora Consultant — Beranda",
    language: "Pilih bahasa",
  },
  whatsapp: {
    generalMessage:
      "Halo REGULORA CONSULTANT, saya ingin berkonsultasi mengenai perizinan produk dan usaha.",
    serviceMessage: (service: string) =>
      `Halo REGULORA CONSULTANT, saya ingin berkonsultasi mengenai ${service}.`,
    button: "Konsultasi via WhatsApp",
    fallback: "Konsultasi sekarang",
    floating: "Chat WhatsApp",
    pageLine: "Halaman",
    campaignLine: "Kampanye",
  },
  cookie: {
    label: "Preferensi analitik",
    title: "Pilihan privasi Anda",
    body: "Izinkan analitik dan pengukuran iklan untuk membantu kami memahami penggunaan situs. Formulir tetap dapat digunakan tanpa persetujuan.",
    policyLink: "Baca kebijakan privasi",
    accept: "Izinkan",
    reject: "Tolak",
    settings: "Preferensi cookie",
  },
  footer: {
    taglineA: "Pendampingan yang jelas.",
    taglineB: "Langkah usaha yang lebih terarah.",
    note: "Konsultasi & pendampingan perizinan",
    servicesTitle: "Layanan kami",
    aboutTitle: "Kenali Regulora",
    aboutLink: "Tentang kami",
    articlesLink: "Artikel & wawasan",
    faqLink: "Pertanyaan umum",
    contactLink: "Hubungi kami",
    talkTitle: "Mari mulai percakapan",
    talkBody: "Ceritakan kebutuhan produk dan usaha Anda.",
    talkButton: "Hubungi kami",
    disclaimer:
      "REGULORA CONSULTANT merupakan penyedia jasa pendampingan independen, bukan penerbit izin dan tidak berafiliasi resmi dengan instansi pemerintah.",
    privacy: "Kebijakan Privasi",
    terms: "Syarat & Ketentuan",
    disclaimerLink: "Disclaimer",
  },
  common: {
    exploreService: "Jelajahi layanan",
    trustA: "Pendampingan terarah",
    trustB: "Komunikasi transparan",
    breadcrumbLabel: "Breadcrumb",
    ctaImageAlt: "Representasi visual Regulora dengan pose menyambut",
    ctaEyebrow: "LANGKAH PERTAMA DIMULAI DI SINI",
    ctaTitle: "Masih bingung menentukan perizinan yang dibutuhkan?",
    ctaBody:
      "Konsultasikan kebutuhan usaha dan produk Anda bersama REGULORA CONSULTANT.",
    ctaButton: "Hubungi konsultan kami",
  },
  home: {
    metaTitle: "Konsultasi Perizinan Produk & Usaha",
    metaDescription:
      "Pendampingan perizinan alat kesehatan, PKRT, pangan, dan kosmetik yang jelas dan terarah.",
    schemaDescription:
      "Konsultasi dan pendampingan perizinan alat kesehatan, PKRT, pangan, dan kosmetik.",
    offerCatalog: "Layanan Perizinan",
    eyebrow: "PARTNER PERIZINAN USAHA ANDA",
    titleA: "Langkah lebih pasti.",
    titleB: "Usaha",
    titleHighlight: "lebih siap.",
    introBefore: "Urus perizinan produk dan usaha lebih mudah bersama",
    introAfter:
      "Pendampingan yang jelas dan terarah, dari memahami kebutuhan hingga menjalani proses.",
    exploreServices: "Jelajahi layanan",
    heroImageAlt: "Representasi visual Regulora dengan pose tangan terlipat",
    captionA: "Setiap usaha punya langkahnya.",
    captionB: "Kami bantu arahkan langkah Anda.",
    verticalLabel: "CLARITY IN EVERY STEP",
    scrollCue: "KENALI LAYANAN KAMI",
    sectorLabel: "FOKUS PENDAMPINGAN",
    sectors: ["Alat Kesehatan", "PKRT", "Pangan", "Kosmetik"],
    servicesEyebrow: "LAYANAN KAMI",
    servicesTitle: "Kebutuhan berbeda. Pendampingan yang tepat.",
    servicesDescription:
      "Temukan layanan yang sesuai dengan tahap perjalanan produk dan usaha Anda.",
    allServices: "Semua layanan",
    aboutEyebrow: "TENTANG REGULORA",
    aboutTitleA: "Di balik usaha yang siap melangkah,",
    aboutTitleB: "ada proses yang dipahami.",
    aboutLabel: "KENALI PARTNER PERIZINAN ANDA",
    aboutP1:
      "Menjalani proses perizinan tidak harus terasa membingungkan. Kami hadir untuk membantu Anda memahami apa yang dibutuhkan dan langkah yang perlu dilakukan.",
    aboutP2:
      "REGULORA CONSULTANT menyediakan jasa konsultasi dan pendampingan perizinan produk serta usaha, dengan pendekatan yang disesuaikan dengan kebutuhan Anda.",
    aboutLink: "Lebih dekat dengan Regulora",
    approachEyebrow: "CARA KAMI MENDAMPINGI",
    approachTitle: "Bukan sekadar proses. Tentang kejelasan.",
    features: [
      [
        "Pendampingan terarah",
        "Memetakan kebutuhan dan langkah yang relevan dengan usaha Anda.",
      ],
      [
        "Komunikasi jelas",
        "Informasi disampaikan dengan bahasa yang mudah dipahami.",
      ],
      [
        "Sesuai kebutuhan",
        "Pendekatan yang mempertimbangkan jenis produk dan kondisi usaha.",
      ],
      [
        "Proses transparan",
        "Ruang lingkup dan tahapan dibahas sejak awal pendampingan.",
      ],
    ],
    processEyebrow: "ALUR PENDAMPINGAN",
    processTitle: "Selangkah demi selangkah, bersama Anda.",
    processDescription:
      "Kenali gambaran proses sebelum memulai perjalanan perizinan.",
    faqEyebrow: "PERTANYAAN UMUM",
    faqTitle: "Mari perjelas, sebelum melangkah.",
    faqDescription:
      "Jawaban awal untuk pertanyaan yang mungkin ada di benak Anda.",
    faqLink: "Lihat semua pertanyaan",
  },
  about: {
    metaTitle: "Tentang Kami",
    metaDescription:
      "Kenali REGULORA CONSULTANT, penyedia jasa konsultasi dan pendampingan perizinan produk dan usaha.",
    breadcrumb: "Tentang kami",
    eyebrow: "KENALI REGULORA",
    titleA: "Partner untuk memahami proses.",
    titleB: "Teman untuk melangkah.",
    intro:
      "Kami percaya perjalanan perizinan dimulai dari pemahaman yang jelas tentang kebutuhan usaha Anda.",
    sectionA: "Pendampingan yang dekat dengan usaha Anda",
    p1: "REGULORA CONSULTANT adalah penyedia jasa konsultasi dan pendampingan pengurusan perizinan produk serta usaha di Indonesia. Fokus layanan kami mencakup alat kesehatan, PKRT, pangan, dan kosmetik.",
    p2: "Kami membantu UMKM, pemilik brand, produsen, distributor, dan importir memetakan kebutuhan sebelum menjalani proses pengajuan. Setiap kegiatan usaha memiliki konteks berbeda; karena itu, pendampingan dimulai dari percakapan.",
    sectionB: "Kejelasan sejak awal",
    p3: "Ruang lingkup, pembagian tanggung jawab, dan biaya dibahas berdasarkan kebutuhan serta kesiapan dokumen. Kami tidak memberikan janji bahwa izin pasti diterbitkan atau selesai dalam waktu tertentu.",
    principlesTitle: "Prinsip kami",
    principles: [
      "Pendampingan terarah",
      "Komunikasi yang mudah dipahami",
      "Pendekatan sesuai kebutuhan",
      "Proses dan ruang lingkup transparan",
    ],
    independence:
      "REGULORA CONSULTANT merupakan penyedia jasa independen, bukan instansi penerbit izin.",
  },
  servicesPage: {
    metaTitle: "Layanan Perizinan",
    metaDescription:
      "Temukan pendampingan PKRT, IDAK/IPAK, izin edar alat kesehatan, SPP-IRT, kosmetik dan BPOM MD/ML.",
    breadcrumb: "Layanan",
    eyebrow: "LAYANAN REGULORA",
    titleA: "Satu langkah awal.",
    titleB: "Beragam kebutuhan usaha.",
    intro:
      "Pilih layanan untuk mengenali fokus pendampingan. Belum yakin? Kami bantu memetakan kebutuhan Anda saat konsultasi.",
  },
  serviceDetail: {
    seoTitle: (name: string) => `Jasa Pengurusan ${name}`,
    title: (name: string) => `Jasa Pengurusan ${name}`,
    introSuffix:
      "Mulai dengan peninjauan kebutuhan agar langkah berikutnya lebih terarah.",
    consult: (short: string) => `Konsultasikan ${short}`,
    formButton: "Formulir konsultasi",
    needsTitle: "Pendampingan untuk kebutuhan Anda",
    audienceTitle: "Untuk siapa layanan ini?",
    helpTitle: "Apa yang kami bantu?",
    helpBody:
      "Kami membantu memetakan kebutuhan, meninjau kesiapan informasi, dan menjelaskan langkah tindak lanjut. Ruang lingkup pekerjaan dan penawaran disepakati sebelum pendampingan dimulai.",
    prepEyebrow: "PERSIAPAN KONSULTASI",
    prepTitle: "Mari mulai dari informasi yang Anda miliki.",
    prepNote:
      "Ini adalah bahan diskusi awal, bukan daftar persyaratan resmi. Daftar dokumen pengajuan ditentukan setelah jenis produk dan kegiatan usaha ditinjau.",
    stepsTitle: "Tahapan pendampingan",
    faqTitle: (short: string) => `Pertanyaan tentang ${short}`,
    notice:
      "Penerbitan izin merupakan kewenangan instansi terkait. Pendampingan tidak menjamin hasil atau durasi evaluasi.",
    steps: (short: string, firstTopic: string) => [
      `Pemetaan ${short}`,
      `Peninjauan ${firstTopic.toLowerCase()}`,
      "Penetapan ruang lingkup dan daftar dokumen",
      "Pendampingan pengajuan dan tindak lanjut",
      "Pembaruan hasil sesuai evaluasi instansi",
    ],
  },
  articlesPage: {
    metaTitle: "Artikel & Wawasan",
    metaDescription:
      "Panduan persiapan konsultasi dan wawasan pendampingan untuk pelaku usaha.",
    breadcrumb: "Artikel",
    eyebrow: "CATATAN REGULORA",
    titleA: "Pahami prosesnya.",
    titleB: "Persiapkan langkahnya.",
    intro:
      "Bacaan praktis untuk memulai percakapan tentang kebutuhan usaha Anda.",
    readMore: "Baca artikel ↗",
    articleNote:
      "Artikel ini merupakan informasi umum, bukan penetapan persyaratan untuk suatu produk.",
  },
  faqPage: {
    metaTitle: "Pertanyaan Umum",
    metaDescription:
      "Jawaban seputar konsultasi, biaya, proses, dan pendampingan perizinan di Regulora.",
    breadcrumb: "FAQ",
    titleA: "Pertanyaan Anda,",
    titleB: "langkah awal kita.",
    intro: "Kenali cara kerja pendampingan sebelum memulai.",
  },
  contactPage: {
    metaTitle: "Kontak & Konsultasi",
    metaDescription:
      "Ceritakan kebutuhan perizinan produk dan usaha Anda melalui konsultasi Regulora.",
    breadcrumb: "Kontak",
    eyebrow: "MARI MULAI PERCAKAPAN",
    titleA: "Langkah pertama Anda,",
    titleB: "kami dengarkan.",
    intro:
      "Ceritakan kebutuhan usaha Anda. Kita petakan langkah selanjutnya bersama.",
    directTitle: "Lebih nyaman berdiskusi langsung?",
    directBody:
      "Pilih kanal yang tersedia. Tidak perlu mengirim dokumen sensitif pada percakapan pertama.",
    emailLabel: "Email",
    phoneLabel: "Telepon",
    topicsTitle: "Apa yang dibahas?",
    topics: [
      "Jenis produk dan kegiatan usaha",
      "Posisi proses perizinan saat ini",
      "Dokumen yang sudah tersedia",
      "Ruang lingkup pendampingan",
    ],
    noCommitment:
      "Konsultasi awal tidak mengikat Anda pada perjanjian layanan.",
  },
  legalPage: {
    contactLink: "Hubungi REGULORA CONSULTANT →",
  },
  notFound: {
    eyebrow: "404 · HALAMAN TIDAK DITEMUKAN",
    titleA: "Mari kembali",
    titleB: "ke langkah awal.",
    body: "Halaman ini tidak tersedia. Temukan layanan yang Anda butuhkan dari beranda.",
    button: "Kembali ke beranda ↗",
  },
  form: {
    title: "Ceritakan kebutuhan Anda",
    intro:
      "Kolom bertanda * wajib diisi. Hindari menyertakan dokumen atau informasi sensitif. Tombol di bawah membuka pesan di WhatsApp; Anda perlu menekan Kirim di WhatsApp.",
    name: "Nama lengkap *",
    phone: "Nomor WhatsApp *",
    phonePlaceholder: "08… atau 62…",
    email: "Email (opsional)",
    service: "Jenis layanan *",
    servicePlaceholder: "Pilih layanan",
    serviceUnsure: "Saya belum yakin",
    description: "Deskripsi kebutuhan *",
    descriptionPlaceholder:
      "Ceritakan jenis produk, kegiatan usaha, dan bantuan yang Anda perlukan…",
    consentBefore: "Saya menyetujui",
    consentLink: "Kebijakan Privasi",
    consentAfter:
      "dan pemrosesan data untuk menanggapi permintaan konsultasi. *",
    submit: "Lanjutkan ke WhatsApp ↗",
    noWhatsapp: "WhatsApp belum tersedia. Silakan hubungi kami melalui email.",
    opened:
      "Lanjutkan dengan menekan Kirim di WhatsApp. Membuka WhatsApp belum mengirim pesan Anda.",
    messageIntro: "Halo REGULORA CONSULTANT, saya ingin berkonsultasi.",
    messageName: "Nama",
    messagePhone: "WhatsApp",
    messageEmail: "Email",
    messageService: "Layanan",
    messageNeeds: "Kebutuhan",
    messageUnsure: "Belum yakin",
  },
  validation: {
    name: "Nama minimal 2 karakter.",
    phone: "Masukkan nomor WhatsApp yang valid.",
    email: "Email tidak valid.",
    emailLong: "Email terlalu panjang.",
    service: "Pilih jenis layanan.",
    descriptionShort: "Ceritakan kebutuhan Anda minimal 20 karakter.",
    descriptionLong: "Maksimal 2.000 karakter.",
    consent: "Persetujuan kebijakan privasi diperlukan.",
  },
  content: {
    steps: [
      "Konsultasi awal",
      "Identifikasi kebutuhan",
      "Pemeriksaan dokumen & penawaran",
      "Pendampingan proses perizinan",
      "Pembaruan status & penyelesaian",
    ],
    generalFaq: [
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
    ],
    services: {
      pkrt: {
        name: "Perizinan PKRT",
        short: "PKRT",
        category: "Alat kesehatan & PKRT",
        summary:
          "Pendampingan perizinan produk Perbekalan Kesehatan Rumah Tangga.",
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
      "idak-ipak": {
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
      "izin-edar-alat-kesehatan": {
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
      "spp-irt": {
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
      "notifikasi-kosmetik": {
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
      "bpom-md-ml": {
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
    },
    articles: {
      "persiapan-konsultasi-perizinan": {
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
      "memahami-ruang-lingkup-pendampingan": {
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
    },
    legal: {
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
            "Formulir menyusun pesan di perangkat Anda dan membuka WhatsApp dengan isi pesan tersebut. Situs tidak menyimpan formulir ke database. Anda perlu menekan Kirim di WhatsApp untuk menyampaikan pesan kepada kami. Isi pesan diteruskan ke layanan WhatsApp ketika tautannya dibuka.",
          ],
          [
            "Analitik dan pengukuran iklan",
            "Situs memakai Google Tag Manager dengan mode persetujuan (Consent Mode). Sebelum Anda memilih Izinkan, cookie analitik dan iklan tidak disimpan; Google hanya menerima sinyal tanpa cookie untuk mengukur kunjungan dan konversi secara agregat. Jika Anda memilih Tolak, alat pengukuran tidak dimuat. Preferensi disimpan di browser dan dapat diubah melalui tombol Preferensi cookie. Peristiwa yang diukur meliputi kunjungan halaman, pembukaan layanan, awal pengisian formulir, klik WhatsApp. Nama, kontak, isi konsultasi, dan parameter URL tidak dikirim sebagai parameter event analitik. Penyedia tracking dapat memproses informasi perangkat dan jaringan sesuai kebijakannya.",
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
    },
  },
};
export default id;
export type Dict = typeof id;
