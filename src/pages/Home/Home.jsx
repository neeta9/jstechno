import MainLayout from "../../components/layout/MainLayout/MainLayout";
// import HeroSection from "../../components/HeroSection/HeroSection";
// import StatsSection from "../../components/StatsSection/StatsSection";
// import AboutSection from "../../components/AboutSection/AboutSection";
// // import ServicesSection from "../../components/sections/ServicesSection/ServicesSection";
// // import ProjectsSection from "../../components/sections/ProjectsSection/ProjectsSection";
// // import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
// // import AwardsSection from "../../components/AwardsSection/AwardsSection";
// // import ClientsSection from "../../components/sections/ClientsSection/ClientsSection";
// // import CTASection from "../../components/CTASection/CTASection";

// function Home() {
//   return (
//     <MainLayout>
//       <HeroSection />
//       <StatsSection />
//       <AboutSection />
//       <ServicesSection />
//       <ProjectsSection />
//       <TestimonialsSection />
//       <AwardsSection />
//       <ClientsSection />
//       <CTASection />
//     </MainLayout>
//   );
// }

// export default Home;

import HomeHero from "../../components/home/HomeHero/HomeHero";
import StatsBar from "../../components/home/StatsBar/StatsBar";
import AboutPreview from "../../components/home/AboutPreview/AboutPreview";
import ServicesPreview from "../../components/home/ServicesPreview/ServicesPreview";
import FeaturedProjects from "../../components/home/FeaturedProjects/FeaturedProjects";
import IndustriesPreview from "../../components/home/IndustriesPreview/IndustriesPreview";
import AwardsSection from "../../components/home/AwardsSection/AwardsSection";
import GlobalWorkforce from "../../components/home/GlobalWorkforce/GlobalWorkforce";
import ClientLogos from "../../components/home/ClientLogos/ClientLogos";

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
      </MainLayout>
    </>
  );
}

export default Home;