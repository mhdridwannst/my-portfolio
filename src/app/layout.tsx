import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0e11" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mhd. Ridwan — Portofolio",
  description:
    "Portofolio Mhd. Ridwan, Mahasiswa Teknik Telekomunikasi Politeknik Elektronika Negeri Surabaya (PENS). Berfokus pada Backend Engineering, Arsitektur REST API, PostgreSQL, Jaringan Komputer (TCP/IP), dan Telemetri IoT.",
  keywords: [
    "Mhd Ridwan",
    "Mhd Ridwan PENS",
    "Backend Developer Surabaya",
    "Software Engineer PENS",
    "Teknik Telekomunikasi PENS",
    "Go Developer",
    "TypeScript Backend",
    "PostgreSQL",
    "Prisma ORM",
    "ESP32 IoT Telemetry",
    "Wireshark TCP/IP",
  ],
  authors: [{ name: "Mhd. Ridwan", url: "https://github.com/mhdridwannst" }],
  creator: "Mhd. Ridwan",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://github.com/mhdridwannst",
    title: "Mhd. Ridwan — Backend & Systems Software Engineer",
    description:
      "Portofolio rekayasa backend, jaringan komputer, telemetri IoT, dan sistem web modern oleh Mhd. Ridwan (PENS).",
    siteName: "Mhd. Ridwan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mhd. Ridwan — Backend & Systems Software Engineer",
    description:
      "Portofolio rekayasa backend, jaringan komputer, telemetri IoT, dan sistem web modern oleh Mhd. Ridwan (PENS).",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-grid-pattern antialiased selection:bg-[var(--signal)] selection:text-white">
        {children}
      </body>
    </html>
  );
}