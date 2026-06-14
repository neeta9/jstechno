import MainLayout from "../../components/layout/MainLayout/MainLayout";

import CareersHero from "../../components/Careers/CareersHero";
import WhyWorkWithSAC from "../../components/Careers/WhyWorkWithSAC";
import OpenPositions from "../../components/Careers/OpenPositions";
import RecruitmentProcess from "../../components/Careers/RecruitmentProcess";
import LifeAtSAC from "../../components/Careers/LifeAtSAC";
import ApplicationSection from "../../components/Careers/ApplicationSection";
import CareersCTA from "../../components/Careers/CareersCTA";

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