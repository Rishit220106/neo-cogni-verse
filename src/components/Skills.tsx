import {
  Code2,
  Database,
  Brain,
  GitBranch,
  Layout,
  Server,
  Sparkles,
} from "lucide-react";
import { Suspense, lazy, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SkillOrbit3D = lazy(() => import("./SkillOrbit3D"));

const Skills = () => {
  const [view, setView] = useState<"3d" | "grid">("3d");
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      category: "Languages",
      icon: Code2,
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "C++"],
    },
    {
      category: "AI & ML",
      icon: Brain,
      skills: ["TensorFlow", "Scikit-learn", "OpenCV", "LLMs", "Neural Networks"],
    },
    {
      category: "Frontend",
      icon: Layout,
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      icon: Server,
      skills: ["Flask", "Node.js", "REST APIs", "FastAPI"],
    },
    {
      category: "Data Science",
      icon: Database,
      skills: ["Pandas", "NumPy", "Data Visualization", "Statistical Analysis"],
    },
    {
      category: "Tools",
      icon: GitBranch,
      skills: ["Git", "Docker", "Streamlit", "Render", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <Sparkles className="inline-block mr-3 text-primary" />
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A versatile toolkit for building intelligent systems
          </p>

          {/* View toggle buttons */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setView("3d")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                view === "3d"
                  ? "bg-primary text-primary-foreground glow-cyan"
                  : "glass-card border border-primary/20 text-muted-foreground hover:text-primary"
              }`}
            >
              3D Orbit View
            </button>
            <button
              onClick={() => setView("grid")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                view === "grid"
                  ? "bg-primary text-primary-foreground glow-cyan"
                  : "glass-card border border-primary/20 text-muted-foreground hover:text-primary"
              }`}
            >
              Grid View
            </button>
          </div>
        </div>

        {/* 3D Orbit View */}
        {view === "3d" && (
          <div className="mb-12">
            <Suspense
              fallback={
                <div className="w-full h-[600px] rounded-2xl glass-card flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading 3D visualization...</p>
                  </div>
                </div>
              }
            >
              <SkillOrbit3D />
            </Suspense>
            <div className="text-center mt-6 space-y-2">
              <p className="text-sm text-muted-foreground">
                🖱️ <span className="text-primary font-medium">Drag to rotate</span> • 🔍 <span className="text-secondary font-medium">Scroll to zoom</span> • ✨ <span className="text-cyan font-medium">Hover icons for glow</span>
              </p>
              <p className="text-xs text-muted-foreground/70">
                Interactive 3D skill sphere with orbiting technologies
              </p>
            </div>
          </div>
        )}

        {/* Grid View */}
        {view === "grid" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:glow-cyan transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm rounded-lg bg-muted/20 border border-primary/10 hover:border-primary/40 hover:bg-muted/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          </div>
        )}

        <div className="mt-12 glass-card rounded-2xl p-8 text-center">
          <p className="text-lg text-muted-foreground">
            <span className="gradient-text font-semibold">Always learning,</span> always growing.
            Currently exploring advanced LLM architectures and 3D web experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
