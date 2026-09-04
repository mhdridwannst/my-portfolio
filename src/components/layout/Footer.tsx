export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 mt-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:h-10 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-mono text-electric-blue">Mhd. Ridwan</span>. Telecommunications Engineering Student at EEPIS (PENS)
        </p>
      </div>
    </footer>
  );
}
