import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center space-x-2 text-lg">
            <span>Made with</span>
            <Heart className="h-5 w-5 text-red-400 animate-pulse" />
            <span>and</span>
            <Code className="h-5 w-5" />
            <span>by Mogusala Abhilash Reddy</span>
          </div>
          
          <div className="flex justify-center space-x-6 text-sm">
            <a 
              href="mailto:abhilashreddy596@gmail.com"
              className="hover:text-accent transition-smooth"
            >
              Email
            </a>
            <a 
              href="https://github.com/abhilashreddy009"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-smooth"
            >
              GitHub
            </a>
            <span className="text-primary-foreground/60">
              © {currentYear} All rights reserved
            </span>
          </div>
          
          <div className="text-xs text-primary-foreground/60">
            Passionate about AI/ML • Full Stack Development • Data Science
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;