import MainLayout from "../../components/layout/MainLayout/MainLayout";

import ContactHero from "../../components/contact/ContactHero/ContactHero";
import ContactOffices from "../../components/contact/ContactOffices/ContactOffices";
import ContactMapForm from "../../components/contact/ContactMapForm/ContactMapForm";
import ContactStats from "../../components/contact/ContactStats/ContactStats";
import ContactCTA from "../../components/contact/ContactCTA/ContactCTA";

function Contact() {
  return (
    <MainLayout>
      <ContactHero />
      <ContactOffices />
      <ContactMapForm />
      <ContactStats />
      <ContactCTA />
    </MainLayout>
  );
}

export default Contact;