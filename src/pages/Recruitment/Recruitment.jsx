import MainLayout from "../../components/layout/MainLayout/MainLayout";

import RecruitmentHero from "../../components/recruitment/RecruitmentHero/RecruitmentHero";
import RecruitmentProcess from "../../components/recruitment/RecruitmentProcess/RecruitmentProcess";
import RecruitmentCTA from "../../components/recruitment/RecruitmentCTA/RecruitmentCTA";
import AboutSAC from "../../components/recruitment/AboutSAC/AboutSAC";

import EngagementModels from "../../components/recruitment/EngagementModels/EngagementModels";
import GlobalReach from "../../components/recruitment/GlobalReach/GlobalReach";
import Certifications from "../../components/recruitment/Certifications/Certifications";
import CredibilityStats from "../../components/recruitment/CredibilityStats/CredibilityStats";
import WorkforceServices from "../../components/recruitment/WorkforceServices/WorkforceServices";
import ShutdownSpecialists from "../../components/recruitment/ShutdownSpecialists/ShutdownSpecialists";
import WhyChooseSAC from "../../components/recruitment/WhyChooseSAC/WhyChooseSAC";
import IndustriesServed from "../../components/recruitment/IndustriesServed/IndustriesServed";
import InquiryForm from "../../components/recruitment/InquiryForm/InquiryForm";

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