import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Footer />
    </>
  );
}

export default Home;