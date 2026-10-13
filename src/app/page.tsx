import { LanguageProvider } from "@/context/language-context";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Skills } from "@/components/skills/skills";
import { Work } from "@/components/work/work";
import { Education } from "@/components/education/education";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="mx-auto min-h-screen max-w-7xl px-6 pt-20 md:px-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Education />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
