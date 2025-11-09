import { Calendar, GraduationCap, Trophy, Camera } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const timeline = [
    {
      year: "2023",
      title: "Started B.Tech (CSE – Data Science)",
      icon: GraduationCap,
      subtitle: "Dwarkadas J. Sanghvi College of Engineering • CGPA 9.07",
    },
    {
      year: "2024",
      title: "Built Crop Recommender",
      icon: Trophy,
      subtitle: "ML Project with 91% accuracy for climate-based predictions",
      isProject: true, // Flag to identify non-achievement trophy
    },
    {
      year: "2025",
      title: "Developed Mask Detection System",
      icon: Camera,
      subtitle: "CNN-based real-time mask classification using TensorFlow and OpenCV",
      description: "Built a computer vision model achieving 95% accuracy in live mask detection, leveraging TensorFlow's CNN architecture and OpenCV's real-time video analysis.",
    },
    {
      year: "2025",
      title: "Top 10 Finalist — Incuverse Hackathon",
      icon: Trophy,
      subtitle: "Ranked among the top 10 out of 200 teams",
      description: "Recognized for innovation and technical execution at Incuverse Hackathon 2024, showcasing creative AI powered Deal Checker.",
      isAchievement: true, // Flag to identify achievement trophy
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
              blends AI, creativity, and engineering — from ML-based agriculture and vision projects
              to production-ready tools.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
              He believes that code is not just instruction — it's expression.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            <Calendar className="inline-block mr-2" />
            Journey Timeline
          </h3>
          <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
            {timeline.map((item, index) => {
              const cardRef = useRef(null);
              const isInView = useInView(cardRef, { amount: 0.2 });
              
              return (
                <motion.div
                  key={index}
                  ref={cardRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`bg-[#0f1117]/70 backdrop-blur-lg rounded-2xl border ${
                    item.isAchievement 
                      ? 'border-[#FFD700]/20 bg-gradient-to-b from-[#0f1117]/70 to-[#0f1117]/80 shadow-[0_0_30px_rgba(255,215,0,0.08)] hover:shadow-[0_0_40px_rgba(255,215,0,0.15)]' 
                      : 'border-[#1e293b]/50 shadow-[0_0_30px_rgba(6,182,212,0.03)] hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]'
                  } p-8 md:p-10 transition-all duration-500 ease-out transform hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center border relative group 
                        transition-all duration-500 ease-out hover:scale-105 ${
                        item.isAchievement 
                          ? 'bg-gradient-to-br from-[#2A2000]/90 to-[#1A1500]/80 border-[#FFD700]/30 shadow-[inset_0_0_20px_rgba(255,215,0,0.1),0_0_20px_rgba(255,215,0,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-br after:from-[#FFD700]/10 after:to-transparent after:animate-pulse' 
                          : 'bg-gradient-to-br from-[#0c1c2c]/95 via-[#0f2942]/90 to-[#164e63]/80 border-cyan-900/20 shadow-[inset_0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[inset_0_0_30px_rgba(6,182,212,0.15),0_0_25px_rgba(6,182,212,0.15)] after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-br after:from-cyan-500/5 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500'
                      }`}>
                        {item.icon && <item.icon className={`w-7 h-7 relative z-10 transition-all duration-500 ease-out ${
                          item.isAchievement 
                            ? 'text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]' 
                            : 'text-cyan-300/70 drop-shadow-[0_0_12px_rgba(6,182,212,0.2)] group-hover:text-cyan-200 group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                        }`} />}
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="flex items-center gap-4 mb-1">
                        <span className="bg-gradient-to-r from-[#00E5FF] to-[#6C63FF] bg-clip-text text-transparent 
                          animate-gradient font-extrabold text-2xl md:text-3xl">
                          {item.year}
                        </span>
                        <div className="h-px flex-grow bg-gradient-to-r from-cyan-400/20 to-transparent"></div>
                      </div>
                      <h4 className="text-white font-semibold text-xl md:text-2xl leading-relaxed md:leading-loose">
                        {item.title}
                      </h4>
                      {item.subtitle && (
                        <div className="text-gray-300 text-base md:text-lg italic leading-relaxed">
                          {item.subtitle}
                        </div>
                      )}
                      {item.description && (
                        <p className="text-gray-400 text-[15px] md:text-[17px] leading-relaxed mt-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;