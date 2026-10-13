export type Project = {
  number: string;
  title: string;
  category: string;
  badge: string;
  status: string;
  overview: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  technologies: string[];
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  architecture: {
    pipeline: string[];
    description: string;
  };
  engineeringDecisions: string[];
  impactMetric?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Sistem POS Kasir Nasution",
    category: "Backend & Full Stack Application",
    badge: "Web Production & DB Transactions",
    status: "Production Ready",
    overview:
      "Aplikasi web Point of Sale (POS) modular untuk digitalisasi transaksi retail, kategorisasi multi-produk, manajemen inventaris, dan kalkulasi pendapatan harian kasir.",
    problem:
      "Pencatatan kasir konvensional menggunakan kertas rentan selisih stok inventaris, rawan double-entry, serta membutuhkan waktu lama saat audit laporan omzet harian.",
    solution:
      "Membangun REST API backend terpisah menggunakan Node.js (Express) dan TypeScript dengan basis data relasional PostgreSQL via Prisma ORM. Mengimplementasikan transaksi database atomik untuk memvalidasi stok sebelum checkout berhasil.",
    role: "Full Stack Engineer — merancang skema relasi basis data (3NF), membangun endpoint RESTful API terproteksi, dan antarmuka web kasir responsif dengan React.",
    features: [
      "Autentikasi kasir & proteksi endpoint dengan verifikasi sesi",
      "Katalog produk dengan indexing SKU, barcode, dan multi-kategori",
      "Pencatatan mutasi stok otomatis saat transaksi berhasil",
      "Perhitungan total transaksi, kembalian, dan cetak invoice struk",
      "Audit riwayat transaksi dengan filter rentang tanggal",
    ],
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "React",
      "Tailwind CSS",
      "Vite",
      "Railway",
      "Vercel",
    ],
    year: "2026",
    githubUrl: "https://kasir-nasution.vercel.app",
    architecture: {
      pipeline: [
        "React Frontend (Vite)",
        "REST API (Express / TypeScript)",
        "Prisma ORM Client",
        "PostgreSQL (ACID Transactions)",
      ],
      description:
        "Arsitektur terpisah (decoupled client-server). Request checkout dikirim via HTTPS ke REST API, divalidasi dengan Prisma Transaction `$transaction` untuk memastikan pengurangan stok dan pencatatan transaksi terjadi secara atomik tanpa race condition.",
    },
    engineeringDecisions: [
      "Menerapkan Prisma `$transaction` untuk mencegah ghost-stock saat kasir memproses transaksi bersamaan.",
      "Desain skema database relasional ternormalisasi (Tabel Users, Products, Categories, Orders, OrderItems).",
      "Validasi payload request di middleware Express sebelum query menyentuh layer database.",
    ],
    impactMetric: "Integritas data transaksi 100% konsisten dengan validasi stok atomik",
  },
  {
    number: "02",
    title: "Sistem Telemetri Monitoring Cuaca ESP32",
    category: "IoT, Embedded Systems & Telecommunication",
    badge: "Hardware-to-Cloud Pipeline",
    status: "Working Prototype",
    overview:
      "Sistem telemetri lingkungan fisik terdistribusi yang membaca parameter sensor dari mikrokontroler ESP32, mengirimkan payload via HTTP melalui tunneling Ngrok ke backend Go, dan menampilkannya pada dashboard visual Next.js.",
    problem:
      "Pengukuran kondisi suhu dan kelembapan di titik lapangan terpencil sulit dipantau secara berkala tanpa infrastruktur server lokal yang mahal dan kompleks.",
    solution:
      "Memprogram firmware ESP32 untuk akuisisi sensor suhu dan kelembapan, membungkus data dalam payload JSON, mengeksekusi HTTP POST ke backend service berbasis Go, dan mengekspos endpoint melalui tunneling Ngrok untuk konsumsi dashboard publik Next.js.",
    role: "End-to-End IoT & Backend Engineer — pemrograman firmware mikrokontroler C++, perancangan backend REST API dengan Go, konfigurasi tunneling jaringan, dan visualisasi web.",
    features: [
      "Pengambilan sampel data suhu & kelembapan sensor secara periodik",
      "Handling konektivitas Wi-Fi mikrokontroler dengan auto-reconnect logic",
      "Backend API Go berkemampuan tinggi dengan goroutines untuk konsumsi data telemetri",
      "Tunneling jaringan aman (Ngrok) untuk transmisi data dari jaringan privat ke publik",
      "Dashboard antarmuka Next.js interaktif dengan grafik pembaruan data",
    ],
    technologies: [
      "Go (Golang)",
      "Next.js",
      "TypeScript",
      "ESP32 (C++)",
      "Ngrok Tunneling",
      "REST API",
      "HTTP/1.1",
      "Tailwind CSS",
    ],
    year: "2026",
    githubUrl: "https://sistem-monitoring-suhu-cuaca-kelemb.vercel.app/",
    architecture: {
      pipeline: [
        "ESP32 Microcontroller (C++)",
        "WiFi HTTP/1.1 Client",
        "Ngrok Secure Tunnel",
        "Go Backend Service",
        "Next.js Telemetry UI",
      ],
      description:
        "ESP32 membaca sensor fisik ➔ Mengemas payload JSON ➔ Mengirim request HTTP POST melalui secure tunnel Ngrok ➔ Diterima oleh Go HTTP server ➔ Disajikan ke Next.js client secara real-time.",
    },
    engineeringDecisions: [
      "Memilih Go untuk layer backend karena efisiensi memori rendah dan handling konkurensi (Goroutine) yang sangat cepat untuk data telemetri berkala.",
      "Implementasi exponential backoff reconnection pada firmware ESP32 jika koneksi Wi-Fi terputus.",
      "Menggunakan format payload JSON terkompresi untuk meminimalkan beban bandwidth pada modul transceiver mikrokontroler.",
    ],
    impactMetric: "Transmisi data telemetri berkala tanpa packet loss melalui reverse tunnel",
  },
  {
    number: "03",
    title: "OneMusic - Audio Streaming Platform",
    category: "Web Application & Cloud Database",
    badge: "Next.js App Router & Cloud DB",
    status: "Live Application",
    overview:
      "Aplikasi web pemutar musik modern yang fokus pada performa audio interaktif, pencarian trek katalog terpusat, dan persistensi metadata lagu di Supabase (PostgreSQL).",
    problem:
      "Banyak pemutar audio web lambat dalam rendering dan mengalami lag saat transisi antar lagu akibat re-render state yang tidak efisien.",
    solution:
      "Mengembangkan aplikasi web dengan Next.js App Router dan TypeScript, memanfaatkan HTML5 Audio API state machine untuk pemutaran tanpa hambatan, serta database PostgreSQL di Supabase untuk query katalog yang cepat.",
    role: "Full Stack Developer — arsitektur pemutar audio dengan custom React hook, integrasi query database Supabase, dan styling UI adaptif.",
    features: [
      "Pemutar audio kustom dengan seekbar, volume control, shuffle, dan repeat",
      "Katalog trek musik terorganisir dengan pencarian instan",
      "Penyimpanan metadata audio dan cover artwork berbasis cloud",
      "State management audio persisten saat pengguna bernavigasi halaman",
      "Antarmuka responsif dark mode dengan responsivitas mobile optimal",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "HTML5 Audio API",
    ],
    year: "2026",
    githubUrl: "https://one-app-music.vercel.app/",
    architecture: {
      pipeline: [
        "Next.js Client (App Router)",
        "React Audio State Machine",
        "Supabase Client SDK",
        "Cloud PostgreSQL Database",
      ],
      description:
        "Aplikasi memanfaatkan server-side component untuk initial fetch metadata katalog dari Supabase, dan client component terisolasi untuk mengelola siklus hidup pemutaran audio tanpa memicu re-render halaman penuh.",
    },
    engineeringDecisions: [
      "Isolasi state player audio dalam singleton provider sehingga trek tetap berputar lancar saat membuka rute halaman lain.",
      "Indexing kolom judul lagu dan artis pada basis data PostgreSQL Supabase untuk pencarian cepat.",
      "Desain antarmuka mobile-first dengan kontrol sentuh yang ergonomis.",
    ],
    impactMetric: "Transisi pemutaran audio instan tanpa jeda buffer dan responsivitas UI 60 FPS",
  },
];
