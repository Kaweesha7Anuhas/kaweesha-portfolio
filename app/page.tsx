import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { GitHubSection } from "@/components/sections/github";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <GitHubSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}