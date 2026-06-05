import MainLayout from "../../components/layout/MainLayout/MainLayout";

import EquipmentHero from "../../components/equipment/EquipmentHero/EquipmentHero";
import EquipmentOverview from "../../components/equipment/EquipmentOverview/EquipmentOverview";
import EquipmentCategories from "../../components/equipment/EquipmentCategories/EquipmentCategories";
import TechnologySolutions from "../../components/equipment/TechnologySolutions/TechnologySolutions";
import OperationalCapabilities from "../../components/equipment/OperationalCapabilities/OperationalCapabilities";
import EquipmentStats from "../../components/equipment/EquipmentStats/EquipmentStats";
import GlobalDeployment from "../../components/equipment/GlobalDeployment/GlobalDeployment";
import EquipmentCTA from "../../components/equipment/EquipmentCTA/EquipmentCTA";

function Equipment() {
  return (
    <MainLayout>
      <EquipmentHero />
      <EquipmentOverview />
      <EquipmentCategories />
      <TechnologySolutions />
      <OperationalCapabilities />
      <EquipmentStats />
      <GlobalDeployment />
      <EquipmentCTA />
    </MainLayout>
  );
}

export default Equipment;