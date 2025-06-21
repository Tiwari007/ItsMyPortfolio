'use client';

import { projects } from '@/data/projects';


function ProjectsSection() {

    return (    
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <h2 className="projects__title">
            My <span className="projects__title-highlight">Projects</span>
          </h2>
          <div className="projects__title-underline"></div>
          <p className="projects__description">
            Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>        
        <div className="projects__grid">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="projects__card"
            >
              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>
                
                <div className="projects__card-tech">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="projects__tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="projects__tech-tag projects__tech-tag--more">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="projects__card-actions">
                  <button 
                    className="projects__btn projects__btn--primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle demo link
                    }}
                  >
                    🔗 Demo
                  </button>
                  <button 
                    className="projects__btn projects__btn--secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle GitHub link
                    }}
                  >
                    📁 Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}


export default ProjectsSection;