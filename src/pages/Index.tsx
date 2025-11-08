import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import AIPreloader from "@/components/AIPreloader";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Check if user has seen the preloader before (optional)
    const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");
    if (hasSeenPreloader) {
      setShowPreloader(false);
    }
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("hasSeenPreloader", "true");
    setShowPreloader(false);
  };

  if (showPreloader) {
    return <AIPreloader onComplete={handlePreloaderComplete} />;
  }

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
