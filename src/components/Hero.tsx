import { Button } from './ui/button';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export const Hero = () => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi! I'm{' '}
            <span className="hero-text-gradient">
              Emanuel Lázaro
            </span>
            .
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            A <span className="text-primary font-semibold">Software Engineering Student</span>
          </p>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>Mucambo, Ceará, Brasil</span>
          </div>
          
          <Button
            onClick={() => handleScroll('projects')}
            size="lg"
            className="mb-12 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          >
            View My Work →
          </Button>
          
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/emanuellcs"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/emanuellcs"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a
              href="mailto:emanuellzr01@outlook.com"
              className="social-link"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};