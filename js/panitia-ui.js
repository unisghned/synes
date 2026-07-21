// =========================================================================
// Panitia UI - Multi-Style Frame Engine
// Optimized: Per-Image Dynamic Lazy Loading & Unloading via IntersectionObserver
// Status: ALL CREW | Full Database (100 Items)
// Format: Vertical / Multiline Data Structure
// =========================================================================

const panitiaDatabase = [
  // =======================================================================
  // 1. DIVISI BPH & INTI
  // =======================================================================
  {
    id: 1,
    nama: "Nama Panitia #01",
    jabatan: "Crew Koordinator Utama",
    divisi: "inti",
    src: "assets/panggung.JPG",
    desc: "Crew pelaksana yang bertanggung jawab atas koordinasi umum festival Synesthesia.",
    style: "polaroid",
    rotate: "-rotate-2"
  },
  {
    id: 2,
    nama: "Nama Panitia #02",
    jabatan: "Crew Administrasi & Sesi",
    divisi: "inti",
    src: "assets/HIVI.JPG",
    desc: "Crew yang mengelola administrasi, surat-menyurat, serta arsip data panitia.",
    style: "filmstrip",
    rotate: "rotate-3"
  },
  {
    id: 3,
    nama: "Nama Panitia #03",
    jabatan: "Crew Bendahara Festival",
    divisi: "inti",
    src: "assets/BAND (1).JPG",
    desc: "Crew pengelola alokasi dana operasional dan rekapitulasi keuangan acara.",
    style: "sticker",
    rotate: "-rotate-3"
  },
  {
    id: 4,
    nama: "Nama Panitia #04",
    jabatan: "Crew Sekretariat Operasional",
    divisi: "inti",
    src: "assets/ARUMA.JPG",
    desc: "Crew penyusun berkas proposal, perizinan, dan penjadwalan rapat panitia.",
    style: "polaroid",
    rotate: "rotate-2"
  },
  {
    id: 5,
    nama: "Nama Panitia #05",
    jabatan: "Crew Supervisor Lapangan",
    divisi: "inti",
    src: "assets/PANGGUNG (2).JPG",
    desc: "Crew pengawas ritme kerja antar divisi selama persiapan hingga festival berlangsung.",
    style: "filmstrip",
    rotate: "-rotate-1"
  },
  {
    id: 6,
    nama: "Nama Panitia #06",
    jabatan: "Crew Controller Internal",
    divisi: "inti",
    src: "assets/BAND (2).JPG",
    desc: "Crew pemantau kepatuhan timeline dan pengerjaan tugas tiap divisi.",
    style: "sticker",
    rotate: "rotate-4"
  },
  {
    id: 7,
    nama: "Nama Panitia #07",
    jabatan: "Crew Auditor Keuangan",
    divisi: "inti",
    src: "assets/BAND (3).JPG",
    desc: "Crew pemeriksa nota transaksional dan validasi alokasi dana darurat.",
    style: "polaroid",
    rotate: "-rotate-3"
  },
  {
    id: 8,
    nama: "Nama Panitia #08",
    jabatan: "Crew Sekretaris Lapangan",
    divisi: "inti",
    src: "assets/ARUMA (1).JPG",
    desc: "Crew pencatat risalah rapat mendadak dan rekap instruksi pimpinan.",
    style: "filmstrip",
    rotate: "rotate-1"
  },
  {
    id: 9,
    nama: "Nama Panitia #09",
    jabatan: "Crew Penanggung Jawab Legal",
    divisi: "inti",
    src: "assets/HIVI (1).JPG",
    desc: "Crew pengurus surat izin keramaian dan MoU dengan pihak eksternal.",
    style: "sticker",
    rotate: "-rotate-2"
  },
  {
    id: 10,
    nama: "Nama Panitia #10",
    jabatan: "Crew Evaluasi & Laporan",
    divisi: "inti",
    src: "assets/BAND (4).JPG",
    desc: "Crew penyusun catatan evaluasi dan arsip pelaksanaan festival.",
    style: "polaroid",
    rotate: "rotate-3"
  },

  // =======================================================================
  // 2. DIVISI ACARA
  // =======================================================================
  {
    id: 11,
    nama: "Nama Panitia #11",
    jabatan: "Crew Koordinator Acara",
    divisi: "acara",
    src: "assets/BAND (5).JPG",
    desc: "Crew perancang rundown acara panggung utama dan jalannya sesi penampilan.",
    style: "filmstrip",
    rotate: "-rotate-4"
  },
  {
    id: 12,
    nama: "Nama Panitia #12",
    jabatan: "Crew Floor Director Stage",
    divisi: "acara",
    src: "assets/DANCE (1).JPG",
    desc: "Crew pengatur alur masuk dan keluar penampil di atas panggung festival.",
    style: "sticker",
    rotate: "rotate-2"
  },
  {
    id: 13,
    nama: "Nama Panitia #13",
    jabatan: "Crew Liaison Officer (LO) GS",
    divisi: "acara",
    src: "assets/DANCE (2).JPG",
    desc: "Crew pendamping kebutuhan penampil utama/artis selama di venue acara.",
    style: "polaroid",
    rotate: "-rotate-1"
  },
  {
    id: 14,
    nama: "Nama Panitia #14",
    jabatan: "Crew Time Keeper Panggung",
    divisi: "acara",
    src: "assets/BAND (6).JPG",
    desc: "Crew pemantau durasi dan ketepatan waktu tampil setiap pengisi acara.",
    style: "filmstrip",
    rotate: "rotate-3"
  },
  {
    id: 15,
    nama: "Nama Panitia #15",
    jabatan: "Crew Regie & Backstage",
    divisi: "acara",
    src: "assets/BAND (7).JPG",
    desc: "Crew pengatur area belakang panggung agar tetap kondusif dan steril.",
    style: "sticker",
    rotate: "-rotate-3"
  },
  {
    id: 16,
    nama: "Nama Panitia #16",
    jabatan: "Crew LO Performers Lokal",
    divisi: "acara",
    src: "assets/ARUMA (2).JPG",
    desc: "Crew pendamping band sekolah dan penampilan seni internal.",
    style: "polaroid",
    rotate: "rotate-2"
  },
  {
    id: 17,
    nama: "Nama Panitia #17",
    jabatan: "Crew Pengarah Ice Breaking",
    divisi: "acara",
    src: "assets/PANGGUNG (1).JPG",
    desc: "Crew pemandu interaksi dan hiburan di sela-sela pergantian set panggung.",
    style: "filmstrip",
    rotate: "-rotate-2"
  },
  {
    id: 18,
    nama: "Nama Panitia #18",
    jabatan: "Crew Kurator Talent",
    divisi: "acara",
    src: "assets/HIVI (2).JPG",
    desc: "Crew penyeleksi dan penata urutan penampilan tari dan musik.",
    style: "sticker",
    rotate: "rotate-1"
  },
  {
    id: 19,
    nama: "Nama Panitia #19",
    jabatan: "Crew Runner Acara",
    divisi: "acara",
    src: "assets/ARUMA (3).JPG",
    desc: "Crew sigap penyampai komunikasi cepat antar tim acara dan teknisi stage.",
    style: "polaroid",
    rotate: "-rotate-4"
  },
  {
    id: 20,
    nama: "Nama Panitia #20",
    jabatan: "Crew Operator Audio & Cue",
    divisi: "acara",
    src: "assets/TENANT.JPG",
    desc: "Crew pengatur urutan pemutaran musik latar dan audio pendukung acara.",
    style: "filmstrip",
    rotate: "rotate-3"
  },
  {
    id: 21,
    nama: "Nama Panitia #21",
    jabatan: "Crew MC Controller",
    divisi: "acara",
    src: "assets/TENANT (1).JPG",
    desc: "Crew pemandu cue sheet dan materi pembawa acara di panggung.",
    style: "sticker",
    rotate: "-rotate-1"
  },
  {
    id: 22,
    nama: "Nama Panitia #22",
    jabatan: "Crew Cultural Show Handler",
    divisi: "acara",
    src: "assets/TENANT (2).JPG",
    desc: "Crew pengatur tata busana dan perlengkapan tim tari tradisional.",
    style: "polaroid",
    rotate: "rotate-2"
  },
  {
    id: 23,
    nama: "Nama Panitia #23",
    jabatan: "Crew Soundcheck Coordinator",
    divisi: "acara",
    src: "assets/Zaga.png",
    desc: "Crew pengatur jadwal uji suara band sebelum pintu dibuka.",
    style: "filmstrip",
    rotate: "-rotate-3"
  },
  {
    id: 24,
    nama: "Nama Panitia #24",
    jabatan: "Crew Greenroom Attendant",
    divisi: "acara",
    src: "assets/PANGGUNG (3).JPG",
    desc: "Crew penata kenyamanan ruang tunggu artis sebelum tampil.",
    style: "sticker",
    rotate: "rotate-4"
  },
  {
    id: 25,
    nama: "Nama Panitia #25",
    jabatan: "Crew Confetti & Effects",
    divisi: "acara",
    src: "assets/Lala.png",
    desc: "Crew peluncur efek semburan kertas dan penutup pesta acara.",
    style: "polaroid",
    rotate: "-rotate-2"
  },
  {
    id: 26,
    nama: "Nama Panitia #26",
    jabatan: "Crew Visual Projection",
    divisi: "acara",
    src: "assets/PANGGUNG (4).JPG",
    desc: "Crew pengatur tampilan backdrop LED visual selama pertunjukan.",
    style: "filmstrip",
    rotate: "rotate-3"
  },
  {
    id: 27,
    nama: "Nama Panitia #27",
    jabatan: "Crew Closing Ceremony",
    divisi: "acara",
    src: "assets/BAND (8).JPG",
    desc: "Crew penata selebrasi pelepasan balon dan ucapan penutup.",
    style: "sticker",
    rotate: "-rotate-1"
  },
  {
    id: 28,
    nama: "Nama Panitia #28",
    jabatan: "Crew Runner Guest Star",
    divisi: "acara",
    src: "assets/PANGGUNG (5).JPG",
    desc: "Crew pendamping mobilitas tim artis dari hotel ke panggung.",
    style: "polaroid",
    rotate: "rotate-1"
  },
  {
    id: 29,
    nama: "Nama Panitia #29",
    jabatan: "Crew Maskot & Hospitality",
    divisi: "acara",
    src: "assets/TENANT (3).JPG",
    desc: "Crew pendamping talenta maskot Zaga, Lala, Rocky, dan Kila.",
    style: "filmstrip",
    rotate: "-rotate-4"
  },
  {
    id: 30,
    nama: "Nama Panitia #30",
    jabatan: "Crew Stage Choreographer",
    divisi: "acara",
    src: "assets/TENANT (4).JPG",
    desc: "Crew pemandu posisi blocking penampil dan penari panggung.",
    style: "sticker",
    rotate: "rotate-2"
  },

  // =======================================================================
  // 3. DIVISI HUMAS & DOKUMENTASI
  // =======================================================================
  {
    id: 31,
    nama: "Nama Panitia #31",
    jabatan: "Crew Koordinator Humas",
    divisi: "humas",
    src: "assets/PANGGUNG (6).JPG",
    desc: "Crew penanggung jawab publikasi dan komunikasi luar festival.",
    style: "polaroid",
    rotate: "-rotate-2"
  },
  {
    id: 32,
    nama: "Nama Panitia #32",
    jabatan: "Crew Fotografer Panggung",
    divisi: "humas",
    src: "assets/TENANT (5).JPG",
    desc: "Crew pengabadikan momen penting dan ekspresi pengunjung di panggung.",
    style: "filmstrip",
    rotate: "rotate-3"
  },
  {
    id: 33,
    nama: "Nama Panitia #33",
    jabatan: "Crew Videografer & Aftermath",
    divisi: "humas",
    src: "assets/TENANT (6).JPG",
    desc: "Crew perekam video recap highlights dan cuplikan visual acara.",
    style: "sticker",
    rotate: "-rotate-3"
  },
  {
    id: 34,
    nama: "Nama Panitia #34",
    jabatan: "Crew Media Sosial & Feed",
    divisi: "humas",
    src: "assets/Rocky.png",
    desc: "Crew pengelola konten instagram, tiktok, dan linimasa promosi.",
    style: "polaroid",
    rotate: "rotate-4"
  },
  {
    id: 35,
    nama: "Nama Panitia #35",
    jabatan: "Crew Press & Sponsorship",
    divisi: "humas",
    src: "assets/Kila.png",
    desc: "Crew penyusun laporan sponsor dan jalinan kerja sama media partner.",
    style: "filmstrip",
    rotate: "-rotate-1"
  },
  {
    id: 36,
    nama: "Nama Panitia #36",
    jabatan: "Crew Ticketing & Registrasi",
    divisi: "humas",
    src: "assets/BAND (9).JPG",
    desc: "Crew penanggung jawab penukaran gelang/tiket masuk pengunjung.",
    style: "sticker",
    rotate: "rotate-2"
  },
  {
    id: 37,
    nama: "Nama Panitia #37",
    jabatan: "Crew Customer Relations",
    divisi: "humas",
    src: "assets/HIVI (3).JPG",
    desc: "Crew penerima pusat informasi dan bantuan kendala bagi penonton.",
    style: "polaroid",
    rotate: "-rotate-3"
  },
  {
    id: 38,
    nama: "Nama Panitia #38",
    jabatan: "Crew Graphic Designer",
    divisi: "humas",
    src: "assets/TENANT (7).JPG",
    desc: "Crew pembuat aset grafis promosi, banner, dan identitas visual.",
    style: "filmstrip",
    rotate: "rotate-1"
  },
  {
    id: 39,
    nama: "Nama Panitia #39",
    jabatan: "Crew Live Streaming Operator",
    divisi: "humas",
    src: "assets/ARUMA (4).JPG",
    desc: "Crew pemantau transmisi video siaran langsung acara.",
    style: "sticker",
    rotate: "-rotate-2"
  },
  {
    id: 40,
    nama: "Nama Panitia #40",
    jabatan: "Crew Penulis Narasi & Script",
    divisi: "humas",
    src: "assets/BAND (10).JPG",
    desc: "Crew pembuat naskah MC, siaran pers, dan naskah konten promosi.",
    style: "polaroid",
    rotate: "rotate-3"
  },
  {
    id: 41,
    nama: "Nama Panitia #41",
    jabatan: "Crew Field Photographer",
    divisi: "humas",
    src: "assets/DANCE (3).JPG",
    desc: "Crew dokumentasi area bazaar dan interaksi pengunjung.",
    style: "filmstrip",
    rotate: "-rotate-4"
  },
  {
    id: 42,
    nama: "Nama Panitia #42",
    jabatan: "Crew Gate Inspection",
    divisi: "humas",
    src: "assets/PANGGUNG (1).JPG",
    desc: "Crew pemeriksa tiket dan barang bawaan di pintu masuk.",
    style: "sticker",
    rotate: "rotate-2"
  },
  {
    id: 43,
    nama: "Nama Panitia #43",
    jabatan: "Crew VIP Hospitality",
    divisi: "humas",
    src: "assets/ARUMA (5).JPG",
    desc: "Crew penerima tamu undangan khusus dan komite sekolah.",
    style: "polaroid",
    rotate: "-rotate-1"
  },
  {
    id: 44,
    nama: "Nama Panitia #44",
    jabatan: "Crew Merchandise Store",
    divisi: "humas",
    src: "assets/TENANT (8).JPG",
    desc: "Crew penjual kaus, stiker, dan cenderamata resmi Synesthesia.",
    style: "filmstrip",
    rotate: "rotate-4"
  },
  {
    id: 45,
    nama: "Nama Panitia #45",
    jabatan: "Crew Photo Booth Assistant",
    divisi: "humas",
    src: "assets/Zaga.png",
    desc: "Crew pengarah gaya penonton di bilik cetak foto kenangan.",
    style: "sticker",
    rotate: "-rotate-3"
  },
  {
    id: 46,
    nama: "Nama Panitia #46",
    jabatan: "Crew Information Voice",
    divisi: "humas",
    src: "assets/BAND (11).JPG",
    desc: "Crew pengisi pengumuman pengeras suara pusat informasi.",
    style: "polaroid",
    rotate: "rotate-1"
  },
  {
    id: 47,
    nama: "Nama Panitia #47",
    jabatan: "Crew Media Center Officer",
    divisi: "humas",
    src: "assets/TENANT.JPG",
    desc: "Crew pengelola kebutuhan jurnalis dan wartawan peliput.",
    style: "filmstrip",
    rotate: "-rotate-2"
  },
  {
    id: 48,
    nama: "Nama Panitia #48",
    jabatan: "Crew Social Media Live",
    divisi: "humas",
    src: "assets/HIVI (4).JPG",
    desc: "Crew pengunggah story dan update langsung selama acara.",
    style: "sticker",
    rotate: "rotate-3"
  },
  {
    id: 49,
    nama: "Nama Panitia #49",
    jabatan: "Crew Copywriter & Captioner",
    divisi: "humas",
    src: "assets/BAND (12).JPG",
    desc: "Crew penyusun teks promosi dan pengumuman mendadak.",
    style: "polaroid",
    rotate: "-rotate-4"
  },
  {
    id: 50,
    nama: "Nama Panitia #50",
    jabatan: "Crew Public Relations Field",
    divisi: "humas",
    src: "assets/panggung.JPG",
    desc: "Crew penyambung komunikasi dengan pihak kepolisian/keamanan luar.",
    style: "filmstrip",
    rotate: "rotate-2"
  },

  // =======================================================================
  // 4. DIVISI LOGISTIK & TEKNIK
  // =======================================================================
  {
    id: 51,
    nama: "Nama Panitia #51",
    jabatan: "Crew Koordinator Logistik",
    divisi: "logistik",
    src: "assets/PANGGUNG (2).JPG",
    desc: "Crew pengelola kebutuhan teknis, venue, dan perizinan barang.",
    style: "sticker",
    rotate: "-rotate-1"
  },
  {
    id: 52,
    nama: "Nama Panitia #52",
    jabatan: "Crew Sound & Rigging System",
    divisi: "logistik",
    src: "assets/DANCE (4).JPG",
    desc: "Crew penata jalur kelistrikan, amplifier, dan susunan speaker.",
    style: "polaroid",
    rotate: "rotate-3"
  },
  {
    id: 53,
    nama: "Nama Panitia #53",
    jabatan: "Crew Lighting & Effects Laser",
    divisi: "logistik",
    src: "assets/TENANT (2).JPG",
    desc: "Crew pengoperasi sorot lampu beam, smoke machine, dan lighting.",
    style: "filmstrip",
    rotate: "-rotate-3"
  },
  {
    id: 54,
    nama: "Nama Panitia #54",
    jabatan: "Crew Area Bazaar & Tenants",
    divisi: "logistik",
    src: "assets/HIVI (5).JPG",
    desc: "Crew penata kerapihan stan kuliner dan alokasi daya stan bazaar.",
    style: "sticker",
    rotate: "rotate-1"
  },
  {
    id: 55,
    nama: "Nama Panitia #55",
    jabatan: "Crew Konsumsi & Katering",
    divisi: "logistik",
    src: "assets/TENANT (3).JPG",
    desc: "Crew pengelola pembagian makanan dan minuman panitia serta artis.",
    style: "polaroid",
    rotate: "-rotate-2"
  },
  {
    id: 56,
    nama: "Nama Panitia #56",
    jabatan: "Crew Keamanan Area Venue",
    divisi: "logistik",
    src: "assets/BAND (13).JPG",
    desc: "Crew penjaga ketertiban gerbang masuk dan batas barikade panggung.",
    style: "filmstrip",
    rotate: "rotate-4"
  },
  {
    id: 57,
    nama: "Nama Panitia #57",
    jabatan: "Crew Kebersihan & Sanitation",
    divisi: "logistik",
    src: "assets/ARUMA (6).JPG",
    desc: "Crew penanggung jawab kebersihan lingkungan dan tempat sampah area.",
    style: "sticker",
    rotate: "-rotate-1"
  },
  {
    id: 58,
    nama: "Nama Panitia #58",
    jabatan: "Crew Medis & First Aid",
    divisi: "logistik",
    src: "assets/Lala.png",
    desc: "Crew penanganan kesehatan dan pertolongan pertama penonton.",
    style: "polaroid",
    rotate: "rotate-2"
  },
  {
    id: 59,
    nama: "Nama Panitia #59",
    jabatan: "Crew Dekorasi Venue Utama",
    divisi: "logistik",
    src: "assets/ARUMA (7).JPG",
    desc: "Crew penata estetik lorong entrance, instalasi photo booth, dan poster.",
    style: "filmstrip",
    rotate: "-rotate-3"
  },
  {
    id: 60,
    nama: "Nama Panitia #60",
    jabatan: "Crew Perlengkapan Instrument",
    divisi: "logistik",
    src: "assets/HIVI (6).JPG",
    desc: "Crew penyedia alat musik pendukung seperti drumkit, mic, dan amp.",
    style: "sticker",
    rotate: "rotate-3"
  },
  {
    id: 61,
    nama: "Nama Panitia #61",
    jabatan: "Crew Support General",
    divisi: "logistik",
    src: "assets/panggung.JPG",
    desc: "Crew fleksibel pembantu operasional divisi logistik di lapangan.",
    style: "polaroid",
    rotate: "-rotate-2"
  },
  {
    id: 62,
    nama: "Nama Panitia #62",
    jabatan: "Crew Barikade & Crowd Control",
    divisi: "logistik",
    src: "assets/HIVI.JPG",
    desc: "Crew penata barisan penonton di depan panggung utama.",
    style: "filmstrip",
    rotate: "rotate-3"
  },
  {
    id: 63,
    nama: "Nama Panitia #63",
    jabatan: "Crew Monitor Audio Stage",
    divisi: "logistik",
    src: "assets/BAND (1).JPG",
    desc: "Crew pemantau kejelasan suara monitor panggung untuk musisi.",
    style: "sticker",
    rotate: "-rotate-3"
  },
  {
    id: 64,
    nama: "Nama Panitia #64",
    jabatan: "Crew Transportasi & Parkir",
    divisi: "logistik",
    src: "assets/ARUMA.JPG",
    desc: "Crew penata alur kendaraan penonton dan muatan logistik.",
    style: "polaroid",
    rotate: "rotate-2"
  },
  {
    id: 65,
    nama: "Nama Panitia #65",
    jabatan: "Crew Stage Hand",
    divisi: "logistik",
    src: "assets/PANGGUNG (2).JPG",
    desc: "Crew pengangkat instrumen dan penata kabel gitar/mic di stage.",
    style: "filmstrip",
    rotate: "-rotate-1"
  },
  {
    id: 66,
    nama: "Nama Panitia #66",
    jabatan: "Crew Power & Generator",
    divisi: "logistik",
    src: "assets/BAND (2).JPG",
    desc: "Crew pemantau ketersediaan genset dan stabilitas daya listrik.",
    style: "sticker",
    rotate: "rotate-4"
  },
  {
    id: 67,
    nama: "Nama Panitia #67",
    jabatan: "Crew Crowd Medical Responder",
    divisi: "logistik",
    src: "assets/BAND (3).JPG",
    desc: "Crew penyelamat cepat di tengah tribun/kerumunan penonton.",
    style: "polaroid",
    rotate: "-rotate-3"
  },
  {
    id: 68,
    nama: "Nama Panitia #68",
    jabatan: "Crew Asset Audit",
    divisi: "logistik",
    src: "assets/ARUMA (1).JPG",
    desc: "Crew penanggung jawab keamanan dan jumlah alat sewaan sekolah.",
    style: "filmstrip",
    rotate: "rotate-1"
  },
  {
    id: 69,
    nama: "Nama Panitia #69",
    jabatan: "Crew Radio Frequency & HT",
    divisi: "logistik",
    src: "assets/HIVI (1).JPG",
    desc: "Crew penyedia alat komunikasi sinyal Handy Talkie panitia.",
    style: "sticker",
    rotate: "-rotate-2"
  },
  {
    id: 70,
    nama: "Nama Panitia #70",
    jabatan: "Crew Backstage Security",
    divisi: "logistik",
    src: "assets/BAND (4).JPG",
    desc: "Crew penjaga akses lorong belakang panggung dari pengunjung luar.",
    style: "polaroid",
    rotate: "rotate-3"
  },

  // =======================================================================
  // 5. CREW OPERASIONAL TAMBAHAN (71 - 100)
  // =======================================================================
  {
    id: 71,
    nama: "Nama Panitia #71",
    jabatan: "Crew Runner Logistik",
    divisi: "logistik",
    src: "assets/BAND (5).JPG",
    desc: "Crew kurir pengambil perlengkapan cepat saat keadaan darurat.",
    style: "filmstrip",
    rotate: "-rotate-4"
  },
  {
    id: 72,
    nama: "Nama Panitia #72",
    jabatan: "Crew Konsumsi Artis & VIP",
    divisi: "logistik",
    src: "assets/DANCE (1).JPG",
    desc: "Crew penyiap makanan khusus catering guest star dan komite.",
    style: "sticker",
    rotate: "rotate-2"
  },
  {
    id: 73,
    nama: "Nama Panitia #73",
    jabatan: "Crew Penata Panggung Utama",
    divisi: "logistik",
    src: "assets/DANCE (2).JPG",
    desc: "Crew penyusun backdrop fisik dan lantai karpet panggung.",
    style: "polaroid",
    rotate: "-rotate-1"
  },
  {
    id: 74,
    nama: "Nama Panitia #74",
    jabatan: "Crew Tenda & Shelter",
    divisi: "logistik",
    src: "assets/BAND (6).JPG",
    desc: "Crew penanggung jawab pemasangan terpal dan tenda peleton.",
    style: "filmstrip",
    rotate: "rotate-3"
  },
  {
    id: 75,
    nama: "Nama Panitia #75",
    jabatan: "Crew Kelistrikan Bazaar",
    divisi: "logistik",
    src: "assets/BAND (7).JPG",
    desc: "Crew pembagi kabel roll dan beban listrik untuk tiap tenant.",
    style: "sticker",
    rotate: "-rotate-3"
  },
  {
    id: 76,
    nama: "Nama Panitia #76",
    jabatan: "Crew Pengarah Parkir VIP",
    divisi: "logistik",
    src: "assets/ARUMA (2).JPG",
    desc: "Crew pengatur slot khusus parkir mobil pengisi acara dan guru.",
    style: "polaroid",
    rotate: "rotate-2"
  },
  {
    id: 77,
    nama: "Nama Panitia #77",
    jabatan: "Crew Pengawas Kebersihan Stage",
    divisi: "logistik",
    src: "assets/PANGGUNG (1).JPG",
    desc: "Crew pembersih sampah botol dan kertas confetti di stage.",
    style: "filmstrip",
    rotate: "-rotate-2"
  },
  {
    id: 78,
    nama: "Nama Panitia #78",
    jabatan: "Crew Posko Kesehatan Utama",
    divisi: "logistik",
    src: "assets/HIVI (2).JPG",
    desc: "Crew penjaga kasur perawatan dan ketersediaan tabung oksigen.",
    style: "sticker",
    rotate: "rotate-1"
  },
  {
    id: 79,
    nama: "Nama Panitia #79",
    jabatan: "Crew Runner Konsumsi",
    divisi: "logistik",
    src: "assets/ARUMA (3).JPG",
    desc: "Crew pembagi nasi kotak dan snack ke tiap pos panitia.",
    style: "polaroid",
    rotate: "-rotate-4"
  },
  {
    id: 80,
    nama: "Nama Panitia #80",
    jabatan: "Crew Penata Barikade Luar",
    divisi: "logistik",
    src: "assets/TENANT.JPG",
    desc: "Crew penata pagar pembatas antrean tiket di luar venue.",
    style: "filmstrip",
    rotate: "rotate-3"
  },
  {
    id: 81,
    nama: "Nama Panitia #81",
    jabatan: "Crew Pendamping Talent Lokal",
    divisi: "acara",
    src: "assets/TENANT (1).JPG",
    desc: "Crew pengarah waktu standby untuk penampil internal sekolah.",
    style: "sticker",
    rotate: "-rotate-1"
  },
  {
    id: 82,
    nama: "Nama Panitia #82",
    jabatan: "Crew Tim Evaluasi Lapangan",
    divisi: "inti",
    src: "assets/TENANT (2).JPG",
    desc: "Crew penilai kinerja dan kelancaran alur operasional acara.",
    style: "polaroid",
    rotate: "rotate-2"
  },
  {
    id: 83,
    nama: "Nama Panitia #83",
    jabatan: "Crew Penata Ruang VIP",
    divisi: "humas",
    src: "assets/Zaga.png",
    desc: "Crew penata sofa dan pendingin ruangan di lounge tamu khusus.",
    style: "filmstrip",
    rotate: "-rotate-3"
  },
  {
    id: 84,
    nama: "Nama Panitia #84",
    jabatan: "Crew Operator LED Screen",
    divisi: "acara",
    src: "assets/PANGGUNG (3).JPG",
    desc: "Crew pemutar motion graphic pendukung saat konser berlangsung.",
    style: "sticker",
    rotate: "rotate-4"
  },
  {
    id: 85,
    nama: "Nama Panitia #85",
    jabatan: "Crew Penjaga Gate VIP",
    divisi: "humas",
    src: "assets/Lala.png",
    desc: "Crew pemeriksa pita akses khusus pintu masuk tamu penting.",
    style: "polaroid",
    rotate: "-rotate-2"
  },
  {
    id: 86,
    nama: "Nama Panitia #86",
    jabatan: "Crew Ticketing Redemption",
    divisi: "humas",
    src: "assets/PANGGUNG (4).JPG",
    desc: "Crew pemindai QR code e-ticket menjadi gelang fisik.",
    style: "filmstrip",
    rotate: "rotate-3"
  },
  {
    id: 87,
    nama: "Nama Panitia #87",
    jabatan: "Crew Dokumentasi Tenant",
    divisi: "humas",
    src: "assets/BAND (8).JPG",
    desc: "Crew peliput aktivitas transaksi dan keseruan di area kuliner.",
    style: "sticker",
    rotate: "-rotate-1"
  },
  {
    id: 88,
    nama: "Nama Panitia #88",
    jabatan: "Crew Pendamping MC",
    divisi: "acara",
    src: "assets/PANGGUNG (5).JPG",
    desc: "Crew pembawa air minum dan perlengkapan panggung untuk MC.",
    style: "polaroid",
    rotate: "rotate-1"
  },
  {
    id: 89,
    nama: "Nama Panitia #89",
    jabatan: "Crew Pengatur Antrean Gate",
    divisi: "humas",
    src: "assets/TENANT (3).JPG",
    desc: "Crew pemecah kepadatan penonton saat jam buka pintu.",
    style: "filmstrip",
    rotate: "-rotate-4"
  },
  {
    id: 90,
    nama: "Nama Panitia #90",
    jabatan: "Crew Penyedia HT Batterai",
    divisi: "logistik",
    src: "assets/TENANT (4).JPG",
    desc: "Crew pengisi daya dan pengisi cadangan baterai walkie-talkie.",
    style: "sticker",
    rotate: "rotate-2"
  },
  {
    id: 91,
    nama: "Nama Panitia #91",
    jabatan: "Crew Logistik Panggung Samping",
    divisi: "logistik",
    src: "assets/PANGGUNG (6).JPG",
    desc: "Crew penjaga instrumen gitar & bass cadangan di wing stage.",
    style: "polaroid",
    rotate: "-rotate-2"
  },
  {
    id: 92,
    nama: "Nama Panitia #92",
    jabatan: "Crew Penata Kipas Industri",
    divisi: "logistik",
    src: "assets/TENANT (5).JPG",
    desc: "Crew penempatan blower angin di area padat penonton.",
    style: "filmstrip",
    rotate: "rotate-3"
  },
  {
    id: 93,
    nama: "Nama Panitia #93",
    jabatan: "Crew Pengawas Barikade Utama",
    divisi: "logistik",
    src: "assets/TENANT (6).JPG",
    desc: "Crew pemantau ketahanan pagar besi di depan sound mixer.",
    style: "sticker",
    rotate: "-rotate-3"
  },
  {
    id: 94,
    nama: "Nama Panitia #94",
    jabatan: "Crew Dokumentasi Aerial/Drone",
    divisi: "humas",
    src: "assets/Rocky.png",
    desc: "Crew penerbang drone untuk pengambilan gambar suasana atas.",
    style: "polaroid",
    rotate: "rotate-4"
  },
  {
    id: 95,
    nama: "Nama Panitia #95",
    jabatan: "Crew Penanggung Jawab Banner",
    divisi: "humas",
    src: "assets/Kila.png",
    desc: "Crew pemasang spanduk sponsor di sekitar pagar venue.",
    style: "filmstrip",
    rotate: "-rotate-1"
  },
  {
    id: 96,
    nama: "Nama Panitia #96",
    jabatan: "Crew Pendamping Tim Medis",
    divisi: "logistik",
    src: "assets/BAND (9).JPG",
    desc: "Crew penunjuk jalan ambulans saat rujukan darurat.",
    style: "sticker",
    rotate: "rotate-2"
  },
  {
    id: 97,
    nama: "Nama Panitia #97",
    jabatan: "Crew Penata Jalur Evakuasi",
    divisi: "logistik",
    src: "assets/HIVI (3).JPG",
    desc: "Crew pemasti arah pintu darurat bebas dari tumpukan barang.",
    style: "polaroid",
    rotate: "-rotate-3"
  },
  {
    id: 98,
    nama: "Nama Panitia #98",
    jabatan: "Crew Pendata Barang Hilang",
    divisi: "humas",
    src: "assets/TENANT (7).JPG",
    desc: "Crew penerima dan pencatat laporan lost and found penonton.",
    style: "filmstrip",
    rotate: "rotate-1"
  },
  {
    id: 99,
    nama: "Nama Panitia #99",
    jabatan: "Crew Tim Bersih Akhir Acara",
    divisi: "logistik",
    src: "assets/ARUMA (4).JPG",
    desc: "Crew penyapu area lapangan setelah penonton meninggalkan lokasi.",
    style: "sticker",
    rotate: "-rotate-2"
  },
  {
    id: 100,
    nama: "Nama Panitia #100",
    jabatan: "Crew Perekap Inventaris",
    divisi: "inti",
    src: "assets/BAND (10).JPG",
    desc: "Crew penghitung ulang ketersediaan barang sewaan sebelum dikembalikan.",
    style: "polaroid",
    rotate: "rotate-3"
  }
];

