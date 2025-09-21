import { Card } from './ui/card';
import { Button } from './ui/button';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Let's Connect</h2>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm always eager to connect with fellow developers, potential collaborators, and anyone interested in technology. 
            Whether you have a project idea, want to discuss AI/ML, open source contributions, or just chat about the latest 
            in software engineering, I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 text-center skill-card animate-slide-in-left">
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
            <p className="text-muted-foreground mb-6">
              emanuellzr01@outlook.com
            </p>
            <Button
              variant="outline"
              asChild
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="mailto:emanuellzr01@outlook.com" className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </Button>
          </Card>
          
          <Card className="p-8 text-center skill-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Github className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-xl font-bold text-foreground mb-3">GitHub</h3>
            <p className="text-muted-foreground mb-6">
              Check out my open source projects and contributions
            </p>
            <Button
              variant="outline"
              asChild
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a 
                href="https://github.com/emanuellcs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                Visit GitHub
              </a>
            </Button>
          </Card>
          
          <Card className="p-8 text-center skill-card animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <Linkedin className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-xl font-bold text-foreground mb-3">LinkedIn</h3>
            <p className="text-muted-foreground mb-6">
              Connect with me professionally
            </p>
            <Button
              variant="outline"
              asChild
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a 
                href="https://www.linkedin.com/in/emanuellcs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                Connect
              </a>
            </Button>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Card className="p-8 max-w-2xl mx-auto skill-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start a Conversation?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you're looking for a developer for your next project, want to collaborate on open source, 
              or just want to chat about technology, I'm always open to meaningful conversations.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              <a href="mailto:emanuellzr01@outlook.com?subject=Let's Connect!" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};