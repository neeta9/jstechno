import "./ServicesSection.css";

function ServicesSection() {
  const services = [
    {
      icon: "🛢️",
      title: "Drilling Services",
      description: "End-to-end drilling solutions with operational excellence"
    },
    {
      icon: "👷",
      title: "Workover & Completion",
      description: "Safe and efficient workover & completion operations"
    },
    {
      icon: "⚙️",
      title: "O&M Services",
      description: "Reliable operation & maintenance for maximum uptime"
    },
    {
      icon: "🏗️",
      title: "Rig Management",
      description: "Integrated rig management and support services"
    },
    {
      icon: "👥",
      title: "Manpower Supply",
      description: "Skilled, competent & certified workforce on demand"
    },
    {
      icon: "📋",
      title: "More Services",
      description: "Explore our complete range of specialized services"
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="section-header">
          <p className="section-label">OUR SERVICES</p>
          <h2 className="section-title">Comprehensive Oilfield Solutions</h2>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <a href="/services" className="cta-link">
            VIEW ALL SERVICES →
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
