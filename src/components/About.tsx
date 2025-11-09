import { Calendar, GraduationCap, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const timeline = [
    {
      year: "2023",
      title: "Started B.Tech (CSE – Data Science)",
      icon: GraduationCap,
      description: "Dwarkadas J. Sanghvi College of Engineering • CGPA 9.07",
    },
    {
      year: "2024",
      title: "Built Crop Recommender",
      icon: Trophy,
      description: "ML Project with 91% accuracy for climate-based predictions",
    },
    {
      year: "2025",
      title: "Developed SmartBid.AI",
      icon: Trophy,
      description: "Agentic AI platform for Techathon 6.0",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="glass-card p-8 rounded-2xl">
            <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
              <div className="text-8xl font-bold gradient-text">RD</div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Engineering Intelligence with Design</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Rishit Dhagai is a Computer Science & Data Science undergraduate with a 9.07 CGPA at
              Dwarkadas J. Sanghvi College of Engineering.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              He builds intelligent, data-driven systems with clean design and precision. His work
              blends AI, creativity, and engineering — from SmartBid.AI (an agentic automation
              platform) to ML-based agriculture and vision projects.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
              He believes that code is not just instruction — it's expression.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-center mb-12">
            <Calendar className="inline-block mr-2" />
            Journey Timeline
          </h3>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:glow-cyan transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold gradient-text">{item.year}</span>
                      <div className="h-px flex-grow bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
