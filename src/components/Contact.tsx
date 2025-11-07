import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-primary",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rishit@example.com",
      color: "hover:text-secondary",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Always open to collaboration, research, and creative coding
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-12 glow-cyan">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-muted/10 border-primary/20 focus:border-primary h-12"
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-muted/10 border-primary/20 focus:border-primary h-12"
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-muted/10 border-primary/20 focus:border-primary min-h-32 resize-none"
              />
            </div>
            
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 glass-card rounded-full flex items-center justify-center ${social.color} transition-all hover:scale-110 hover:glow-cyan`}
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        <div className="text-center mt-12 text-muted-foreground">
          <p className="text-sm">
            © 2025 Rishit Dhagai. Designed with intelligence and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
