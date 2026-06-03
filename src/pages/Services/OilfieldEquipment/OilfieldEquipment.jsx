import MainLayout from "../../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import "./OilfieldEquipment.css";

function OilfieldEquipment() {
  const equipmentTypes = [
    {
      name: "Drilling Rigs",
      count: "15+",
      description: "Land and offshore drilling equipment"
    },
    {
      name: "Production Equipment",
      count: "50+",
      description: "Pumps, compressors, and separators"
    },
    {
      name: "Safety Systems",
      count: "100%",
      description: "Complete safety and emergency equipment"
    },
    {
      name: "Support Vessels",
      count: "8",
      description: "Supply and support vessels"
    }
  ];

  const features = [
    "Regularly maintained and certified equipment",
    "Advanced monitoring and control systems",
    "Compliance with international standards",
    "Rapid deployment capabilities",
    "Backup equipment for continuous operations",
    "Expert technical support"
  ];

  return (
    <MainLayout>
      <PageBanner title="Oilfield Equipment" subtitle="State-of-the-art equipment for reliable field operations" />
      
      <section className="service-detail-section">
        <div className="container">
          <div className="service-intro">
            <h2>Complete Equipment Solutions</h2>
            <p>
              South Asia Consultancy maintains a comprehensive fleet of modern oilfield equipment 
              to support drilling, production, and support operations. All equipment is regularly 
              maintained, certified, and ready for immediate deployment.
            </p>
          </div>

          <div className="equipment-fleet">
            <h3>Our Equipment Fleet</h3>
            <div className="equipment-grid">
              {equipmentTypes.map((eq, idx) => (
                <div key={idx} className="equipment-card">
                  <div className="equipment-count">{eq.count}</div>
                  <h4>{eq.name}</h4>
                  <p>{eq.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="features-section">
            <h3>Equipment Features</h3>
            <div className="features-list">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section">
            <h3>Rent or Charter Equipment</h3>
            <p>Access our comprehensive equipment fleet for your projects</p>
            <a href="/contact" className="cta-button">Inquire Now</a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default OilfieldEquipment;
