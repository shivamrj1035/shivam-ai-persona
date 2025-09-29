import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Send,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "shivam.jayswal.1003@gmail.com",
      href: "mailto:shivam.jayswal.1003@gmail.com",
      color: "primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9054401780",
      href: "tel:+919054401780",
      color: "accent"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Ahmedabad, Gujarat, India",
      href: "#",
      color: "primary"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "www.linkedin.com/in/shivam-jayswal-developer",
      color: "primary"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub", 
      href: "https://github.com/shivamrj1035",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-elevated/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build something amazing together? Let's discuss your next project 
            or explore collaboration opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card border-border/50 hover:glow-primary transition-smooth">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-7 h-7 text-primary" />
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're looking for a skilled developer, need technical training, 
                  or want to collaborate on an AI-powered project, I'd love to hear from you.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4 group">
                      <div className={`w-12 h-12 rounded-xl bg-${info.color}/20 flex items-center justify-center group-hover:bg-${info.color}/30 transition-smooth`}>
                        <div className={`text-${info.color}`}>
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{info.label}</p>
                        <a 
                          href={info.href}
                          className={`text-muted-foreground hover:text-${info.color} transition-smooth`}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card border-border/50 hover:glow-accent transition-smooth">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Connect on Social</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="lg"
                      className={`glass-card hover:glow-${social.color} transition-smooth flex-1`}
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        {social.icon}
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <Card className="glass-card border-border/50 hover:glow-primary transition-smooth">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient-primary">
                  Ready to Collaborate?
                </h3>
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-surface-elevated border border-border/50">
                    <h4 className="font-semibold text-primary mb-2">💼 Looking for Development Services?</h4>
                    <p className="text-sm text-muted-foreground">
                      Full-stack development, AI integration, automation solutions, and scalable system architecture.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-surface-elevated border border-border/50">
                    <h4 className="font-semibold text-accent mb-2">🎓 Need Technical Training?</h4>
                    <p className="text-sm text-muted-foreground">
                      Python development, AI integration, and modern development practices for teams and individuals.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-surface-elevated border border-border/50">
                    <h4 className="font-semibold text-primary mb-2">🚀 Have a Project Idea?</h4>
                    <p className="text-sm text-muted-foreground">
                      Let's discuss how we can bring your vision to life with cutting-edge technology and AI.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full hero-gradient text-white hover:opacity-90 transition-smooth glow-primary px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a
                  href="mailto:shivam.jayswal.1003@gmail.com?subject=Let's%20Collaborate&body=Hi%20Shivam,%0A%0AI'd%20like%20to%20discuss%20a%20potential%20collaboration.%0A%0ABest%20regards,"
                  className="flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send a Message
                </a>
              </Button>
              
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white transition-smooth px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a
                  href="https://wa.me/919054401780?text=Hi%20Shivam,%0A%0AI'd%20like%20to%20discuss%20a%20potential%20collaboration.%0A%0ABest%20regards,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send a WhatsApp Message
                </a>
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;