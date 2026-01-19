import { Button } from "@/components/ui/button";
import { ChevronDown, FileText } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { personal } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-10"></div>
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover opacity-20 animate-pulse-slow"
        />
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-lg opacity-50 animate-pulse"></div>
            <img
              src={personal.profileImage}
              alt={personal.name}
              className="relative w-full h-full rounded-full object-cover border-4 border-background shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-block p-2 px-4 rounded-full bg-surface-elevated border border-border/50 backdrop-blur-sm mb-4"
          >
            <span className="text-sm font-medium text-accent">Available for New Opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          >
            Hi, I'm <span className="text-gradient-primary">{personal.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground/80"
          >
            {personal.role}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-8"
          >
            {personal.socials.map((social) => (
              <Button
                key={social.platform}
                variant="outline"
                size="lg"
                className="glass-card hover:glow-primary transition-smooth group"
                asChild
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <social.icon className="w-5 h-5 group-hover:text-primary transition-smooth" />
                  {social.platform}
                </a>
              </Button>
            ))}

            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth group shadow-glow"
              asChild
            >
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
                download
              >
                <FileText className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20"
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
      </motion.div>
    </section>
  );
};

export default Hero;