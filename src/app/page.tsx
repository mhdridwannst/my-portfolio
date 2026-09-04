import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/hero";
import { Work } from "@/components/work/work";
import { Footer } from "@/components/footer/footer";
import { About } from "@/components/about/about";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 pt-24 md:px-10">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Footer />
    </main>
  );
}
