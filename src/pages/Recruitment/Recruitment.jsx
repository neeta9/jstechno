import MainLayout from "../../components/layout/MainLayout/MainLayout";

import RecruitmentHero from "../../components/Recruitment/RecruitmentHero";
import RecruitmentProcess from "../../components/Recruitment/RecruitmentProcess";
import RecruitmentCTA from "../../components/Recruitment/RecruitmentCTA";

import AboutSAC from "../../components/Recruitment/AboutSAC";
import EngagementModels from "../../components/Recruitment/EngagementModels";
import GlobalReach from "../../components/Recruitment/GlobalReach";
import Certifications from "../../components/Recruitment/Certifications";
import CredibilityStats from "../../components/Recruitment/CredibilityStats";
import WorkforceServices from "../../components/Recruitment/WorkforceServices";
import ShutdownSpecialists from "../../components/Recruitment/ShutdownSpecialists";
import WhyChooseSAC from "../../components/Recruitment/WhyChooseSAC";
import IndustriesServed from "../../components/Recruitment/IndustriesServed";
import InquiryForm from "../../components/Recruitment/InquiryForm";

function Recruitment() {
  return (  
    <MainLayout>
      <RecruitmentHero />
      <Certifications />
      <CredibilityStats />
      <AboutSAC />
      <WorkforceServices />
      <ShutdownSpecialists />
      {/* <WorkforceCategories />
      <KeyStrengths /> */}
      <EngagementModels />
      <WhyChooseSAC />
      <RecruitmentProcess />
      <IndustriesServed />
      <GlobalReach />
      <RecruitmentCTA />
      <InquiryForm />
    </MainLayout>
  );
}

export default Recruitment;