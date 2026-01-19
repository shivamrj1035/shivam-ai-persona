import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

const About = () => {
  const { about } = portfolioData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-border/50 hover:glow-primary transition-smooth">
              <CardContent className="p-8 space-y-6">
                {about.description.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed text-foreground/90">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats/Highlights */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {about.stats.map((stat, index) => (
              <motion.div key={index} variants={item}>
                <Card className={`glass-card border-border/50 hover:glow-${stat.color} transition-smooth`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full bg-${stat.color}/20 flex items-center justify-center`}>
                        <span className={`text-2xl font-bold text-${stat.color}`}>{stat.value}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{stat.label}</h3>
                        <p className="text-muted-foreground">{stat.sub}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;