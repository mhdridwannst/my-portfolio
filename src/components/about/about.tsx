export function About() {
  return (
    <section id="about" className="border-t border-white/10 py-32">
      <div className="grid gap-16 md:grid-cols-[180px_1fr]">
        {/* Label */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-(--muted)">
            About
          </p>
        </div>

        {/* Content */}
        <div>
          <p className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Hi, I&apos;m Mhd. Ridwan, a Telecommunication Engineering student at
            Electronic Engineering Polytechnic Institute of Surabaya (EEPIS) and a
            passionate Software Developer.
          </p>

          <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted)">
                Based in
              </p>

              <p className="mt-3 text-sm">Surabaya, Indonesia</p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted)">
                Focus
              </p>

              <p className="mt-3 text-sm">
                Networking, Cybersecurity,
                <br />
                Software Development
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--muted)">
                Currently
              </p>

              <p className="mt-3 text-sm">
                Learning, building,
                <br />
                experimenting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
