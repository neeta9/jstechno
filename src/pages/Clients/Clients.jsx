import MainLayout from "../../components/layout/MainLayout/MainLayout";

import ClientsHero from "../../components/clients/ClientsHero/ClientsHero";
import TrustedPartnersLogoWall from "../../components/clients/TrustedPartnersLogoWall/TrustedPartnersLogoWall";
import WhyChooseSAC from "../../components/clients/WhyChooseSAC/WhyChooseSAC";
import ClientSuccessStory from "../../components/clients/ClientSuccessStory/ClientSuccessStory";
import IndustryCoverage from "../../components/clients/IndustryCoverage/IndustryCoverage";
import ClientLogosCarousel from "../../components/clients/ClientLogosCarousel/ClientLogosCarousel";
import ClientsCTA from "../../components/clients/ClientsCTA/ClientsCTA";

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