import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a
          href="#home"
          className="font-mono text-sm font-medium tracking-tight"
        >
          MHD. RIDWAN
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#work"
            className="text-sm text-(--muted) transition-colors hover:text-(--foreground)"
          >
            Work
          </a>

          <a
            href="#about"
            className="text-sm text-(--muted) transition-colors hover:text-(--foreground)"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-(--muted) transition-colors hover:text-(--foreground)"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
