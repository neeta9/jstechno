import { useState } from "react";
import "./ProjectsSection.css";

function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Offshore Drilling Operations",
      location: "UAE",
      description: "Large-scale offshore drilling project with state-of-the-art equipment",
      image: "🛢️"
    },
    {
      title: "Well Workover & Completion",
      location: "Qatar",
      description: "Integrated well workover and completion operations",
      image: "👷"
    },
    {
      title: "O&M Support Services",
      location: "Saudi Arabia",
      description: "Comprehensive operation and maintenance support services",
      image: "⚙️"
    },
  ];

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <p className="section-label">FEATURED PROJECTS</p>
          <h2 className="section-title">Proven Track Record</h2>
        </div>

        <div className="projects-carousel">
          <button className="carousel-btn prev" onClick={handlePrev}>
            ← 
          </button>

          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className={`project-card ${idx === currentProject ? "active" : ""}`}
              >
                <div className="project-image">{project.image}</div>
                <div className="project-content">
                  <p className="project-location">📍 {project.location}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href="#" className="project-link">VIEW DETAILS →</a>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={handleNext}>
            →
          </button>
        </div>

        <div className="projects-cta">
          <a href="/projects" className="cta-link">
            VIEW ALL PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
