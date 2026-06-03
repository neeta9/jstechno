import MainLayout from "../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  const services = [
    {
      icon: "🛢️",
      title: "Drilling Services",
      description: "End-to-end drilling solutions with state-of-the-art equipment and experienced crews",
      link: "/services/drilling"
    },
    {
      icon: "👷",
      title: "Workover & Completion",
      description: "Safe and efficient workover and completion operations for maximum well productivity",
      link: "/services/workover-completion"
    },
    {
      icon: "⚙️",
      title: "Operation & Maintenance",
      description: "Reliable operation and maintenance support for continuous field productivity",
      link: "/services/oam"
    },
    {
      icon: "🏭",
      title: "Oilfield Equipment",
      description: "Complete fleet of modern equipment for drilling, production, and support operations",
      link: "/services/equipment"
    },
    {
      icon: "👥",
      title: "Manpower Supply",
      description: "Skilled, certified and trained workforce tailored to your requirements",
      link: "/services/manpower"
    },
    {
      icon: "📋",
      title: "Consulting Services",
      description: "Expert technical consultation for operational optimization",
      link: "/services"
    },
  ];

  return (
    <MainLayout>
      <PageBanner title="Our Services" subtitle="Comprehensive oilfield solutions for your operational needs" />
      
      <section className="services-full-section">
        <div className="container">
          <div className="services-intro">
            <h2>World-Class Oilfield Services</h2>
            <p>
              South Asia Consultancy provides comprehensive oilfield services designed to maximize operational 
              efficiency, ensure safety, and deliver exceptional results across onshore and offshore operations.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, idx) => (
              <Link key={idx} to={service.link} className="service-item">
                <div className="service-icon-large">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-arrow">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Services;