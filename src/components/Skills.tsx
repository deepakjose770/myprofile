import { Card } from './ui/card';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Rust', emoji: '🦀' },
      { name: 'Python', emoji: '🐍' },
      { name: 'C/C++', emoji: '⚙️' },
      { name: 'TypeScript', emoji: '📘' },
      { name: 'JavaScript', emoji: '⚡' },
      { name: 'Java', emoji: '☕' },
      { name: 'Go', emoji: '🔷' },
      { name: 'C#', emoji: '💜' },
    ]
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'PyTorch', emoji: '🔥' },
      { name: 'TensorFlow', emoji: '🧠' },
      { name: 'Hugging Face', emoji: '🤗' },
      { name: 'Scikit-learn', emoji: '📊' },
      { name: 'OpenCV', emoji: '👁️' },
      { name: 'Pandas', emoji: '🐼' },
      { name: 'NLP', emoji: '💬' },
      { name: 'Computer Vision', emoji: '📷' },
    ]
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React', emoji: '⚛️' },
      { name: 'Next.js', emoji: '▲' },
      { name: 'Angular', emoji: '🅰️' },
      { name: 'Vue.js', emoji: '💚' },
      { name: 'Node.js', emoji: '🟢' },
      { name: 'Django', emoji: '🎯' },
      { name: 'Flask', emoji: '🌶️' },
      { name: 'Spring Boot', emoji: '🍃' },
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', emoji: '☁️' },
      { name: 'GCP', emoji: '🌐' },
      { name: 'Azure', emoji: '🔵' },
      { name: 'Docker', emoji: '🐳' },
      { name: 'Kubernetes', emoji: '⚓' },
      { name: 'CI/CD', emoji: '🔄' },
      { name: 'Git', emoji: '📝' },
      { name: 'Firebase', emoji: '🔥' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', emoji: '🐘' },
      { name: 'MySQL', emoji: '🗄️' },
      { name: 'MongoDB', emoji: '🍃' },
      { name: 'SQLite', emoji: '💾' },
      { name: 'Redis', emoji: '🔴' },
      { name: 'SQL', emoji: '📊' },
    ]
  },
  {
    title: 'Security & Systems',
    skills: [
      { name: 'Assembly', emoji: '⚡' },
      { name: 'Linux Admin', emoji: '🐧' },
      { name: 'Vulnerability Analysis', emoji: '🔍' },
      { name: 'System Security', emoji: '🛡️' },
      { name: 'NASM/MASM', emoji: '🔧' },
      { name: 'Low-level Programming', emoji: '⚙️' },
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background-alt/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="max-w-6xl mx-auto mb-8">
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            My comprehensive technology stack spans multiple domains, from low-level systems programming to advanced AI/ML solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="p-6 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300 group"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {skill.emoji}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};