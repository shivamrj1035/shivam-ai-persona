import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Music } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Crack It: AI-Based Mock Interview Platform",
      description: "Revolutionary AI-powered platform helping candidates practice mock interviews with personalized feedback and real-time evaluation.",
      icon: <Brain className="w-8 h-8 text-primary" />,
      features: [
        "AI-Generated Questions tailored to job roles",
        "Personalized Feedback with improvement suggestions", 
        "Gemini AI integration for natural conversation",
        "End-to-End Implementation with authentication",
        "Real-time AI evaluation and scoring"
      ],
      technologies: [
        "Next.js", "Convex DB", "Clerk Auth", "n8n Automation", "Gemini AI"
      ],
      highlight: "Featured Project",
      gradient: "from-primary to-accent",
      codeUrl: "https://github.com/shivamrj1035/crack-it",
      // liveUrl: "https://crack-it-demo.vercel.app"
    },
    {
      title: "Sangeet: Harmonizing Music Streaming",
      description: "Full-stack music streaming application with seamless Spotify API integration and modern user experience.",
      icon: <Music className="w-8 h-8 text-accent" />,
      features: [
        "Full-stack architecture with React & Django",
        "Spotify API integration via RapidAPI",
        "MongoDB for complex data flow management",
        "Responsive and intuitive user interface",
        "Efficient music track fetching and management"
      ],
      technologies: [
        "Django", "MongoDB", "React", "RapidAPI", "Spotify API"
      ],
      gradient: "from-accent to-primary",
      codeUrl: "https://github.com/shivamrj1035/sangeet",
      // liveUrl: "https://sangeet-music.herokuapp.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Key <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions showcasing AI integration, full-stack development, and real-world problem solving
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card border-border/50 hover:glow-primary transition-smooth group relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-smooth`}></div>
              
              <CardHeader className="relative">
                {project.highlight && (
                  <Badge className="absolute top-1 right-1 bg-primary text-primary-foreground">
                    {project.highlight}
                  </Badge>
                )}
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-surface-elevated">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-3 group-hover:text-gradient-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-accent mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="bg-surface-elevated border-border/50 hover:border-primary/50 transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  { project.codeUrl &&
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-card hover:glow-primary transition-smooth flex-1"
                    asChild
                  >
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>}
                  { project.liveUrl &&
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-card hover:glow-accent transition-smooth flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-card border-border/50 hover:glow-accent transition-smooth max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Want to see more projects?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for additional projects including automation tools, 
                data analysis scripts, and experimental AI integrations.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-card hover:glow-primary transition-smooth"
                asChild
              >
                <a 
                  href="https://github.com/shivamrj1035/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Github className="w-5 h-5" />
                  Explore GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;