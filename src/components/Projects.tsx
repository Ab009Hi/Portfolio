import { ExternalLink, Github, Eye, Leaf, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import weedDetectionImg from '@/assets/weed-detection.jpg';
import fakeNewsImg from '@/assets/fake-news.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Weed Detection and Classification in Cotton Fields",
      description: "An AI-powered solution to help Indian farmers identify and classify weeds in cotton fields using advanced computer vision models. Features real-time webcam detection, performance analysis, and practical agricultural applications.",
      image: weedDetectionImg,
      technologies: ["ResNet", "Inception", "YOLO", "Flask", "Computer Vision", "Agriculture AI"],
      features: [
        "Real-time weed detection via webcam",
        "Multiple AI model implementation (ResNet, Inception, YOLO)",
        "Performance analysis and comparison",
        "Web-based interface for farmers",
        "Classification of different weed types"
      ],
      impact: "Helping Indian farmers improve crop yield and reduce herbicide usage through precise weed identification",
      icon: <Leaf className="h-6 w-6" />,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Fake News Detection System",
      description: "A machine learning solution to combat misinformation on social media platforms using Natural Language Processing. Employs Naive Bayes classification with advanced NLP preprocessing to identify false information.",
      image: fakeNewsImg,
      technologies: ["Naive Bayes", "NLP", "Python", "Text Processing", "Machine Learning", "Social Impact"],
      features: [
        "Advanced NLP preprocessing pipeline",
        "Naive Bayes classification algorithm",
        "Social media content analysis",
        "Real-time misinformation detection",
        "Accuracy metrics and performance tracking"
      ],
      impact: "Contributing to responsible technology use by identifying and preventing the spread of misinformation",
      icon: <ShieldCheck className="h-6 w-6" />,
      gradient: "from-blue-500 to-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Real-world solutions built with AI/ML to solve meaningful problems and create positive impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover-lift gradient-card border-0 shadow-colorful animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-smooth hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}></div>
                <div className={`absolute top-4 left-4 p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                  {project.icon}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-accent/10 text-accent hover:bg-accent/20 transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="p-4 rounded-lg bg-accent/5 border-l-4 border-accent">
                  <h4 className="font-semibold text-accent mb-2">Real-World Impact</h4>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    className="gradient-primary text-white hover:scale-105 transition-bounce flex-1"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Interested in My Work?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These projects represent my passion for using AI/ML to solve real-world problems. 
            I'm always open to discussing new opportunities and collaborations.
          </p>
          <Button 
            size="lg"
            className="gradient-primary text-white hover:scale-105 transition-bounce shadow-colorful"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;