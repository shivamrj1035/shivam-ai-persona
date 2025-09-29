import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-elevated/50 border-t border-border/30 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Name and Title */}
          <div>
            <h3 className="text-2xl font-bold text-gradient-primary mb-2">
              Shivam Jayswal
            </h3>
            <p className="text-muted-foreground">
              Fullstack Developer | AI Integrator | Technical Trainer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/shivam-jayswal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface-glass hover:bg-primary/20 transition-smooth group"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="https://linkedin.com/in/shivam-jayswal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface-glass hover:bg-primary/20 transition-smooth group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="mailto:shivam.jayswal.1003@gmail.com"
              className="p-3 rounded-full bg-surface-glass hover:bg-accent/20 transition-smooth group"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-smooth" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto"></div>

          {/* Quote */}
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground italic">
              "Building intelligent, scalable solutions and empowering developers to create the future."
            </p>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Shivam Jayswal. Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and modern web technologies.</span>
          </div>

          {/* Location */}
          <div className="text-xs text-muted-foreground/70">
            Ahmedabad, Gujarat, India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;