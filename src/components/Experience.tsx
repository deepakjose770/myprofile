import { Card } from './ui/card';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Volunteer Developer',
    company: 'KDE',
    location: 'Mucambo, Ceará, Brasil',
    period: 'June 2025 - Present',
    type: 'Volunteer',
    description: 'Contributing as a volunteer developer to the KDE open-source community.',
    achievements: [
      'Learning and applying C++, Qt, and Git through real contributions',
      'Working on \'good first issues\', including minor bug fixes and UI/UX improvements',
      'Collaborating with experienced developers in code reviews and discussions',
      'Participating in a global open-source project used by millions of users',
      'Gaining practical experience with open-source workflows, CI/CD pipelines, and version control'
    ],
    note: 'This is a self-initiated and unpaid role, focused on learning and contributing to free software.'
  },
  {
    title: 'Intern',
    company: 'Arte Gráfica',
    location: 'Mucambo, Ceará, Brasil',
    period: 'August 2024 - December 2024',
    type: 'Internship',
    description: 'Gained practical experience in graphic design and digital media production.',
    achievements: [
      'Developed skills in graphic design and visual communication',
      'Worked with design software and digital media tools',
      'Collaborated on various design projects and client deliverables',
      'Applied technical knowledge in a professional environment'
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-xl text-primary font-semibold mb-3">
                    {exp.company}
                  </h4>
                </div>
                
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.type}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-foreground mb-3">
                  Key Achievements & Responsibilities:
                </h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {exp.note && (
                <div className="mt-6 p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground italic">
                    {exp.note}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};