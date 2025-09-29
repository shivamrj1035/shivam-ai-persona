import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main About Content */}
          <div>
            <Card className="glass-card border-border/50 hover:glow-primary transition-smooth">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  Passionate <span className="text-primary font-semibold">Fullstack Developer</span> with hands-on experience in 
                  Python, Django, SQL, and React through professional roles and innovative projects. 
                </p>
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  I specialize in building <span className="text-accent font-semibold">scalable applications</span> and 
                  integrating cutting-edge <span className="text-primary font-semibold">Generative AI</span> solutions 
                  to solve real-world problems.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90">
                  Strong collaborator with a <span className="text-accent font-semibold">growth mindset</span>, 
                  eager to continuously develop technical and professional skills while mentoring the next 
                  generation of developers.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats/Highlights */}
          <div className="space-y-6">
            <Card className="glass-card border-border/50 hover:glow-accent transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">1+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Years Experience</h3>
                    <p className="text-muted-foreground">in Software Development</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50 hover:glow-primary transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">AI</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">AI Integration Expert</h3>
                    <p className="text-muted-foreground">Generative AI & Machine Learning</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50 hover:glow-accent transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">10x</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Efficiency Improvement</h3>
                    <p className="text-muted-foreground">through Automation & AI</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;