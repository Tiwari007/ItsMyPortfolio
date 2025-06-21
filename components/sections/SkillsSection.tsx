'use client';

import { useEffect, useRef } from 'react';
import { skillCategories, additionalSkills } from '@/data/skills';

export default function SkillsSection() {
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger progress bar animations with staggered delays
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, index) => {
              const htmlBar = bar as HTMLElement;
              const level = htmlBar.getAttribute('data-level');
              if (level) {
                setTimeout(() => {
                  htmlBar.style.width = `${level}%`;
                }, index * 100); // Stagger animations by 100ms
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fallback: Show skills after component mounts
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (skillsRef.current) {
        const progressBars = skillsRef.current.querySelectorAll('.skill-progress');
        progressBars.forEach((bar) => {
          const htmlBar = bar as HTMLElement;
          const level = htmlBar.getAttribute('data-level');
          if (level && htmlBar.style.width === '0%') {
            htmlBar.style.width = `${level}%`;
          }
        });
      }
    }, 2000);

    return () => clearTimeout(fallbackTimer);
  }, []);  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="skills__container">
        <div className="skills__header">
          <h2>
            My <span className="highlight">Skills</span>
          </h2>
          <p className="description">
            Here are some of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="skills__categories">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills__category">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skills__skill">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        data-level={skill.level}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="skills__additional">
          <h3>Other Technologies I Work With</h3>
          <div className="tech-list">
            {additionalSkills.map((tech, index) => (
              <span key={index} className="tech-item">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
