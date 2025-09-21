import { Card } from './ui/card';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: "Bachelor's Degree",
    field: 'Software Engineering',
    institution: 'Estácio',
    period: 'January 2025 - January 2029',
    location: 'Brasil',
    status: 'In Progress',
    type: 'Academic Background'
  },
  {
    degree: 'Formation Course',
    field: 'Software Engineer',
    institution: 'Escola DNC',
    period: 'April 2025 - November 2025',
    location: 'Brasil',
    status: 'In Progress',
    type: 'Professional Training'
  },
  {
    degree: 'Integrated Technical Course',
    field: 'Systems Development',
    institution: 'EEEP Professora Maria de Jesus Rodrigues Alves',
    period: 'January 2022 - December 2024',
    location: 'Brasil',
    status: 'Completed',
    type: 'Technical Education'
  }
];

const certifications = [
  'AWS Lambda',
  'AWS CloudFormation',
  'Amazon Web Services',
  'Jornada de Orientação de Carreira',
  '5G Basics: What it\'s all about (Portuguese)',
  'HCIA-5G V2.0 Course (Portuguese)',
  'React',
  'Introdução ao Desenvolvimento Web'
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-background-alt/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-primary" />
            Academic Background
          </h3>
          
          <div className="space-y-6 mb-12">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="p-6 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h4 className="text-xl font-bold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <h5 className="text-lg text-primary font-semibold mb-2">
                      {edu.field}
                    </h5>
                    <p className="text-muted-foreground mb-3">
                      {edu.institution}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${
                      edu.status === 'Completed' ? 'text-green-400' : 
                      edu.status === 'In Progress' ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      <Award className="w-4 h-4" />
                      <span>{edu.status}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Award className="w-6 h-6 text-primary" />
            Certifications & Courses
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="p-4 animate-fade-in hover:border-primary/50 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};