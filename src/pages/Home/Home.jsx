import MainLayout from "../../components/layout/MainLayout/MainLayout";
import HeroSection from "../../components/HeroSection/HeroSection";
import StatsSection from "../../components/StatsSection/StatsSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ServicesSection from "../../components/sections/ServicesSection/ServicesSection";
import ProjectsSection from "../../components/sections/ProjectsSection/ProjectsSection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import AwardsSection from "../../components/AwardsSection/AwardsSection";
import ClientsSection from "../../components/sections/ClientsSection/ClientsSection";
import CTASection from "../../components/CTASection/CTASection";

function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <AwardsSection />
      <ClientsSection />
      <CTASection />
    </MainLayout>
  );
}

export default Home;