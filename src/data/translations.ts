export const content = {
  id: {
    nav: {
      about: "01 Profil",
      skills: "02 Stack",
      projects: "03 Proyek",
      education: "04 Edukasi",
      contact: "05 Kontak",
      resume: "CV / Resume",
      resumeTitle: "Unduh atau lihat Curriculum Vitae",
      github: "GitHub",
    },
    hero: {
      status: "Terbuka untuk Peluang Kerja Backend & Software Engineering",
      institution: "Politeknik Elektronika Negeri Surabaya (PENS)",
      period: "2024 — Now",
      headlinePrefix: "Backend & Software Engineer dengan fondasi kuat di ",
      skills: [
        "Jaringan Komputer & Sistem",
        "Arsitektur REST API & Go",
        "Basis Data PostgreSQL & ACID",
        "Telemetri IoT & Mikrokontroler",
        "Analisis Protokol & Keamanan",
      ],
      tagline:
        "Membangun backend yang fungsional, terstruktur, dan andal dengan pemahaman mendalam tentang transmisi data jaringan dan keamanan sistem. Mengintegrasikan arsitektur REST API dengan Go & TypeScript, transaksi basis data relasional PostgreSQL (ACID), telemetri mikrokontroler (ESP32), hingga pemahaman transmisi paket data (TCP/IP & Wireshark).",
      btnProjects: "Eksplorasi Proyek",
      btnResume: "Lihat CV / Resume",
      btnContact: "Hubungi Saya",
      metaProgram: "Program Studi",
      metaDegreeVal: "D4 Teknik Telekomunikasi",
      metaLoc: "Domisili & Kampus",
      metaLocVal: "Surabaya (PENS)",
      metaStack: "Core Stack",
      metaStackVal: "Go · TS · PostgreSQL · Linux",
    },
    heroGraphic: {
      badge: "MHD_RIDWAN.SYS",
      institution: "D4 TELKOM · PENS",
      disciplineLabel: "Core Discipline",
      discipline: "Backend · Network · Systems",
      regionLabel: "REGION",
      regionVal: "SURABAYA · ID",
      telemetry: "TCP/IP & DB OK",
      status: "● OPEN FOR ROLES",
    },
    terminal: {
      titleBar: "ridwan@pens-telecom-node: ~",
      prompt: "visitor@terminal:~$",
      footerHelp: "INTERAKTIF — KLIK TOMBOL PERINTAH DI ATAS",
      footerNode: "NODE: SURABAYA · ARCH: X86_64 / ARM",
      goal: 'CURRENT_GOAL = "Siap untuk Posisi Magang atau Junior Backend/Software Engineer"',
      tracerouteReached:
        "✓ Rute terverifikasi: Terhubung ke Infrastruktur Kampus PENS",
    },
    about: {
      tag: "01 Profil",
      sub: "Latar Belakang",
      title:
        "Menghubungkan rekayasa backend aplikasi dengan pemahaman mendalam layer jaringan & infrastruktur sistem.",
      paragraphs: [
        "Saya adalah mahasiswa Sarjana Terapan (D4) Teknik Telekomunikasi di Politeknik Elektronika Negeri Surabaya (PENS) yang berfokus pada rekayasa backend, pengembangan perangkat lunak terstruktur, serta fondasi jaringan komputer dan keamanan sistem.",
        "Berbekal latar belakang telekomunikasi, pendekatan saya terhadap pengembangan sistem tidak sebatas menulis kode di application layer, melainkan memahami bagaimana data dirutekan melintasi transport layer (TCP/IP), inspeksi paket dengan Wireshark, administrasi server Linux, hingga transaksi basis data relasional dengan integritas ACID.",
      ],
      pillarsTitle: "Fondasi Disiplin Rekayasa (Core Engineering Pillars)",
      pillars: [
        {
          title: "Backend & Systems First",
          subtitle: "REST API, Relational DB & Microservices",
          description:
            "Merancang arsitektur API terstruktur dengan validasi payload yang ketat, skema database relasional (3NF), indexing performa, dan manajemen transaksi.",
          tags: [
            "Go",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma ORM",
            "REST API",
          ],
        },
        {
          title: "Networking & Protocols",
          subtitle: "TCP/IP, Packet Analysis & Routing",
          description:
            "Memahami perjalanan paket data lintas layer OSI, inspeksi payload via Wireshark, subnetting kelas lanjutan, serta simulasi topologi jaringan.",
          tags: [
            "TCP/IP",
            "Wireshark",
            "Cisco Packet Tracer",
            "GNS3",
            "Subnetting",
            "Ngrok",
          ],
        },
        {
          title: "Hardware, IoT & Security",
          subtitle: "Embedded Microcontrollers to Cloud",
          description:
            "Menghubungkan telemetri mikrokontroler (ESP32) ke backend service publik, serta mempraktikkan fondasi security & CTF (reverse engineering, sanitasi input).",
          tags: [
            "ESP32",
            "Embedded C++",
            "picoCTF",
            "pwntools",
            "Linux Admin",
            "Docker",
          ],
        },
      ],
    },
    skills: {
      tag: "02 Stack",
      sub: "Keahlian Teknis",
      title: "Teknologi, Framework, & Perangkat Kerja",
      description:
        "Pengelompokan alat, protokol, dan teknologi yang telah diaplikasikan secara nyata dalam rekayasa perangkat lunak, sistem telemetri IoT, dan infrastruktur jaringan.",
      categories: [
        { id: "all", label: "Semua Stack" },
        { id: "languages", label: "Bahasa Pemrograman" },
        { id: "backend", label: "Backend & Runtimes" },
        { id: "database", label: "Basis Data & Cloud" },
        { id: "networking", label: "Jaringan & Protokol" },
        { id: "devops", label: "DevOps & OS" },
        { id: "security", label: "Keamanan Sistem" },
      ],
    },
    work: {
      tag: "03 Portofolio",
      title: "Proyek Pilihan & Rekayasa Sistem",
      description:
        "Implementasi nyata mencakup pemrosesan transaksi basis data atomik, telemetri IoT hardware-to-cloud via Go & Ngrok, serta aplikasi web modern berbasis TypeScript.",
      verifiedCount: "PROYEK TERVERIFIKASI & TERDOKUMENTASI",
      tabOverview: "01 Ringkasan & Solusi",
      tabArch: "02 Arsitektur & Pipeline",
      tabDecisions: "03 Keputusan Rekayasa",
      overviewHeading: "Ringkasan Proyek",
      problemHeading: "Problem Statement:",
      solutionHeading: "Engineering Solution:",
      roleHeading: "Peran & Kontribusi",
      featuresHeading: "Fitur Kunci Sistem",
      pipelineHeading: "Alur Data Sistem (Data Flow Pipeline)",
      decisionsHeading:
        "Alasan Teknis & Trade-offs (Engineering Justifications)",
      techLabel: "Tech:",
      viewRepo: "Kunjungi Website",
      projects: [
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
          impactMetric:
            "Integritas data transaksi 100% konsisten dengan validasi stok atomik",
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
          impactMetric:
            "Transmisi data telemetri berkala tanpa packet loss melalui reverse tunnel",
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
          impactMetric:
            "Transisi pemutaran audio instan tanpa jeda buffer dan responsivitas UI 60 FPS",
        },
      ],
    },
    education: {
      tag: "04 Edukasi",
      sub: "Pendidikan Formal",
      schoolBadge: "Politeknik Negeri Unggulan Bidang Rekayasa & Teknologi",
      institution: "Politeknik Elektronika Negeri Surabaya (PENS)",
      degree: "Sarjana Terapan (D4) Teknik Telekomunikasi",
      period: "2024 — Now",
      location: "Surabaya, Jawa Timur",
      desc: "Kurikulum terapan berbasis laboratorium intensif yang menyeimbangkan antara fondasi teknik telekomunikasi digital, perancangan arsitektur jaringan komputer berskala besar, serta rekayasa perangkat lunak sistem backend modern.",
      competenciesHeading: "Kompetensi Inti & Praktikum Terkait:",
      competencies: [
        {
          title: "Jaringan Komputer & Subnetting Lanjut",
          desc: "Perancangan skema subnetting VLSM/CIDR, model referensi OSI & TCP/IP suite.",
        },
        {
          title: "Analisis Protokol & Paket Trafik",
          desc: "Deep packet inspection dengan Wireshark, analisis handshake TCP/SYN, dan HTTP streams.",
        },
        {
          title: "Simulasi Topologi Jaringan",
          desc: "Konfigurasi routing dinamis, VLAN, dan switching menggunakan Cisco Packet Tracer & GNS3.",
        },
        {
          title: "Sistem Mikroprosesor & IoT Interface",
          desc: "Pemrograman mikrokontroler ESP32, sensor telemetri, antarmuka serial, dan transmisi cloud.",
        },
        {
          title: "Rekayasa Perangkat Lunak Backend",
          desc: "Implementasi RESTful API, normalisasi skema basis data relasional, dan transaksi ACID.",
        },
        {
          title: "Fondasi Keamanan Sistem & CTF",
          desc: "Pengenalan kerentanan web (SSTI/SQLi), input sanitization, dan dasar-dasar binary analysis.",
        },
      ],
    },
    footer: {
      tag: "05 Kontak",
      title:
        "Mari diskusikan kesempatan kerja, proyek rekayasa, atau kolaborasi teknis.",
      desc: "Saya selalu terbuka untuk berdiskusi seputar arsitektur sistem backend, integrasi basis data, transmisi jaringan data, maupun posisi pekerjaan (Internship / Junior Role).",
      directTitle: "Direct Contact",
      copyEmail: "Salin Email",
      copied: "Tersalin ke Clipboard!",
      verifiedLinks: "Tautan Profesional Terverifikasi",
      backToTop: "Kembali ke Atas",
      campusLoc: "Surabaya, Jawa Timur, Indonesia",
      copyrightNote: "Crafted with engineering fidelity & performance in mind.",
    },
  },
  en: {
    nav: {
      about: "01 About",
      skills: "02 Stack",
      projects: "03 Projects",
      education: "04 Education",
      contact: "05 Contact",
      resume: "CV / Resume",
      resumeTitle: "Download or view Curriculum Vitae",
      github: "GitHub",
    },
    hero: {
      status: "Open for Backend & Software Engineering Opportunities",
      institution:
        "Electronic Engineering Polytechnic Institute of Surabaya (PENS)",
      period: "2024 — Now",
      headlinePrefix: "Backend & Software Engineer with a solid foundation in ",
      skills: [
        "Computer Networking & Systems",
        "REST API Architecture & Go",
        "PostgreSQL & ACID Databases",
        "IoT Telemetry & Microcontrollers",
        "Protocol Analysis & Security",
      ],
      tagline:
        "Building functional, structured, and resilient backend systems with a deep understanding of network data transmission and system security. Integrating REST APIs with Go & TypeScript, ACID relational PostgreSQL transactions, ESP32 microcontroller telemetry, and deep packet analysis (TCP/IP & Wireshark).",
      btnProjects: "Explore Projects",
      btnResume: "View CV / Resume",
      btnContact: "Contact Me",
      metaProgram: "Study Program",
      metaDegreeVal: "Bachelor of Applied Science (D4) in Telecom Eng.",
      metaLoc: "Campus & Location",
      metaLocVal: "Surabaya, ID (PENS)",
      metaStack: "Core Stack",
      metaStackVal: "Go · TS · PostgreSQL · Linux",
    },
    heroGraphic: {
      badge: "MHD_RIDWAN.SYS",
      institution: "D4 TELECOM · PENS",
      disciplineLabel: "Core Discipline",
      discipline: "Backend · Network · Systems",
      regionLabel: "REGION",
      regionVal: "SURABAYA · ID",
      telemetry: "TCP/IP & DB OK",
      status: "● OPEN FOR ROLES",
    },
    terminal: {
      titleBar: "ridwan@pens-telecom-node: ~",
      prompt: "visitor@terminal:~$",
      footerHelp: "INTERACTIVE SHELL — CLICK COMMAND BUTTONS ABOVE",
      footerNode: "NODE: SURABAYA · ARCH: X86_64 / ARM",
      goal: 'CURRENT_GOAL = "Ready for Backend / Software Engineering Internship or Junior Role"',
      tracerouteReached:
        "✓ Hop route verified: PENS Telecom Campus Infrastructure connected",
    },
    about: {
      tag: "01 About",
      sub: "Background",
      title:
        "Bridging backend application engineering with deep networking layers & systems infrastructure.",
      paragraphs: [
        "I am a Bachelor of Applied Science (D4) Telecommunications Engineering student at Politeknik Elektronika Negeri Surabaya (PENS), focusing on backend engineering, structured software development, computer networking, and system security fundamentals.",
        "With a telecommunications engineering background, my engineering philosophy goes far beyond writing application-layer code. I understand how packets travel across the transport layer (TCP/IP), inspect payloads with Wireshark, manage Linux environments, and design relational databases with strict ACID transactions.",
      ],
      pillarsTitle: "Core Engineering Pillars",
      pillars: [
        {
          title: "Backend & Systems First",
          subtitle: "REST APIs, Relational DBs & Services",
          description:
            "Architecting structured APIs with strict payload validation, relational 3NF database schemas, index optimization, and reliable transaction pipelines.",
          tags: [
            "Go",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma ORM",
            "REST API",
          ],
        },
        {
          title: "Networking & Protocols",
          subtitle: "TCP/IP, Packet Analysis & Routing",
          description:
            "Understanding packet lifecycles across OSI layers, deep payload analysis with Wireshark, advanced subnetting, and network topology design.",
          tags: [
            "TCP/IP",
            "Wireshark",
            "Cisco Packet Tracer",
            "GNS3",
            "Subnetting",
            "Ngrok",
          ],
        },
        {
          title: "Hardware, IoT & Security",
          subtitle: "Embedded Microcontrollers to Cloud",
          description:
            "Transmitting physical telemetry from ESP32 microcontrollers to public backend services, and practicing security fundamentals (reverse engineering, sanitization).",
          tags: [
            "ESP32",
            "Embedded C++",
            "picoCTF",
            "pwntools",
            "Linux Admin",
            "Docker",
          ],
        },
      ],
    },
    skills: {
      tag: "02 Stack",
      sub: "Technical Expertise",
      title: "Technologies, Frameworks & Tooling",
      description:
        "Categorization of tools, protocols, and technologies actively applied in software engineering, IoT telemetry, and network infrastructure.",
      categories: [
        { id: "all", label: "All Stacks" },
        { id: "languages", label: "Programming Languages" },
        { id: "backend", label: "Backend & Runtimes" },
        { id: "database", label: "Databases & Cloud" },
        { id: "networking", label: "Networking & Protocols" },
        { id: "devops", label: "DevOps & OS" },
        { id: "security", label: "System Security" },
      ],
    },
    work: {
      tag: "03 Portfolio",
      title: "Featured Projects & Systems Engineering",
      description:
        "Real-world implementations covering atomic database transaction handling, hardware-to-cloud IoT telemetry via Go & Ngrok, and modern TypeScript web applications.",
      verifiedCount: "VERIFIED & DOCUMENTED PROJECTS",
      tabOverview: "01 Summary & Solution",
      tabArch: "02 Architecture & Pipeline",
      tabDecisions: "03 Engineering Decisions",
      overviewHeading: "Project Overview",
      problemHeading: "Problem Statement:",
      solutionHeading: "Engineering Solution:",
      roleHeading: "Role & Contribution",
      featuresHeading: "Key System Features",
      pipelineHeading: "Data Flow Pipeline",
      decisionsHeading: "Technical Decisions & Trade-offs",
      techLabel: "Tech:",
      viewRepo: "Visit website",
      projects: [
        {
          number: "01",
          title: "Kasir Nasution POS System",
          category: "Backend & Full Stack Application",
          badge: "Web Production & DB Transactions",
          status: "Production Ready",
          overview:
            "Modular Point of Sale (POS) web application designed for retail transactions, product categorization, inventory automation, and cashier revenue auditing.",
          problem:
            "Manual paper-based cashier logging caused frequent inventory discrepancies, was vulnerable to double-entry errors, and severely delayed daily sales auditing.",
          solution:
            "Architected a decoupled backend REST API using Node.js (Express) and TypeScript with PostgreSQL via Prisma ORM. Implemented atomic database transactions to ensure inventory stock is verified before checkout succeeds.",
          role: "Full Stack Engineer — designed normalized relational database schema (3NF), built protected RESTful API endpoints, and developed a responsive React cashier dashboard.",
          features: [
            "Cashier authentication & session-protected API endpoints",
            "Product catalog with SKU indexing, barcodes, and multi-categories",
            "Automatic stock deduction upon confirmed checkout transactions",
            "Grand total calculations, change computing, and receipt printing",
            "Transaction audit log with date range filters",
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
              "Decoupled client-server architecture. Checkout requests are sent over HTTPS to the REST API and executed inside a Prisma `$transaction` block to ensure stock decrement and order generation occur atomically without race conditions.",
          },
          engineeringDecisions: [
            "Employed Prisma `$transaction` to eliminate ghost-stock anomalies when multiple cashiers check out simultaneously.",
            "Designed a normalized relational schema (Users, Products, Categories, Orders, OrderItems).",
            "Strict input validation middleware in Express before any query reaches the database layer.",
          ],
          impactMetric:
            "100% consistent transaction data integrity with atomic stock validation",
        },
        {
          number: "02",
          title: "ESP32 Weather Telemetry & Monitoring",
          category: "IoT, Embedded Systems & Telecommunication",
          badge: "Hardware-to-Cloud Pipeline",
          status: "Working Prototype",
          overview:
            "Distributed environmental telemetry pipeline acquiring physical sensor parameters via ESP32 microcontrollers, dispatching HTTP payloads over Ngrok tunnel to a Go backend, and visualizing data in Next.js.",
          problem:
            "Monitoring physical temperature and humidity in remote field locations was challenging without costly, complex on-site server infrastructure.",
          solution:
            "Programmed ESP32 firmware in C++ for sensor sampling, packaged payloads into JSON, executed HTTP POST requests to a concurrent Go backend service, and tunneled data via Ngrok to a Next.js visualization dashboard.",
          role: "End-to-End IoT & Backend Engineer — firmware microcontroller programming in C++, Go REST API implementation, network tunneling setup, and web visualization.",
          features: [
            "Periodic sensor temperature and humidity data sampling",
            "Wi-Fi connection management with automated exponential backoff",
            "High-throughput Go backend API utilizing goroutines for telemetry ingestion",
            "Secure Ngrok tunneling enabling private-to-public data transmission",
            "Interactive Next.js telemetry dashboard with real-time graph updates",
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
              "ESP32 reads sensor pins ➔ Encapsulates JSON payload ➔ Dispatches HTTP POST through secure Ngrok tunnel ➔ Ingested by concurrent Go HTTP server ➔ Streamed to Next.js client.",
          },
          engineeringDecisions: [
            "Selected Go for backend ingestion due to its negligible memory footprint and high-throughput concurrency (goroutines).",
            "Implemented exponential backoff reconnection on ESP32 firmware to gracefully handle Wi-Fi dropouts.",
            "Minimized JSON payload footprint to preserve transceiver bandwidth on the microcontroller.",
          ],
          impactMetric:
            "Zero packet loss telemetry transmission over reverse public tunnel",
        },
        {
          number: "03",
          title: "OneMusic - Audio Streaming Platform",
          category: "Web Application & Cloud Database",
          badge: "Next.js App Router & Cloud DB",
          status: "Live Application",
          overview:
            "Modern music streaming web application focused on responsive audio performance, centralized catalog search, and audio metadata persistence on Supabase (PostgreSQL).",
          problem:
            "Many web audio players suffer from lag and playback interruption during page navigations due to inefficient state management and unoptimized re-renders.",
          solution:
            "Built with Next.js App Router and TypeScript, utilizing an HTML5 Audio API state machine for seamless playback across route transitions, backed by PostgreSQL on Supabase for instant catalog queries.",
          role: "Full Stack Developer — architected audio player with custom React state hooks, Supabase database integration, and adaptive UI design.",
          features: [
            "Custom audio player with seekbar, volume control, shuffle, and repeat",
            "Organized music catalog with instant query search",
            "Cloud-hosted audio metadata and album artwork storage",
            "Persistent audio state machine during page navigation",
            "Adaptive dark mode interface optimized for mobile touch controls",
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
              "Server components perform initial catalog metadata fetching from Supabase, while an isolated client component state machine manages playback lifecycle without triggering full page re-renders.",
          },
          engineeringDecisions: [
            "Isolated audio playback state in a global singleton provider so music keeps playing uninterrupted during navigation.",
            "Indexed song title and artist columns on Supabase PostgreSQL for sub-10ms search queries.",
            "Engineered mobile-first touch ergonomics for quick one-handed playback control.",
          ],
          impactMetric:
            "Instant playback transitions without buffering lag and stable 60 FPS UI",
        },
      ],
    },
    education: {
      tag: "04 Education",
      sub: "Formal Education",
      schoolBadge: "Leading National Polytechnic in Technology & Engineering",
      institution:
        "Electronic Engineering Polytechnic Institute of Surabaya (PENS)",
      degree:
        "Bachelor of Applied Science (D4) in Telecommunications Engineering",
      period: "2024 — Now",
      location: "Surabaya, East Java, Indonesia",
      desc: "Intensive laboratory-based applied curriculum balancing digital telecommunication fundamentals, large-scale network architecture design, and modern backend software engineering.",
      competenciesHeading: "Core Competencies & Academic Labs:",
      competencies: [
        {
          title: "Computer Networks & Advanced Subnetting",
          desc: "VLSM/CIDR subnet design, OSI reference models, and TCP/IP protocol suite.",
        },
        {
          title: "Protocol & Traffic Packet Analysis",
          desc: "Deep packet inspection using Wireshark, TCP/SYN handshake analysis, and HTTP streams.",
        },
        {
          title: "Network Topology Simulation",
          desc: "Dynamic routing, VLANs, and switching configuration using Cisco Packet Tracer & GNS3.",
        },
        {
          title: "Microprocessors & IoT Interfaces",
          desc: "ESP32 programming, sensor telemetry, serial communication, and cloud transmission.",
        },
        {
          title: "Backend Software Engineering",
          desc: "RESTful API development, relational database normalization (3NF), and ACID transactions.",
        },
        {
          title: "System Security & CTF Fundamentals",
          desc: "Introduction to web vulnerabilities (SSTI/SQLi), input sanitization, and binary analysis basics.",
        },
      ],
    },
    footer: {
      tag: "05 Contact",
      title:
        "Let's discuss career opportunities, engineering projects, or technical collaboration.",
      desc: "I am always open to discussing backend system architectures, database integrations, network data transmission, and employment opportunities (Internship / Junior Role).",
      directTitle: "Direct Contact",
      copyEmail: "Copy Email",
      copied: "Copied to Clipboard!",
      verifiedLinks: "Verified Professional Links",
      backToTop: "Back to Top",
      campusLoc: "Surabaya, East Java, Indonesia",
      copyrightNote: "Crafted with engineering fidelity & performance in mind.",
    },
  },
};
