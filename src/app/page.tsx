import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SkillsCarousel from "@/components/SkillsCarousel";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#080808]">
      <Hero />
      <About />
      <Services />
      <SkillsCarousel />
      <Projects />
      <Contact />
    </div>
  );
}
