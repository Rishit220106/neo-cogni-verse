import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "SmartBid.AI",
      description:
        "Agentic AI platform automating RFP responses for enterprises. Built for Techathon 6.0 with intelligent document processing and proposal generation.",
      tech: ["Next.js", "Tailwind", "Flask", "LLMs"],
      theme: "Business + Intelligence + Automation",
      gradient: "from-primary to-primary/50",
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      title: "Crop Recommendation System",
      description:
        "ML-based system achieving 91% accuracy for climate and soil-based crop prediction. Deployed on Render with an intuitive Streamlit interface.",
      tech: ["Python", "Scikit-learn", "Streamlit", "Render"],
      theme: "Sustainability + Data Science",
      gradient: "from-secondary to-secondary/50",
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      title: "Mask Detection System",
      description:
        "Real-time CNN-based face mask classifier with 95% accuracy. Built using TensorFlow and OpenCV for computer vision-based health monitoring.",
      tech: ["TensorFlow", "OpenCV", "Streamlit"],
      theme: "Computer Vision + Health",
      gradient: "from-primary to-secondary",
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
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Exploring the intersection of AI, data science, and creative engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 hover:glow-cyan"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                
                <p className="text-sm text-secondary font-medium">{project.theme}</p>
                
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-muted/20 border border-primary/20 text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-secondary text-secondary hover:bg-secondary/10"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
