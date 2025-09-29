import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Code, 
  Brain, 
  GitBranch,
  BookOpen,
  Award,
  Lightbulb
} from "lucide-react";

const Training = () => {
  const trainingAreas = [
    {
      title: "Python Development",
      subtitle: "Foundations to Advanced",
      icon: <Code className="w-6 h-6" />,
      description: "Comprehensive Python training covering fundamentals, OOP, web development with Django/FastAPI, and advanced concepts.",
      topics: [
        "Python Fundamentals & Syntax",
        "Object-Oriented Programming",
        "Django Framework Mastery",
        "FastAPI & REST APIs",
        "Database Integration & ORM",
        "Testing & Debugging"
      ],
      color: "primary"
    },
    {
      title: "Smart Development with AI",
      subtitle: "Integrating LLMs & Generative AI",
      icon: <Brain className="w-6 h-6" />,
      description: "Modern development practices incorporating AI tools, LLM integration, and building intelligent applications.",
      topics: [
        "Generative AI Integration",
        "LLM API Implementation", 
        "AI-Powered Automation",
        "Machine Learning Workflows",
        "Prompt Engineering",
        "AI Ethics & Best Practices"
      ],
      color: "accent"
    },
    {
      title: "GitHub for Better Contribution",
      subtitle: "Collaboration & Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      description: "Essential Git workflows, collaboration patterns, and open source contribution strategies for developers.",
      topics: [
        "Git Fundamentals & Workflows",
        "Branch Management Strategies",
        "Pull Request Best Practices",
        "Code Review Processes",
        "Open Source Contribution",
        "Team Collaboration Patterns"
      ],
      color: "primary"
    }
  ];

  const achievements = [
    {
      icon: <Users className="w-5 h-5" />,
      metric: "500+",
      label: "Students Trained",
      description: "across various programs"
    },
    {
      icon: <Award className="w-5 h-5" />,
      metric: "95%",
      label: "Success Rate",
      description: "in skill development"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      metric: "3",
      label: "Core Programs",
      description: "comprehensive curricula"
    }
  ];

  return (
    <section id="training" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-elevated/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="w-12 h-12 text-primary" />
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="text-gradient-primary">Technical Training</span>
              <br />
              <span className="text-xl sm:text-2xl text-muted-foreground font-normal">
                & Community Contribution
              </span>
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering the next generation of developers through comprehensive training programs 
            and hands-on mentorship in cutting-edge technologies
          </p>
        </div>

        {/* Training Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {trainingAreas.map((area, index) => (
            <Card 
              key={area.title}
              className="glass-card border-border/50 hover:glow-primary transition-smooth group h-full"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-${area.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                  <div className={`text-${area.color}`}>
                    {area.icon}
                  </div>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-gradient-primary transition-smooth">
                  {area.title}
                </CardTitle>
                <p className="text-sm text-accent font-medium">
                  {area.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3 text-sm">Key Topics:</h4>
                  <div className="space-y-2">
                    {area.topics.map((topic) => (
                      <div key={topic} className="flex items-start gap-2">
                        <Lightbulb className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Training Impact */}
        {/* <div className="grid md:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.label}
              className="glass-card border-border/50 hover:glow-accent transition-smooth text-center"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="text-accent">
                      {achievement.icon}
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">
                  {achievement.metric}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Training Philosophy */}
        <Card className="glass-card border-border/50 hover:glow-primary transition-smooth">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-6 text-gradient-primary">
              Training Philosophy
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Hands-on Learning
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every concept is reinforced through practical projects and real-world applications, 
                  ensuring students can immediately apply what they learn.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Growth Mindset
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Fostering continuous learning and adaptation to new technologies, 
                  preparing developers for the rapidly evolving tech landscape.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Training;