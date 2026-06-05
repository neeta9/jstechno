import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import DrillingServices from "../pages/Services/DrillingServices/DrillingServices";
import WorkoverCompletion from "../pages/Services/WorkoverCompletion/WorkoverCompletion";
import OAndM from "../pages/Services/OAndM/OAndM";
import OilfieldEquipment from "../pages/Services/OilfieldEquipment/OilfieldEquipment";
import ManpowerSupply from "../pages/Services/ManpowerSupply/ManpowerSupply";
import Industries from "../pages/Industries/Industries";
import Recruitment from "../pages/Recruitment/Recruitment";
import Projects from "../pages/Projects/Projects";
import Equipment from "../pages/Equipment/Equipment";
import Clients from "../pages/Clients/Clients";
import Careers from "../pages/Careers/Careers";
import Media from "../pages/Media/Media";
import Blogs from "../pages/Media/Blogs/Blogs";
import News from "../pages/Media/News/News";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
// import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";
import IndustryDetail from "../pages/IndustryDetail/IndustryDetail";
// import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/drilling" element={<DrillingServices />} />
      <Route path="/services/workover-completion" element={<WorkoverCompletion />} />
      <Route path="/services/oam" element={<OAndM />} />
      <Route path="/services/equipment" element={<OilfieldEquipment />} />
      <Route path="/services/manpower" element={<ManpowerSupply />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/recruitment" element={<Recruitment />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/media" element={<Media />} />
      <Route path="/media/blogs" element={<Blogs />} />
      <Route path="/media/news" element={<News />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/projects/:slug" element={<ProjectDetail />} /> */}

      <Route path="/industries/:slug" element={<IndustryDetail />} />

      {/* <Route path="/services/:slug" element={<ServiceDetail />} /> */}
    </Routes>
  );
}

export default AppRoutes;