import MainLayout from "../../components/layout/MainLayout/MainLayout";

import EquipmentHero from "../../components/Equipment/EquipmentHero";
import EquipmentOverview from "../../components/Equipment/EquipmentOverview";
import EquipmentCategories from "../../components/Equipment/EquipmentCategories";
import TechnologySolutions from "../../components/Equipment/TechnologySolutions";
import OperationalCapabilities from "../../components/Equipment/OperationalCapabilities";
import EquipmentStats from "../../components/Equipment/EquipmentStats";
import GlobalDeployment from "../../components/Equipment/GlobalDeployment";
import EquipmentCTA from "../../components/Equipment/EquipmentCTA";

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