import MainLayout from "../../components/layout/MainLayout/MainLayout";

import HomeHero from "../../components/Home/HomeHero";
import StatsBar from "../../components/Home/StatsBar";
import AboutPreview from "../../components/Home/AboutPreview";
import ServicesPreview from "../../components/Home/ServicesPreview";
import FeaturedProjects from "../../components/Home/FeaturedProjects";
import IndustriesPreview from "../../components/Home/IndustriesPreview";
import AwardsSection from "../../components/Home/AwardsSection";
import GlobalWorkforce from "../../components/Home/GlobalWorkforce";
import ClientLogos from "../../components/Home/ClientLogos";
import NewsAndInquiry from "../../components/Home/NewsAndInquiry";
import HomeCTA from "../../components/Home/HomeCTA";
import WhyChooseSAC from "../../components/Home/WhyChooseSAC";

function Home() {
  return (
    <>
    <MainLayout>
      <HomeHero />
      <StatsBar />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedProjects />
      <IndustriesPreview />
      <AwardsSection />
      <GlobalWorkforce />
      <ClientLogos />
      <NewsAndInquiry />
      <HomeCTA />
      <WhyChooseSAC />
      </MainLayout>
    </>
  );
}

export default Home;