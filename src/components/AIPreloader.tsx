import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AIPreloaderProps {
  onComplete: () => void;
}

const AIPreloader = ({ onComplete }: AIPreloaderProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);

  const lines = [
    { text: "Booting Cognitive Core . . .", delay: 0 },
    { text: "Neural weights initialized.", delay: 500 },
    { text: "Connecting to data consciousness...", delay: 1000 },
    { text: "Integrating design systems...", delay: 1500 },
    { text: "Synthesizing intelligence with creativity...", delay: 2000 },
    { text: "Hello, I'm Rishit Dhagai.", delay: 2500, highlight: true },
    { text: "Initializing portfolio interface...", delay: 3000 },
    { text: ">> Experience: Engineering Intelligence with Design", delay: 4000, final: true },
  ];

  useEffect(() => {
    if (isSkipped) return;

    const timers = lines.map((line, index) => {
      return setTimeout(() => {
        setCurrentLine(index + 1);
      }, line.delay);
    });

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      timers.forEach(clearTimeout);
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
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 2 === 0 ? "hsl(var(--gradient-cyan))" : "hsl(var(--gradient-violet))",
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Radial Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(108,99,255,0.1),transparent_50%)]" />

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-2xl px-8 space-y-4">
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: currentLine > index ? 1 : 0,
                x: currentLine > index ? 0 : -20,
              }}
              transition={{ duration: 0.3 }}
              className={`font-mono text-lg md:text-xl ${
                line.highlight
                  ? "text-2xl md:text-3xl font-bold gradient-text"
                  : line.final
                  ? "text-xl md:text-2xl font-semibold text-primary"
                  : "text-muted-foreground"
              }`}
              style={{
                textShadow: line.highlight || line.final
                  ? "0 0 20px rgba(0, 229, 255, 0.5), 0 0 40px rgba(108, 99, 255, 0.3)"
                  : "0 0 10px rgba(0, 229, 255, 0.2)",
              }}
            >
              <TypewriterText
                text={line.text}
                isVisible={currentLine > index}
                speed={30}
              />
            </motion.div>
          ))}

          {/* Loading Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: currentLine > 0 ? 1 : 0 }}
            className="mt-8 h-1 bg-muted/20 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              initial={{ width: "0%" }}
              animate={{ width: `${(currentLine / lines.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              style={{
                boxShadow: "0 0 20px rgba(0, 229, 255, 0.6)",
              }}
            />
          </motion.div>
        </div>

        {/* Skip Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={handleSkip}
          className="absolute bottom-8 right-8 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-mono"
          style={{
            textShadow: "0 0 10px rgba(0, 229, 255, 0.3)",
          }}
        >
          [Skip Intro] →
        </motion.button>

        {/* Corner Brackets for Sci-Fi Effect */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary/30" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-secondary/30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary/30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-secondary/30" />
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
