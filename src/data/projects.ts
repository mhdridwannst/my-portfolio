export type Project = {
  number: string;
  title: string;
  description: string;
  year: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    title: "One Music",
    description:
      "Saya membuat sebuah website music sederhana yang bisa digunakan oleh banyak orang bagi mereka yang mau menenangkan diri dengan mendengarkan musik yang mereka inginkan, saya membuat nya dengan konsep seperti Spotify tapi lebih sederhana",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    number: "02",
    title: "Sistem-Monitoring-Suhu-Cuaca-Kelembapan-Udara-Berbasis-ESP32",
    description:
      "Project akhir matakuliah Praktikum Mikroprosesor & Antarmuka membuat sebuah alat untuk memonitoring suhu cuaca & kelembapan udara pada tambak garam dengan sistem IoT untuk mempermudah para petani dalam hal melihat kondisi suhu cuaca dan kelembapan udara untuk meningkatkan proses hasil panen garam.",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Go", "Tailwind", "ESP32", "IoT"],
  },
  {
    number: "03",
    title: "StorageOne",
    description:
      "StorageOne adalah aplikasi website berbasis CRUD (Create, Read, Update, Delete) yang dirancang untuk membantu pengelolaan data inventory secara lebih mudah, cepat, dan terorganisir. Aplikasi ini memungkinkan pengguna untuk mencatat, menampilkan, mengubah, serta menghapus data barang secara efisien dalam satu sistem terpusat.",
    year: "2026",
    technologies: [
      "Laravel 11",
      "HTML5, CSS3, Bootstrap 5, Vanilla JavaScript",
      "My SQL",
    ],
  },
];
