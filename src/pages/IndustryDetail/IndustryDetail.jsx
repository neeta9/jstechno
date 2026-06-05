import MainLayout from "../../components/layout/MainLayout/MainLayout";

import IndustryHero from "../../components/industryDetail/IndustryHero/IndustryHero";
import IndustryOverview from "../../components/industryDetail/IndustryOverview/IndustryOverview";
import IndustryChallenges from "../../components/industryDetail/IndustryChallenges/IndustryChallenges";
import IndustrySolutions from "../../components/industryDetail/IndustrySolutions/IndustrySolutions";
import IndustryServices from "../../components/industryDetail/IndustryServices/IndustryServices";
import IndustryStats from "../../components/industryDetail/IndustryStats/IndustryStats";
import IndustryCTA from "../../components/industryDetail/IndustryCTA/IndustryCTA";

function IndustryDetail() {
  return (
    <MainLayout>
      <IndustryHero />
      <IndustryOverview />
      <IndustryChallenges />
      <IndustrySolutions />
      <IndustryServices />
      <IndustryStats />
      <IndustryCTA />
    </MainLayout>
  );
}

export default IndustryDetail;