// =========================================================================
// HTML FRAME BUILDER (Per-Image Dynamic Lazy Loading Target)
// =========================================================================
function createCardHTML(person) {
  // SVG Placeholder transparan 1x1 pixel agar tidak makan memori GPU & tidak merusak dimensi grid
  const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E";

  if (person.style === 'polaroid') {
    return `
      <div class="bg-[#F8F6F0] p-3 pb-6 rounded-sm shadow-2xl border border-white/20 transform ${person.rotate} hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer group relative">
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/40 backdrop-blur-[3px] border border-white/30 shadow-sm -rotate-6 z-10 group-hover:opacity-80 transition-opacity"></div>
        
        <div class="aspect-square w-full bg-zinc-900 overflow-hidden relative shadow-inner rounded-sm border border-black/10">
          <img data-src="${person.src}" src="${placeholder}" alt="${person.nama}" class="lazy-panitia-img w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:scale-110">
          <span class="absolute top-2 right-2 bg-synes-accent/90 backdrop-blur-md text-white text-[9px] font-mono font-extrabold px-2 py-0.5 rounded uppercase border border-white/20 shadow-md">CREW</span>
        </div>

        <div class="pt-3 text-center select-none space-y-0.5">
          <p class="text-zinc-900 font-bold text-xs truncate font-display">${person.nama}</p>
          <p class="text-synes-accent text-[10px] tracking-tight truncate font-mono font-semibold">${person.jabatan}</p>
        </div>
      </div>
    `;
  } else if (person.style === 'filmstrip') {
    return `
      <div class="bg-[#121212] p-3 pb-5 rounded-none shadow-2xl border-y-4 border-zinc-800 transform ${person.rotate} hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer group relative">
        <div class="flex justify-between px-1 pb-2">
          <div class="w-2 h-2.5 bg-zinc-950 rounded-sm border border-white/10"></div>
          <div class="w-2 h-2.5 bg-zinc-950 rounded-sm border border-white/10"></div>
          <div class="w-2 h-2.5 bg-zinc-950 rounded-sm border border-white/10"></div>
          <div class="w-2 h-2.5 bg-zinc-950 rounded-sm border border-white/10"></div>
        </div>

        <div class="aspect-square w-full bg-zinc-900 overflow-hidden relative border border-white/10">
          <img data-src="${person.src}" src="${placeholder}" alt="${person.nama}" class="lazy-panitia-img w-full h-full object-cover opacity-0 transition-opacity duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110">
          <span class="absolute bottom-1 right-1 text-[8px] font-mono font-bold text-black bg-synes-gold px-2 py-0.5 rounded-sm uppercase tracking-wider">CREW</span>
        </div>

        <div class="pt-3 text-left px-1 select-none">
          <p class="text-white font-extrabold text-xs truncate font-display tracking-wide">${person.nama}</p>
          <p class="text-synes-teal text-[9px] font-mono uppercase tracking-wider truncate">${person.jabatan}</p>
        </div>
      </div>
    `;
  } else {
    return `
      <div class="bg-synes-card p-3 pb-5 rounded-xl shadow-[6px_6px_0px_0px_rgba(255,59,105,0.8)] border-2 border-synes-accent transform ${person.rotate} hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer group relative">
        <div class="absolute -top-3 -right-2 bg-synes-teal text-zinc-950 text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md rotate-12 z-10 border border-white tracking-wider">
          CREW
        </div>

        <div class="aspect-square w-full bg-zinc-900 rounded-lg overflow-hidden relative border border-white/20">
          <img data-src="${person.src}" src="${placeholder}" alt="${person.nama}" class="lazy-panitia-img w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:scale-110">
        </div>

        <div class="pt-3 text-center select-none space-y-0.5">
          <p class="text-white font-black text-xs truncate font-display tracking-wider uppercase">${person.nama}</p>
          <span class="inline-block px-2 py-0.5 bg-white/10 text-synes-gold text-[9px] font-bold rounded-md border border-white/10 truncate max-w-full">
            ${person.jabatan}
          </span>
        </div>
      </div>
    `;
  }
}

