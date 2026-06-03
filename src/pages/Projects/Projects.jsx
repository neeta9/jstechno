import MainLayout from "../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Offshore Drilling Operations",
      location: "UAE",
      description: "Large-scale offshore drilling with integrated support services",
      year: "2023"
    },
    {
      title: "Well Workover Services",
      location: "Qatar",
      description: "Complex well workover and completion operations",
      year: "2023"
    },
    {
      title: "O&M Support Program",
      location: "Saudi Arabia",
      description: "Comprehensive operation and maintenance support",
      year: "2022"
    },
    {
      title: "Rig Management Services",
      location: "Kuwait",
      description: "End-to-end rig management and logistics",
      year: "2022"
    },
  ];

  return (
    <MainLayout>
      <PageBanner title="Featured Projects" />
      
      <section className="projects-section">
        <div className="container">
          <p className="intro-text">
            Our proven track record includes successful completion of complex oilfield projects across the Middle East and South Asia.
          </p>

          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <p className="project-location">📍 {project.location}</p>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Projects;
