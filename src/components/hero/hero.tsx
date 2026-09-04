import { HeroGraphic } from "./hero-graphic";
import { RotatingHeadline } from "./rotating-headline";

export function Hero() {
  return (
    <section
      id="home"
      className="grid min-h-[85vh] items-center gap-12 py-16 md:grid-cols-2"
    >
      <div className="flex flex-col gap-6">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-(--muted)">
          Telecommunication Engineering · Surabaya, Indonesia
        </p>

        <RotatingHeadline />
        <p className="max-w-xl text-base leading-7 text-(--muted) md:text-lg">
          A personal space for my projects, experiments, and the things I&apos;m
          learning along the way.
        </p>

        <div className="flex items-center gap-6 pt-2">
          <a
            href="#work"
            className="text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            View my work
          </a>

          <a
            href="#about"
            className="text-sm text-(--muted) transition-colors hover:text-(--foreground)"
          >
            More about me
          </a>
        </div>
      </div>

      <div className="hidden justify-end md:flex">
        <HeroGraphic />
      </div>
    </section>
  );
}
