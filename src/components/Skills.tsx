import {
  Code2,
  Database,
  Brain,
  Laptop,
  GitBranch,
  Layout,
  Server,
  Sparkles,
} from "lucide-react";

const Skills = () => {
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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <Sparkles className="inline-block mr-3 text-primary" />
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A versatile toolkit for building intelligent systems
          </p>
        </div>

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

        <div className="mt-16 glass-card rounded-2xl p-8 text-center">
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
