import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Palette, Server, Smartphone, Zap } from 'lucide-react';
import type { Skill, TimelineItem } from '../types';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 85 },
    { name: 'Java', level: 75 },
  ];

  const technologies = [
    { icon: Code2, name: 'Frontend', color: 'text-blue-600 dark:text-blue-400' },
    { icon: Server, name: 'Backend', color: 'text-green-600 dark:text-green-400' },
    { icon: Database, name: 'Database', color: 'text-purple-600 dark:text-purple-400' },
    { icon: Smartphone, name: 'Mobile', color: 'text-orange-600 dark:text-orange-400' },
    { icon: Palette, name: 'Design', color: 'text-pink-600 dark:text-pink-400' },
    { icon: Zap, name: 'DevOps', color: 'text-yellow-600 dark:text-yellow-400' },
  ];

  const timeline: TimelineItem[] = [
    {
      year: '2024',
      title: 'Senior Developer',
      organization: 'Tech Company',
      description: 'Leading development of scalable web applications',
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      organization: 'Startup Inc',
      description: 'Built and maintained multiple client projects',
    },
    {
      year: '2021',
      title: 'Computer Engineering Degree',
      organization: 'New York University',
      description: 'Graduated with honors in Computer Science',
    },
    {
      year: '2020',
      title: 'Computer Engineering Degree',
      organization: 'New York University',
      description: 'Graduated with honors in Computer Science',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-16" />

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                <div className="text-8xl font-bold text-blue-600 dark:text-blue-400">YN</div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Get to know me!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building exceptional digital experiences.
              With a strong foundation in both frontend and backend technologies, I create seamless,
              user-focused applications that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge with the developer community.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`group p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <tech.icon className={`w-8 h-8 ${tech.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  <p className="text-sm text-center text-gray-700 dark:text-gray-300 font-medium">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            My Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-semibold">
                    {skill.name}
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Journey Timeline
          </h3>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative pl-8 pb-12 border-l-2 border-blue-600 dark:border-blue-400 last:pb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full" />
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">
                    {item.organization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
