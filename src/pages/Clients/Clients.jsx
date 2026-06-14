import MainLayout from "../../components/layout/MainLayout/MainLayout";

import ClientsHero from "../../components/Clients/ClientsHero";
import TrustedPartnersLogoWall from "../../components/Clients/TrustedPartnersLogoWall";
import WhyChooseSAC from "../../components/Clients/WhyChooseSAC";
import ClientSuccessStory from "../../components/Clients/ClientSuccessStory";
import IndustryCoverage from "../../components/Clients/IndustryCoverage";
import ClientLogosCarousel from "../../components/Clients/ClientLogosCarousel";
import ClientsCTA from "../../components/Clients/ClientsCTA";

function Clients() {
  return (
    <MainLayout>
      <ClientsHero />
      <TrustedPartnersLogoWall />
      <WhyChooseSAC />
      <ClientSuccessStory />
      <IndustryCoverage />
      <ClientLogosCarousel />
      <ClientsCTA />
    </MainLayout>
  );
}

export default Clients;