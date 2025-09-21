import { Card } from './ui/card';
import { Globe, Cloud, Brain, Shield, Wrench, Heart } from 'lucide-react';

const skills = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end web applications with modern technologies',
    icon: Globe,
  },
  {
    title: 'Cloud Solutions',
    description: 'AWS, GCP, and Azure cloud architecture',
    icon: Cloud,
  },
  {
    title: 'AI/ML Engineering',
    description: 'PyTorch, TensorFlow, and multimodal AI systems',
    icon: Brain,
  },
  {
    title: 'Security & DevOps',
    description: 'Vulnerability analysis and secure system design',
    icon: Shield,
  },
  {
    title: 'Low-Level Programming',
    description: 'Rust, C/C++, and system-level development',
    icon: Wrench,
  },
  {
    title: 'Open Source',
    description: 'Active contributor to KDE and other projects',
    icon: Heart,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background-alt/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Dynamic and motivated <span className="text-primary font-semibold">Full-Stack Developer</span> with a technology journey that began in May 2019. I specialize in creating robust and scalable digital solutions, from practical web applications and APIs to advanced AI system architectures.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            My commitment is to develop high-impact solutions, integrating Artificial Intelligence, optimizing algorithms, and ensuring software quality. I'm fascinated by the potential of multimodal AI and seek to contribute to tools that enhance security governance and quality.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Currently working as a <span className="text-primary font-semibold">Freelance Full-Stack Developer</span>, facing diverse and complex challenges in AI/ML. I'm focused on designing architectures and developing innovative Multimodal AI systems, passionate about creating effective Security Tools and promoting best practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="skill-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <skill.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};