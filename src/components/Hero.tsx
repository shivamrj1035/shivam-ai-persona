import { Button } from "@/components/ui/button";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-gradient-primary">Shivam</span>{" "}
            <span className="text-foreground">Jayswal</span>
          </h1>

          {/* Primary Title */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground">
            <span className="text-primary">Fullstack Developer</span>
            {" | "}
            <span className="text-accent">AI Integrator</span>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Building <span className="text-primary font-semibold">scalable systems</span> and empowering the next generation of{" "}
            <span className="text-accent font-semibold">Python & AI developers</span>
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card hover:glow-primary transition-smooth group"
              asChild
            >
              <a 
                href="https://linkedin.com/in/shivam-jayswal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-smooth" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card hover:glow-accent transition-smooth group"
              asChild
            >
              <a 
                href="https://github.com/shivam-jayswal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Github className="w-5 h-5 group-hover:text-accent transition-smooth" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button 
              onClick={scrollToAbout}
              className="animate-bounce p-2 rounded-full bg-surface-glass/50 hover:bg-surface-glass transition-smooth group"
              aria-label="Scroll to about section"
            >
              <ChevronDown className="w-6 h-6 text-primary group-hover:text-accent transition-smooth" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;