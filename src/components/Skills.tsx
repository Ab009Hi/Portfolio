import { Code, Database, Brain, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Java", "JavaScript", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-6 w-6" />,
      skills: ["HTML", "CSS", "React", "Flask"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Machine Learning", "Deep Learning", "YOLO", "ResNet", "Inception", "NLP"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["Data Science", "Performance Analysis", "Model Deployment"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions and scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover-lift gradient-card border-0 shadow-colorful animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} text-white mb-3 mx-auto`}>
                  {category.icon}
                </div>
                <CardTitle className="text-lg text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-accent/10 text-accent hover:bg-accent/20 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Proficiency Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-accent">Strong Foundation</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Python Full Stack", "Machine Learning", "Data Science", "Deep Learning"].map((skill) => (
                  <Badge key={skill} className="gradient-primary text-white">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-accent">Growing Expertise</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Java", "Advanced NLP", "Model Optimization", "Deployment"].map((skill) => (
                  <Badge key={skill} variant="outline" className="border-accent text-accent">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;