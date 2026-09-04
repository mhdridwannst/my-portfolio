export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-16">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Closing */}
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-(--muted)">
            Let&apos;s connect
          </p>

          <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Have an idea, project, or just want to talk tech?
          </h2>

          <a
            href="mailto:your@email.com"
            className="mt-8 inline-block border-b border-current pb-1 text-sm transition-opacity hover:opacity-50"
          >
            mhdridwan@te.student.pens.ac.id
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-col justify-between md:items-end">
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <a
              href="https://github.com/wannn-sion95"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-(--muted) transition-colors hover:text-(--foreground)"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/mhd-ridwan"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-(--muted) transition-colors hover:text-(--foreground)"
            >
              LinkedIn ↗
            </a>

            <a
              href="#home"
              className="text-sm text-(--muted) transition-colors hover:text-(--foreground)"
            >
              Back to top ↑
            </a>
          </div>

          <p className="mt-12 font-mono text-xs leading-5 text-(--muted) md:mt-auto md:pt-24 md:text-right">
            Based in Surabaya, Indonesia
            <br />
            Building, learning, experimenting.
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.15em] text-(--muted) sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Mhd. Ridwan</span>

        <span>Telecommunication Engineering Student</span>
      </div>
    </footer>
  );
}
