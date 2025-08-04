import { Mail, Phone, Github, Linkedin, MapPin, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "abhilashreddy596@gmail.com",
      href: "mailto:abhilashreddy596@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 6309392682",
      href: "tel:+916309392682",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "Ab009Hi",
      href: "https://github.com/Ab009Hi",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "abhilashreddy009",
      href: "https://linkedin.com/in/abhilashreddy009",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "India",
      href: "#",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Connect
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to turn ideas into reality? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about AI/ML and technology. Whether you're looking for a fresh perspective 
                on data science problems or want to explore innovative solutions, I'd love to hear from you!
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index} 
                  className="hover-lift gradient-card border-0 shadow-colorful animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.gradient} text-white`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {contact.label}
                        </h4>
                        {contact.href !== "#" ? (
                          <a 
                            href={contact.href}
                            className="text-accent hover:text-accent/80 transition-smooth"
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{contact.value}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action Card */}
          <div className="animate-fade-in-up">
            <Card className="gradient-card border-0 shadow-colorful overflow-hidden">
              <div className="gradient-hero p-1">
                <div className="bg-background rounded-lg">
                  <CardHeader className="text-center">
                    <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      Ready to Collaborate?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Whether you have a project in mind, want to discuss opportunities, 
                      or just want to connect with a passionate AI/ML developer, I'm here to help.
                    </p>
                    
                    <div className="space-y-3">
                      <Button 
                        size="lg" 
                        className="w-full gradient-primary text-white hover:scale-105 transition-bounce shadow-colorful"
                        asChild
                      >
                        <a href="mailto:abhilashreddy596@gmail.com">
                          <Mail className="mr-2 h-5 w-5" />
                          Send me an Email
                        </a>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="w-full border-accent text-accent hover:bg-accent/10"
                        onClick={() => window.open('https://github.com/abhilashreddy009', '_blank')}
                      >
                        <Github className="mr-2 h-5 w-5" />
                        Check out my GitHub
                      </Button>
                    </div>

                    <div className="mt-8 p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-accent">Available for:</strong> Internships, Junior Developer Positions, 
                        Freelance Projects, Collaborative Research, and Open Source Contributions
                      </p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="gradient-card border-0 shadow-colorful max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                What I'm Looking For
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-medium text-accent mb-2">Opportunities</h4>
                  <p className="text-muted-foreground">
                    Entry-level positions in AI/ML, data science, or full-stack development
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-accent mb-2">Collaborations</h4>
                  <p className="text-muted-foreground">
                    Open source projects, research initiatives, and innovative tech solutions
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-accent mb-2">Learning</h4>
                  <p className="text-muted-foreground">
                    Mentorship, industry insights, and challenging problems to solve
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

export default Contact;