import { useEffect, useState, Suspense, lazy } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Scene3D = lazy(() => import("./Scene3D"));

const Hero = () => {
  const [text, setText] = useState("");
  const phrases = [
    "Hi, I'm Rishit.",
    "I design intelligent systems.",
    "I build data-driven experiences.",
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        } else {
          setText(
            isDeleting
              ? currentPhrase.substring(0, text.length - 1)
              : currentPhrase.substring(0, text.length + 1)
          );
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Holographic Sphere Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        
        {/* 3D Scene */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-60 pointer-events-auto">
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
            </div>
          }>
            <Scene3D />
          </Suspense>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="inline-block glass-card px-6 py-2 rounded-full mb-6 glow-cyan">
            <span className="text-sm font-medium gradient-text">Portfolio 2025</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Rishit <span className="gradient-text">Dhagai</span>
        </h1>

        <div className="h-20 md:h-24 flex items-center justify-center mb-8">
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Where data meets design — and intelligence becomes art.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 glow-cyan"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-primary text-primary hover:bg-primary/10"
          >
            Contact Me
          </Button>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce inline-block text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
