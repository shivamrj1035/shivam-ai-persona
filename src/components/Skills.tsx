import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";

const Skills = () => {
  const { skills: skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-elevated/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical <span className="text-gradient-primary">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building scalable solutions
          </p>
        </div>

        {/* Mobile View - Stacked Cards */}
        <div className="flex flex-col gap-8 md:hidden">
          {skillCategories.map((category) => (
            <Card key={category.id} className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <category.icon className="w-6 h-6" />
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
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop View - Tabs */}
        <div className="hidden md:block">
          <Tabs defaultValue="backend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 bg-surface-glass">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-smooth"
                >
                  <div className="flex items-center gap-2">
                    <category.icon className="w-4 h-4" />
                    <span>{category.label}</span>
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
                        <category.icon className="w-6 h-6" />
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
        </div>
      </div>
    </section>
  );
};

export default Skills;