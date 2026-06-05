import MainLayout from "../../components/layout/MainLayout/MainLayout";

import ProjectsHero from "../../components/projects/ProjectsHero/ProjectsHero";
import OperationalFootprint from "../../components/projects/OperationalFootprint/OperationalFootprint";
import OngoingOperations from "../../components/projects/OngoingOperations/OngoingOperations";
import CompletedProjects from "../../components/projects/CompletedProjects/CompletedProjects";
import CaseStudies from "../../components/projects/CaseStudies/CaseStudies";
import PerformanceMetrics from "../../components/projects/PerformanceMetrics/PerformanceMetrics";
import GlobalProjectPresence from "../../components/projects/GlobalProjectPresence/GlobalProjectPresence";
import ProjectsCTA from "../../components/projects/ProjectsCTA/ProjectsCTA";

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