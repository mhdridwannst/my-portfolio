import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "R. Sion — Engineering Student",
  description:
    "Personal portfolio of R. Sion, an engineering student based in Surabaya, Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}