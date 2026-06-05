import MainLayout from "../../components/layout/MainLayout/MainLayout";

import ServicesHero from "../../components/services/ServicesHero/ServicesHero";
import StickyServiceNavigator from "../../components/services/StickyServiceNavigator/StickyServiceNavigator";
import ServicesOverview from "../../components/services/ServicesOverview/ServicesOverview";
import CoreServicesSection from "../../components/services/CoreServicesSection/CoreServicesSection";
import SpecializedEquipmentGrid from "../../components/services/SpecializedEquipmentGrid/SpecializedEquipmentGrid";
import TrainingSection from "../../components/services/TrainingSection/TrainingSection";
import ServicesCTA from "../../components/services/ServicesCTA/ServicesCTA";

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