// =========================================================================
// INTERSECTION OBSERVER FOR PER-IMAGE LOAD & UNLOAD
// =========================================================================
let imageObserver = null;

function setupImageObserver() {
  if (imageObserver) {
    imageObserver.disconnect();
  }

  const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E";

  imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const img = entry.target;
      const realSrc = img.getAttribute('data-src');

      if (entry.isIntersecting) {
        // GAMBAR MASUK VIEWPORT -> Load Gambar
        if (realSrc && img.src !== realSrc) {
          img.src = realSrc;
          img.onload = () => img.classList.remove('opacity-0');
        }
      } else {
        // GAMBAR KELUAR VIEWPORT -> Unload Gambar (Kosongkan GPU Memory)
        if (img.src !== placeholder) {
          img.classList.add('opacity-0');
          img.src = placeholder;
        }
      }
    });
  }, {
    rootMargin: '300px 0px 300px 0px', // Preload 300px sebelum masuk viewport agar tidak kaget saat scroll cepat
    threshold: 0.01
  });

  document.querySelectorAll('img.lazy-panitia-img').forEach((img) => {
    imageObserver.observe(img);
  });
}

// =========================================================================
// RENDER & FILTER ENGINE
// =========================================================================
function renderPanitia(filterCategory = 'all') {
  const rack = document.getElementById('panitia-grid-rack');
  if (!rack) return;

  rack.innerHTML = '';

  panitiaDatabase.forEach((person) => {
    if (filterCategory !== 'all' && person.divisi !== filterCategory) return;

    const cardContainer = document.createElement('div');
    cardContainer.innerHTML = createCardHTML(person);

    const actualCard = cardContainer.firstElementChild;
    actualCard.addEventListener('click', () => openPanitiaModal(person));
    
    rack.appendChild(actualCard);
  });

  // Terapkan observer pada seluruh elemen img yang baru dibuat
  setupImageObserver();
}

