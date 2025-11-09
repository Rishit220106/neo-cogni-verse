import { useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Crop Recommendation System 🌾",
      tagline: "Where AI meets agriculture.",
      theme: "Sustainability × Data Intelligence",
      description:
        "Harnessing machine learning to revolutionize farming decisions. This intelligent system analyzes climate patterns and soil composition to recommend optimal crops with 91% accuracy, empowering farmers with data-driven insights.",
      tech: ["Python", "Scikit-learn", "Streamlit", "Render"],
      impact: "91% accuracy • Climate-adaptive • Real-world deployment",
      buttonColor: "bg-[#00E676] hover:bg-[#00E676]/90 text-black",
      buttonGlow: "hover:shadow-[0_0_30px_rgba(0,230,118,0.6)]",
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      title: "Mask Detection System 😷",
      tagline: "Vision that protects.",
      theme: "Computer Vision × Real-time AI",
      description:
        "Real-time intelligence safeguarding health. Powered by deep learning, this CNN-based system achieves 95% accuracy in detecting face masks, combining TensorFlow's neural networks with OpenCV's computer vision for instant health monitoring.",
      tech: ["TensorFlow", "OpenCV", "Streamlit"],
      impact: "95% accuracy • Real-time detection • CNN-powered",
      buttonColor: "bg-[#00E5FF] hover:bg-[#00E5FF]/90 text-black",
      buttonGlow: "hover:shadow-[0_0_30px_rgba(0,229,255,0.6)]",
      links: {
        live: "#",
        github: "#",
      },
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto mb-8 animate-glow"></div>
          <p className="text-foreground/80 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            Exploring intelligence in motion — where ideas evolve into{" "}
            <span className="gradient-text font-semibold">real-world impact</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated Background - Project Specific */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                {index === 0 ? (
                  // Crop System - Farmland Grid
                  <div className="absolute inset-0">
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(0, 230, 118, 0.2) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 230, 118, 0.2) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        animation: hoveredProject === index ? 'gridMove 15s linear infinite' : 'none',
                      }}
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(0, 230, 118, 0.15), transparent 70%)',
                      }}
                    />
                  </div>
                ) : (
                  // Mask Detection - AI Scan Lines
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-30"
                        style={{
                          top: `${(i + 1) * 12.5}%`,
                          animation: hoveredProject === index 
                            ? `scanLine ${2 + i * 0.3}s ease-in-out infinite`
                            : 'none',
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.15), transparent 70%)',
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Main Card */}
              <div
                className="relative glass-card rounded-3xl overflow-hidden transition-all duration-500 border-2"
                style={{
                  borderColor: hoveredProject === index 
                    ? (index === 0 ? 'rgba(0, 230, 118, 0.4)' : 'rgba(0, 229, 255, 0.4)')
                    : 'rgba(255, 255, 255, 0.1)',
                  transform: hoveredProject === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredProject === index 
                    ? (index === 0 
                        ? '0 20px 60px rgba(0, 230, 118, 0.3)' 
                        : '0 20px 60px rgba(0, 229, 255, 0.3)')
                    : '0 10px 30px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Top Accent Bar */}
                <div 
                  className="h-2"
                  style={{
                    background: index === 0 
                      ? 'linear-gradient(90deg, #00E676, #00C853)' 
                      : 'linear-gradient(90deg, #00E5FF, #00B8D4)',
                  }}
                />

                {/* Content */}
                <div className="p-8 md:p-10 space-y-6">
                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 
                      className="text-3xl md:text-4xl font-bold transition-all duration-300"
                      style={{
                        color: hoveredProject === index 
                          ? (index === 0 ? '#00E676' : '#00E5FF')
                          : 'hsl(var(--foreground))',
                        textShadow: hoveredProject === index 
                          ? (index === 0 
                              ? '0 0 20px rgba(0, 230, 118, 0.6)' 
                              : '0 0 20px rgba(0, 229, 255, 0.6)')
                          : 'none',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-lg font-light italic"
                      style={{
                        color: index === 0 ? '#00E676' : '#00E5FF',
                      }}
                    >
                      {project.tagline}
                    </p>
                  </div>

                  {/* Theme */}
                  <div 
                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm"
                    style={{
                      background: index === 0 
                        ? 'rgba(0, 230, 118, 0.2)' 
                        : 'rgba(0, 229, 255, 0.2)',
                      border: `1px solid ${index === 0 ? 'rgba(0, 230, 118, 0.4)' : 'rgba(0, 229, 255, 0.4)'}`,
                      color: index === 0 ? '#00E676' : '#00E5FF',
                    }}
                  >
                    {project.theme}
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Stats */}
                  <div 
                    className="flex items-center gap-2 text-sm font-mono font-semibold px-4 py-2 rounded-lg backdrop-blur-sm"
                    style={{
                      background: index === 0 
                        ? 'rgba(0, 230, 118, 0.1)' 
                        : 'rgba(0, 229, 255, 0.1)',
                      border: `1px solid ${index === 0 ? 'rgba(0, 230, 118, 0.3)' : 'rgba(0, 229, 255, 0.3)'}`,
                      color: index === 0 ? '#00E676' : '#00E5FF',
                    }}
                  >
                    <Sparkles className="w-4 h-4" />
                    {project.impact}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      size="lg"
                      className={`flex-1 font-semibold transition-all duration-300 ${project.buttonColor} ${project.buttonGlow}`}
                      asChild
                    >
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-6 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Holographic Overlay on Hover */}
              {hoveredProject === index && (
                <div 
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, ${
                      index === 0 ? 'rgba(0, 230, 118, 0.1)' : 'rgba(0, 229, 255, 0.1)'
                    }, transparent 60%)`,
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
              )}
            </div>
          ))}

          {/* Neural Pulse Line Between Projects */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-24 z-20">
            <div 
              className="absolute inset-0 bg-gradient-to-b from-[#00E676] via-primary to-[#00E5FF]"
              style={{
                animation: 'neuralPulse 2s ease-in-out infinite',
                boxShadow: '0 0 20px rgba(0, 229, 255, 0.8), 0 0 40px rgba(0, 230, 118, 0.6)',
              }}
            />
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary"
              style={{
                animation: 'neuralPulse 2s ease-in-out infinite',
                boxShadow: '0 0 15px rgba(0, 229, 255, 1)',
              }}
            />
            <div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full"
              style={{
                background: '#00E676',
                animation: 'neuralPulse 2s ease-in-out infinite',
                boxShadow: '0 0 15px rgba(0, 230, 118, 1)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
