import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/hero";
import { Work } from "@/components/work/work";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 pt-24 md:px-10">
      <Navbar />
      <Hero />
      <Work />
      <Footer />
    </main>
  );
}
