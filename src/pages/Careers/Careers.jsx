import MainLayout from "../../components/layout/MainLayout/MainLayout";

import CareersHero from "../../components/careers/CareersHero/CareersHero";
import WhyWorkWithSAC from "../../components/careers/WhyWorkWithSAC/WhyWorkWithSAC";
import OpenPositions from "../../components/careers/OpenPositions/OpenPositions";
import RecruitmentProcess from "../../components/careers/RecruitmentProcess/RecruitmentProcess";
import LifeAtSAC from "../../components/careers/LifeAtSAC/LifeAtSAC";
import ApplicationSection from "../../components/careers/ApplicationSection/ApplicationSection";
import CareersCTA from "../../components/careers/CareersCTA/CareersCTA";

function Careers() {
  return (
    <MainLayout>

      <CareersHero />

      <WhyWorkWithSAC />

      <OpenPositions />

      <RecruitmentProcess />

      <LifeAtSAC />

      <ApplicationSection />

      <CareersCTA />

    </MainLayout>
  );
}

export default Careers;