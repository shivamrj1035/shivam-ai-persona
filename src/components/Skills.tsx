import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Globe, 
  Brain, 
  Server, 
  Wrench 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      id: "backend",
      label: "Backend & APIs",
      icon: <Server className="w-5 h-5" />,
      skills: [
        "Python", "Django", "FastAPI", "Celery", "Flower", "REST APIs"
      ]
    },
    {
      id: "frontend",
      label: "Frontend & UI",
      icon: <Globe className="w-5 h-5" />,
      skills: [
        "React.js", "Next.js", "Tailwind CSS", "shadcn UI", "JavaScript"
      ]
    },
    {
      id: "database",
      label: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: [
        "MySQL", "MongoDB", "SQL Server", "PostgreSQL", "Database Design"
      ]
    },
    {
      id: "aiml",
      label: "AI/ML & Tools",
      icon: <Brain className="w-5 h-5" />,
      skills: [
        "Machine Learning", "Deep Learning", "Generative AI", "Gemini AI", "Python ML"
      ]
    },
    {
      id: "tools",
      label: "Tools & Platforms",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        "Docker", "AWS", "GitHub", "Google Workspace", "n8n Automation", "Convex DB"
      ]
    },
    {
      id: "languages",
      label: "Programming",
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        "Python", "JavaScript", "SQL", "Core Java", "Jinja2", "Pandas"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-elevated/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Core <span className="text-gradient-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the full development stack with a focus on scalability and AI integration
          </p>
        </div>

        <Tabs defaultValue="backend" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 bg-surface-glass">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-smooth"
              >
                <div className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden sm:inline">{category.label}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 rounded-lg bg-primary/20">
                      {category.icon}
                    </div>
                    {category.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, index) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium bg-surface-elevated hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                        style={{
                          animationDelay: `${index * 100}ms`
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Skills Highlight */}
        <div className="mt-12 text-center">
          <Card className="glass-card border-border/50 hover:glow-accent transition-smooth max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
                Specialized Expertise
              </h3>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Advanced experience in <span className="text-primary font-semibold">large-scale SQL optimization</span>, 
                <span className="text-accent font-semibold"> Docker containerization</span>, and 
                <span className="text-primary font-semibold"> AI workflow automation</span> with proven track record of 
                delivering 10x efficiency improvements in production environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;