import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AIPreloaderProps {
  onComplete: () => void;
}

const AIPreloader = ({ onComplete }: AIPreloaderProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);

  const lines = [
    { text: "Booting Cognitive Core . . .", delay: 0 },
    { text: "Neural weights initialized.", delay: 600 },
    { text: "Connecting to data consciousness...", delay: 1200 },
    { text: "Integrating design systems...", delay: 1800 },
    { text: "Synthesizing intelligence with creativity...", delay: 2400 },
    { text: "Hello, I'm Rishit Dhagai.", delay: 3000, highlight: true },
    { text: "Initializing portfolio interface...", delay: 3800 },
    { text: ">> Experience: Engineering Intelligence with Design", delay: 4600, final: true },
  ];

  useEffect(() => {
    if (isSkipped) return;

    const timers = lines.map((line, index) => {
      return setTimeout(() => {
        setCurrentLine(index + 1);
      }, line.delay);
    });

    // Mark as completing after all lines
    const completingTimer = setTimeout(() => {
      setIsCompleting(true);
    }, 5000);

    // Actually complete after additional 3 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 8000);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completingTimer);
      clearTimeout(completeTimer);
    };
  }, [isSkipped, onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite',
            }}
          />
        </div>

        {/* Enhanced Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                background: i % 2 === 0 ? "hsl(var(--gradient-cyan))" : "hsl(var(--gradient-violet))",
                boxShadow: i % 2 === 0 
                  ? "0 0 20px rgba(0, 229, 255, 0.8)" 
                  : "0 0 20px rgba(108, 99, 255, 0.8)",
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.8, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Multiple Radial Glow Effects */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.15), transparent 70%)",
              "radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.25), transparent 70%)",
              "radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.15), transparent 70%)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 70%, rgba(108, 99, 255, 0.15), transparent 60%)",
              "radial-gradient(circle at 30% 70%, rgba(108, 99, 255, 0.25), transparent 60%)",
              "radial-gradient(circle at 30% 70%, rgba(108, 99, 255, 0.15), transparent 60%)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 70% 30%, rgba(0, 229, 255, 0.1), transparent 60%)",
              "radial-gradient(circle at 70% 30%, rgba(0, 229, 255, 0.2), transparent 60%)",
              "radial-gradient(circle at 70% 30%, rgba(0, 229, 255, 0.1), transparent 60%)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
        />

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-3xl px-8 space-y-6">
          {/* Holographic Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 rounded-2xl border-2 border-primary/20"
            style={{
              background: "linear-gradient(135deg, rgba(0, 229, 255, 0.03), rgba(108, 99, 255, 0.03))",
              boxShadow: "inset 0 0 60px rgba(0, 229, 255, 0.1)",
            }}
          />

          <div className="relative space-y-5">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                animate={{
                  opacity: currentLine > index ? 1 : 0,
                  x: currentLine > index ? 0 : -30,
                  filter: currentLine > index ? "blur(0px)" : "blur(10px)",
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`font-mono ${
                  line.highlight
                    ? "text-3xl md:text-4xl font-bold gradient-text"
                    : line.final
                    ? "text-2xl md:text-3xl font-bold text-primary"
                    : "text-lg md:text-xl text-foreground/80"
                }`}
                style={{
                  textShadow: line.highlight 
                    ? "0 0 30px rgba(0, 229, 255, 0.8), 0 0 60px rgba(108, 99, 255, 0.6), 0 0 90px rgba(0, 229, 255, 0.4)"
                    : line.final
                    ? "0 0 25px rgba(0, 229, 255, 0.7), 0 0 50px rgba(0, 229, 255, 0.4)"
                    : "0 0 15px rgba(0, 229, 255, 0.3)",
                  letterSpacing: line.highlight || line.final ? "0.05em" : "0.02em",
                }}
              >
                <TypewriterText
                  text={line.text}
                  isVisible={currentLine > index}
                  speed={line.highlight ? 40 : 25}
                />
              </motion.div>
            ))}

            {/* Enhanced Loading Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: currentLine > 0 ? 1 : 0 }}
              className="mt-12 space-y-2"
            >
              <div className="h-2 bg-muted/10 rounded-full overflow-hidden backdrop-blur-sm border border-primary/20">
                <motion.div
                  className="h-full relative"
                  style={{
                    background: "linear-gradient(90deg, hsl(var(--gradient-cyan)), hsl(var(--gradient-violet)))",
                    boxShadow: "0 0 30px rgba(0, 229, 255, 0.8), 0 0 60px rgba(108, 99, 255, 0.4)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: isCompleting ? "100%" : `${(currentLine / lines.length) * 100}%` }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                    }}
                  />
                </motion.div>
              </div>
              <div className="text-xs font-mono text-muted-foreground text-right">
                {Math.round((currentLine / lines.length) * 100)}% Complete
              </div>
            </motion.div>

            {/* Completion Animation */}
            {isCompleting && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-4 mt-8"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl"
                >
                  ⚡
                </motion.div>
                <motion.p
                  className="text-xl font-mono gradient-text font-bold"
                  style={{
                    textShadow: "0 0 20px rgba(0, 229, 255, 0.6)",
                  }}
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  System Ready • Launching Experience
                </motion.p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Skip Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={handleSkip}
          className="absolute bottom-8 right-8 px-6 py-3 text-sm font-mono
                     bg-primary/10 hover:bg-primary/20 text-primary 
                     border border-primary/30 rounded-lg
                     transition-all duration-300 backdrop-blur-sm
                     hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
          style={{
            textShadow: "0 0 10px rgba(0, 229, 255, 0.5)",
          }}
        >
          <span className="flex items-center gap-2">
            Skip Intro <span className="text-lg">→</span>
          </span>
        </motion.button>

        {/* Enhanced Corner Brackets with Animation */}
        <motion.div 
          className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-primary/50"
          animate={{
            opacity: [0.3, 1, 0.3],
            boxShadow: [
              "0 0 10px rgba(0, 229, 255, 0.2)",
              "0 0 30px rgba(0, 229, 255, 0.6)",
              "0 0 10px rgba(0, 229, 255, 0.2)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-secondary/50"
          animate={{
            opacity: [0.3, 1, 0.3],
            boxShadow: [
              "0 0 10px rgba(108, 99, 255, 0.2)",
              "0 0 30px rgba(108, 99, 255, 0.6)",
              "0 0 10px rgba(108, 99, 255, 0.2)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
        <motion.div 
          className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-primary/50"
          animate={{
            opacity: [0.3, 1, 0.3],
            boxShadow: [
              "0 0 10px rgba(0, 229, 255, 0.2)",
              "0 0 30px rgba(0, 229, 255, 0.6)",
              "0 0 10px rgba(0, 229, 255, 0.2)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.75 }}
        />
        <motion.div 
          className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-secondary/50"
          animate={{
            opacity: [0.3, 1, 0.3],
            boxShadow: [
              "0 0 10px rgba(108, 99, 255, 0.2)",
              "0 0 30px rgba(108, 99, 255, 0.6)",
              "0 0 10px rgba(108, 99, 255, 0.2)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 2.25 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

// Typewriter component for character-by-character animation
const TypewriterText = ({
  text,
  isVisible,
  speed = 50,
}: {
  text: string;
  isVisible: boolean;
  speed?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isVisible) {
      setDisplayedText("");
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, isVisible, speed]);

  return <span>{displayedText}</span>;
};

export default AIPreloader;
