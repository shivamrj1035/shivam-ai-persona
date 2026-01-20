import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Personal <span className="text-gradient-primary">Projects</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Showcasing innovation through practical applications of AI and modern web technologies
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className="glass-card border-border/50 hover:glow-primary transition-smooth group relative overflow-hidden h-full flex flex-col"
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
                      <project.icon className="w-8 h-8 text-primary" />
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

                <CardContent className="relative space-y-6 flex-1 flex flex-col">
                  {/* Key Features */}
                  <div className="flex-1">
                    <h4 className="font-semibold mb-3 text-sm text-accent">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm text-accent">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-surface-elevated border-border/50 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4 mt-auto">
                    {project.codeUrl && (
                      <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" className="flex-1 gap-2" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://github.com/shivamrj1035" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;