function filterPanitia(category, buttonElement) {
  const buttons = buttonElement?.parentElement?.children;
  if (buttons) {
    for (let btn of buttons) {
      btn.className = "px-5 py-2.5 rounded-full bg-white/5 text-white/60 border border-white/5 hover:bg-white/10 hover:text-white transition-all duration-300";
    }
  }

  if (buttonElement) {
    buttonElement.className = "px-5 py-2.5 rounded-full bg-synes-accent text-white border border-synes-accent shadow-lg shadow-synes-accent/20 transition-all duration-300";
  }

  renderPanitia(category);
}

// =========================================================================
// LIGHTBOX MODAL PREVIEW
// =========================================================================
function openPanitiaModal(person) {
  const modal = document.getElementById('panitia-lightbox');
  const img = document.getElementById('panitia-img');
  const nama = document.getElementById('panitia-nama');
  const jabatan = document.getElementById('panitia-jabatan');
  const desc = document.getElementById('panitia-desc');
  const badge = document.getElementById('panitia-badge');

  if (!modal || !img || !nama || !jabatan || !desc) return;

  img.src = person.src;
  nama.textContent = person.nama;
  jabatan.textContent = person.jabatan;
  desc.textContent = person.desc;
  if (badge) badge.textContent = "OFFICIAL CREW - " + person.divisi.toUpperCase();

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');

  const modalContent = modal.querySelector('div');
  if (modalContent) {
    setTimeout(() => {
      modalContent.classList.remove('scale-95', 'opacity-0');
      modalContent.classList.add('scale-100', 'opacity-100');
    }, 20);
  }
}

function closePanitiaModal() {
  const modal = document.getElementById('panitia-lightbox');
  const modalContent = modal?.querySelector('div');

  if (modal && modalContent) {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 200);
  }
}

// Global Exports
window.filterPanitia = filterPanitia;
window.renderPanitia = renderPanitia;
window.openPanitiaModal = openPanitiaModal;
window.closePanitiaModal = closePanitiaModal;

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePanitiaModal();
});