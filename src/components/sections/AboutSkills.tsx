export default function AboutSkills() {
  return (
    <section
      id="about"
      className="container mx-auto max-w-7xl px-6 py-24"
    >
      {/* Section Header ala Label Dokumen Teknis */}
      <div className="mb-12 border-l-4 border-copper pl-4">
        <h2 className="font-mono text-2xl font-bold uppercase tracking-widest text-foreground">
          SYS.CAPABILITIES  DOMAIN
        </h2>
        <p className="mt-2 font-mono text-sm text-muted-foreground">
          [ARCHITECTING PHYSICAL & DIGITAL LAYERS]
        </p>
      </div>

      {/* Grid Industrial (Gak ada lagi rounded-2xl yang menye-menye) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Panel 1: Background (Makan 2 kolom di layar besar) */}
        <div className="border border-border bg-muted/40 p-6 transition-all hover:border-copper/50 md:col-span-2 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between border-b border-border pb-2">
            <h3 className="font-mono text-sm font-semibold text-copper">
              01. BACKGROUND_
            </h3>
            <span className="text-xs text-muted-foreground">
              ID: PENS-TELCOM
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Sebagai mahasiswa Teknik Telekomunikasi, pendekatan saya terhadap
            teknologi bersifat lintas-lapisan (cross-layer). Saya tidak hanya
            menulis kode di tingkat aplikasi, tetapi memahami bagaimana data
            tersebut dirutekan menjadi paket di jaringan, diproses sebagai
            sinyal di perangkat keras, dan bagaimana mencari celah keamanan dari
            ujung ke ujung.
          </p>
        </div>

        {/* Panel 2: Networking */}
        <div className="border border-border bg-muted/40 p-6 transition-all hover:border-copper/50">
          <div className="mb-4 border-b border-border pb-2">
            <h3 className="font-mono text-sm font-semibold text-copper">
              02. NETWORKING_
            </h3>
          </div>
          <ul className="space-y-2 font-mono text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 bg-copper"></span> CCNA Routing &
              Switching
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 bg-copper"></span> Complex Subnetting
              (Class B/C)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 bg-copper"></span> Packet Traffic
              Analysis
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 bg-copper"></span> Topology Architecture
            </li>
          </ul>
        </div>

        {/* Panel 3: Cybersecurity */}
        <div className="border border-border bg-muted/40 p-6 transition-all hover:border-copper/50">
          <div className="mb-4 border-b border-border pb-2">
            <h3 className="font-mono text-sm font-semibold text-copper">
              03. CYBERSECURITY_
            </h3>
          </div>
          <ul className="space-y-2 font-mono text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 bg-copper"></span> Web Exploitation
              (SSTI)
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 bg-copper"></span> Binary Analysis /
              Reverse Engineering
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 bg-copper"></span> Disk Image Forensics
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 bg-copper"></span> picoCTF Active
              Participant
            </li>
          </ul>
        </div>

        {/* Panel 4: Telecom & Hardware (Makan 2 kolom lagi) */}
        <div className="border border-border bg-muted/40 p-6 transition-all hover:border-copper/50 md:col-span-2 lg:col-span-2">
          <div className="mb-4 border-b border-border pb-2">
            <h3 className="font-mono text-sm font-semibold text-copper">
              04. TELECOMMUNICATION & HARDWARE_
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
              Digital Signal Processing
            </span>
            <span className="border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
              LTI Systems Analysis
            </span>
            <span className="border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
              Antenna Directivity
            </span>
            <span className="border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
              Embedded C++
            </span>
            <span className="border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
              Arduino Prototyping
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
