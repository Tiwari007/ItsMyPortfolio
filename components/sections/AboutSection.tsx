'use client';

import { personalInfo, about } from '@/data/personal';

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__header">
          <h2>
            About <span className="highlight">Me</span>
          </h2>
        </div>

        <div className="about__content">
          {/* Profile Image */}
          <div className="about__image">
            <div className="profile-container">
              <div className="gradient-ring"></div>
              <div className="profile-image">
                {personalInfo.avatar}
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="about__text">
            <h3 className="intro">
              {personalInfo.bio}
            </h3>

            {about.description.map((paragraph, index) => (
              <p key={index} className="description">
                {paragraph}
              </p>
            ))}            
            <div className="about__details">
              <div className="detail-section">
                <h4>🎯 Focus Areas</h4>
                <ul>
                  {about.focusAreas.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-section">
                <h4>💡 Interests</h4>
                <ul>
                  {about.interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="about__traits">
              {about.traits.map((trait, index) => {
                const colors = ['purple', 'pink', 'blue', 'green'];
                const colorClass = colors[index % colors.length];
                return (
                  <span key={index} className={`trait trait--${colorClass}`}>
                    {trait}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
