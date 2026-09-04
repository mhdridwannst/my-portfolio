import { projects } from "@/data/projects";

export function Work() {
  return (
    <section id="work" className="border-t border-white/10 py-32">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-(--muted)">
            Selected Work
          </p>

          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Things I&apos;ve built.
          </h2>
        </div>

        <span className="hidden font-mono text-xs text-(--muted) md:block">
          {String(projects.length).padStart(2, "0")} PROJECTS
        </span>
      </div>

      <div className="border-t border-white/10">
        {projects.map((project) => (
          <a
            key={project.number}
            href="#"
            className="group grid grid-cols-[40px_1fr_auto] gap-6 border-b border-white/10 py-8 transition-opacity duration-300 hover:opacity-60 md:grid-cols-[60px_1fr_140px_60px]"
          >
            <span className="font-mono text-xs text-(--muted)">
              {project.number}
            </span>

            <div>
              <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                {project.title}
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-(--muted)">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="font-mono text-[10px] uppercase tracking-wider text-(--muted)"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <span className="hidden self-start font-mono text-xs text-(--muted) md:block">
              {project.year}
            </span>

            <span className="hidden self-start text-lg md:block">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
