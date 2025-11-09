import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Crop Recommendation System",
      tagline: "Where AI meets agriculture.",
      theme: "Sustainability × Data Intelligence",
      description:
        "Harnessing machine learning to revolutionize farming decisions. This intelligent system analyzes climate patterns and soil composition to recommend optimal crops with 91% accuracy, empowering farmers with data-driven insights.",
      tech: ["Python", "Scikit-learn", "Streamlit", "Render"],
      impact: "91% accuracy • Climate-adaptive • Real-world deployment",
      buttonColor: "bg-[#00E676] hover:bg-[#00E676]/90 text-black",
      buttonGlow: "hover:shadow-[0_0_30px_rgba(0,230,118,0.6)]",
      links: {
        live: "https://crop-recommender-tsqa.onrender.com/",
        github: "https://github.com/Rishit220106/crop-recommender",
      },
    },
    {
      title: "Mask Detection System",
      tagline: "Vision that protects.",
      theme: "Computer Vision × Real-time AI",
      description:
        "Real-time CNN model achieving 95% accuracy for face mask detection using TensorFlow and OpenCV. Combines AI-driven accuracy with health-focused vision analysis.",
      tech: ["TensorFlow", "OpenCV", "Streamlit"],
      impact: "95% accuracy • Real-time detection • CNN-powered",
      buttonColor: "bg-[#00E5FF] hover:bg-[#00E5FF]/90 text-black",
      buttonGlow: "hover:shadow-[0_0_30px_rgba(0,229,255,0.6)]",
      links: {
        // no live demo for second project per spec
        github: "https://github.com/Rishit220106/mask-detection",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-44 h-1 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 mx-auto mb-6 opacity-50"></div>
          <p className="text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Exploring intelligence in motion — where ideas evolve into real-world impact.
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
                        ? 'rgba(0, 230, 118, 0.07)' 
                        : 'rgba(0, 229, 255, 0.07)',
                      border: `1px solid ${index === 0 ? 'rgba(0, 230, 118, 0.15)' : 'rgba(0, 229, 255, 0.15)'}`,
                      color: index === 0 ? '#00E676' : '#00E5FF',
                    }}
                  >
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
                    {/* Action Buttons: show Live Demo only when link exists (Crop) */}
                    {project.links.live && (
                      <Button
                        size="lg"
                        className={`flex-1 font-semibold transition-all duration-300 ${project.buttonColor} ${project.buttonGlow}`}
                        asChild
                      >
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-6 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        GitHub
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
          {/* Vertical glowing divider between the two projects */}
          <div className="hidden md:flex items-center justify-center absolute inset-0 pointer-events-none">
            <div className="w-px h-48 bg-gradient-to-b from-[#00E676] via-transparent to-[#00E5FF] mx-auto" style={{boxShadow: '0 0 40px rgba(0,230,118,0.12), 0 0 60px rgba(0,229,255,0.12)'}} />
          </div>
        </div>
        {/* Minimal keyframes for animations used above */}
        <style>{`
          @keyframes gridMove { from { background-position: 0 0; } to { background-position: 200px 200px; } }
          @keyframes scanLine { 0% { transform: translateX(-100%); opacity: 0 } 50% { opacity: 0.6 } 100% { transform: translateX(100%); opacity: 0 } }
          @keyframes pulse { 0% { opacity: 0.9 } 50% { opacity: 0.6 } 100% { opacity: 0.9 } }
          @keyframes neuralPulse { 0% { transform: scaleY(0.95) } 50% { transform: scaleY(1.05) } 100% { transform: scaleY(0.95) } }
        `}</style>
      </div>
    </section>
  );
};

export default Projects;
