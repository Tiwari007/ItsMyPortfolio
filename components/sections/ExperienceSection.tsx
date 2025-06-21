'use client';

import { experiences } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <div className="experience__header">
          <h2 className="experience__title">
            My <span className="experience__title-highlight">Experience</span>
          </h2>
          <div className="experience__title-underline"></div>
          <p className="experience__description">
            My professional journey and the roles that have shaped my career.
          </p>
        </div>

        <div className="experience__timeline">
          {/* Timeline line */}
          <div className="experience__timeline-line"></div>

          <div className="experience__items">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`experience__item ${
                  index % 2 === 0 ? 'experience__item--left' : 'experience__item--right'
                }`}
              >
                {/* Timeline dot */}
                <div className="experience__timeline-dot"></div>

                {/* Content */}
                <div className="experience__content">
                  <div className="experience__card">
                    <div className="experience__card-header">
                      <div className="experience__job-info">
                        <h3 className="experience__job-title">{exp.title}</h3>
                        <p className="experience__company">{exp.company}</p>
                      </div>
                      <div className="experience__job-details">
                        <p className="experience__period">{exp.period}</p>
                        <p className="experience__location">{exp.location}</p>
                      </div>
                    </div>

                    <ul className="experience__description-list">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="experience__description-item">
                          <span className="experience__bullet">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="experience__technologies">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="experience__tech-tag"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="experience__spacer"></div>
              </div>
            ))}
          </div>
        </div>        {/* Download Resume Button */}
        <div className="experience__resume">
          <button className="resume-button">
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
}
