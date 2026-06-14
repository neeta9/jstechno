import MainLayout from "../../components/layout/MainLayout/MainLayout";

import AboutHero from "../../components/About/AboutHero";
import CompanyOverview from "../../components/About/CompanyOverview";
import ExpertiseHighlights from "../../components/About/ExpertiseHighlights";
import VisionMission from "../../components/About/VisionMission";
import QHSESection from "../../components/About/QHSESection";
import LeadershipSection from "../../components/About/LeadershipSection";
import AwardsAndAccreditation from "../../components/About/AwardsAndAccreditation";
import TeamShowcase from "../../components/About/TeamShowcase";
import GroupCompanies from "../../components/About/GroupCompanies";
import AboutCTA from "../../components/About/AboutCTA";

function About() {
  return (
    <MainLayout>
      <AboutHero />
      <CompanyOverview />
      <ExpertiseHighlights />
      <VisionMission />
      <QHSESection />
      <LeadershipSection />
      <AwardsAndAccreditation />
      <TeamShowcase />
      <GroupCompanies />
      <AboutCTA />
    </MainLayout>
  );
}

export default About;