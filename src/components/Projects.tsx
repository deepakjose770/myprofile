import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'SaberLink',
    description: 'Free educational resources for ENEM and university entrance exams.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveDemo: 'https://projetosocialds3.github.io/SaberLink/',
    github: 'https://github.com/ProjetoSocialDS3/SaberLink'
  },
  {
    title: 'Pyn',
    description: 'A Python-based tool for password analysis and generation, featuring strength evaluation and compromised password detection.',
    technologies: ['Python', 'Security'],
    github: 'https://github.com/emanuellcs/pyn'
  },
  {
    title: 'Drawtcha',
    description: 'A drawing-based CAPTCHA system that uses AI to verify human input. Built with Python, TensorFlow, PyTorch, and React (in development).',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'AI/ML'],
    github: 'https://github.com/emanuellcs/drawtcha'
  },
  {
    title: 'Entropicrust',
    description: 'Rust-based project exploring chaotic systems through high-performance simulations with advanced visualization capabilities.',
    technologies: ['Rust', 'Physics', 'Mathematics', 'Visualization'],
    github: 'https://github.com/emanuellcs/entropicrust'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="project-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.liveDemo && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-muted text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            And more projects coming soon!
          </p>
          
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a
              href="https://github.com/emanuellcs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              See All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};