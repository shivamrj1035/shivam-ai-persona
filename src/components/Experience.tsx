import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Zap,
  Database,
  Code,
  Users
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Cerebulb India Pvt. Ltd.",
      role: "Jr. Fullstack Developer",
      location: "GIFT, Gandhinagar, India",
      duration: "Mar 2025 – Present",
      type: "Full-time",
      projects: [
        {
          name: "Asset Performance Management",
          impact: "Optimized large-scale SQL queries and implemented advanced filtering for high-performance data analytics",
          technologies: ["Pandas", "Django", "Flower", "React.js", "Celery", "SQL Server", "Docker"],
          achievements: [
            "Built REST APIs for aggregating large-scale equipment data",
            "Implemented Celery with Django for background data-sync jobs",
            "Customized Flower dashboard for monitoring distributed tasks",
            "Collaborated with QA teams ensuring smooth production delivery"
          ]
        },
        {
          name: "Automation of Asset Metadata & Tag Creation",
          impact: "Delivered 10x improvement in efficiency, eliminating repetitive manual work",
          technologies: ["Python", "FastAPI", "Jinja2", "SQL Server"],
          achievements: [
            "Built end-to-end automation system in just one week",
            "Leveraged AI tools and rapid prototyping skills",
            "Generated PI SDK tags with metadata validation",
            "Reduced manual effort and error rates significantly"
          ]
        }
      ],
      highlight: "Current Role"
    },
    {
      company: "Technman",
      role: "Python Intern",
      location: "India",
      duration: "Jul 2024 – Feb 2025",
      type: "Training & Development",
      projects: [
        {
          name: "Technical Training Programs",
          impact: "Python development and Docker AWS Learning",
          technologies: ["Python", "Django", "AI/ML", "GitHub", "Docker", "AWS"],
          achievements: [
            "Delivered comprehensive Python development courses",
            "Taught Smart Development with AI integration",
            "Mentored students in GitHub collaboration practices",
            "Achieved 95% student satisfaction rating"
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Professional <span className="text-gradient-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering scalable solutions and mentoring excellence across diverse technical environments
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-primary to-accent opacity-30"></div>
              )}
              
              <Card className="glass-card border-border/50 hover:glow-primary transition-smooth relative">
                {exp.highlight && (
                  <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground z-10">
                    {exp.highlight}
                  </Badge>
                )}
                
                <CardHeader>
                  <div className="flex items-start gap-6">
                    {/* Company Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    
                    {/* Company Info */}
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 text-gradient-primary">
                        {exp.company}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          <span className="font-semibold text-accent">{exp.role}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-surface-elevated">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {exp.projects.map((project, projectIndex) => (
                    <div key={project.name} className="space-y-4">
                      {/* Project Header */}
                      <div className="flex items-start gap-4">
                        <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">{project.name}</h4>
                          <div className="flex items-start gap-2 mb-4">
                            <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-primary font-medium">{project.impact}</p>
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="ml-7">
                        <h5 className="font-semibold text-accent mb-2 text-sm">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2 mb-4">
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

                      {/* Achievements */}
                      <div className="ml-7">
                        <h5 className="font-semibold text-primary mb-2 text-sm">Key Contributions:</h5>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <Zap className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16">
          <Card className="glass-card border-border/50 hover:glow-accent transition-smooth">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Data Engineering</h3>
                  <p className="text-sm text-muted-foreground">
                    Specialized in large-scale data processing, SQL optimization, and real-time analytics
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Process Automation</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert in building automation systems that deliver measurable efficiency improvements
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Technical Leadership</h3>
                  <p className="text-sm text-muted-foreground">
                    Proven track record in mentoring developers and delivering complex projects
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;