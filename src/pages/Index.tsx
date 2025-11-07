import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative">
      {/* Particle background effect */}
      <div className="particles fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.05),transparent_50%)]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
