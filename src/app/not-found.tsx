import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="w-full max-w-md rounded-xl border border-[var(--line-strong)] bg-[var(--surface)] p-8 shadow-xl">
        <div className="flex items-center justify-between border-b border-[var(--line)] pb-3 font-mono text-[10px] text-[var(--muted)]">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-500" />
            <span>TCP_ROUTING_EXCEPTION</span>
          </div>
          <span>HTTP/1.1 404</span>
        </div>

        <div className="py-8">
          <span className="font-mono text-5xl font-bold tracking-tight text-[var(--signal)]">
            404
          </span>
          <h1 className="mt-3 text-lg font-bold tracking-tight text-[var(--foreground)]">
            Destination Unreachable // Packet Lost
          </h1>
          <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
            Rute alamat atau paket halaman yang Anda cari tidak ditemukan pada server sistem ini.
          </p>
        </div>

        <div className="border-t border-[var(--line)] pt-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--signal)] px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-[var(--signal)]/90"
          >
            <span>Kembali ke Beranda</span>
            <span>←</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
