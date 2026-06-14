import MainLayout from "../../components/layout/MainLayout/MainLayout";

import ProjectsHero from "../../components/Projects/ProjectsHero";
import OperationalFootprint from "../../components/Projects/OperationalFootprint";
import OngoingOperations from "../../components/Projects/OngoingOperations";
import CompletedProjects from "../../components/Projects/CompletedProjects";
import CaseStudies from "../../components/Projects/CaseStudies";
import PerformanceMetrics from "../../components/Projects/PerformanceMetrics";
import GlobalProjectPresence from "../../components/Projects/GlobalProjectPresence";
import ProjectsCTA from "../../components/Projects/ProjectsCTA";

function Projects() {
  return (
    <MainLayout>
      <ProjectsHero />
      <OperationalFootprint />
      <OngoingOperations />
      <CompletedProjects />
      <CaseStudies />
      <PerformanceMetrics />
      <GlobalProjectPresence />
      <ProjectsCTA />
    </MainLayout>
  );
}

export default Projects;