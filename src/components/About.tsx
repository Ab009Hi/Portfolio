import { GraduationCap, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      level: "B.Tech in CSE (AIML)",
      institution: "Malla Reddy University",
      score: "8.5 CGPA",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      level: "Intermediate",
      institution: "Narayana Junior College",
      score: "944 Marks",
      icon: <Target className="h-6 w-6" />
    },
    {
      level: "SSC",
      institution: "Trinity Model Secondary School",
      score: "9.5 CGPA",
      icon: <Heart className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              My Journey
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I recently graduated from <strong className="text-accent">Malla Reddy University</strong> in the AIML department. 
                I love building models and always look for opportunities to make my learning more effective. 
                I'm diving deeper into <strong className="text-accent">data science</strong> to extract meaningful insights from data.
              </p>
              <p>
                I'm also experienced in <strong className="text-accent">Python full stack development</strong>, 
                combining my passion for AI/ML with practical web development skills. My curiosity drives me 
                to explore new technologies and solve real-world problems that can make a positive impact.
              </p>
              <p>
                What sets me apart is my <strong className="text-accent">hands-on learning approach</strong> and 
                dedication to building solutions that matter. Whether it's helping farmers detect weeds in cotton fields 
                or fighting misinformation online, I believe technology should serve humanity.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Educational Background
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="hover-lift gradient-card border-0 shadow-colorful">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="gradient-primary p-2 rounded-lg text-white">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-foreground mb-1">
                          {edu.level}
                        </h4>
                        <p className="text-muted-foreground mb-2">
                          {edu.institution}
                        </p>
                        <p className="font-medium text-accent">
                          {edu.score}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Traits */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Curiosity",
                description: "Always eager to learn new technologies and explore innovative solutions"
              },
              {
                title: "Problem Solving",
                description: "Passionate about tackling real-world challenges with data-driven approaches"
              },
              {
                title: "Hands-on Learning",
                description: "Believe in learning by doing and building practical, impactful projects"
              }
            ].map((trait, index) => (
              <Card key={index} className="hover-lift gradient-card border-0 shadow-colorful">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg text-accent mb-3">
                    {trait.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {trait.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;