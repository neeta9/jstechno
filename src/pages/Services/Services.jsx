import MainLayout from "../../components/layout/MainLayout/MainLayout";

import ServicesHero from "../../components/services/ServicesHero";
import StickyServiceNavigator from "../../components/services/StickyServiceNavigator";
import ServicesOverview from "../../components/services/ServicesOverview";
import CoreServicesSection from "../../components/services/CoreServicesSection";
import SpecializedEquipmentGrid from "../../components/services/SpecializedEquipmentGrid";
import TrainingSection from "../../components/services/TrainingSection";
import ServicesCTA from "../../components/services/ServicesCTA";

function Services() {
  return (
    <MainLayout>
      <ServicesHero />
      <StickyServiceNavigator />
      <ServicesOverview />
      <CoreServicesSection />
      <SpecializedEquipmentGrid />
      <TrainingSection />
      <ServicesCTA />
    </MainLayout>
  );
}

export default Services;