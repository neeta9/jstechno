import MainLayout from "../../components/layout/MainLayout/MainLayout";

import IndustriesHero from "../../components/Industries/IndustriesHero";
import IndustriesOverview from "../../components/Industries/IndustriesOverview";
import IndustrySectorGrid from "../../components/Industries/IndustrySectorGrid";
import GlobalReach from "../../components/Industries/GlobalReach";
import SafetyCommitment from "../../components/Industries/SafetyCommitment";
import IndustriesCTA from "../../components/Industries/IndustriesCTA";

function Industries() {
  return (
    <MainLayout>
      <IndustriesHero />
      <IndustriesOverview />
      <IndustrySectorGrid />
      <GlobalReach />
      <SafetyCommitment />
      <IndustriesCTA />
    </MainLayout>
  );
}

export default Industries;