import MainLayout from "../../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import "./DrillingServices.css";

function DrillingServices() {
  const features = [
    "State-of-the-art drilling equipment",
    "Experienced and certified drilling crews",
    "Safety-first operational protocols",
    "24/7 operational support",
    "Real-time monitoring systems",
    "Comprehensive well planning"
  ];

  const capabilities = [
    {
      title: "Onshore Drilling",
      description: "Vertical and deviated wells with depths up to 5000m"
    },
    {
      title: "Offshore Drilling",
      description: "Platform and floating rig operations in shallow to deep waters"
    },
    {
      title: "Extended Reach Wells",
      description: "Complex ERD wells with advanced directional technology"
    },
    {
      title: "Well Optimization",
      description: "Cost-effective drilling with reduced NPT and increased efficiency"
    }
  ];

  return (
    <MainLayout>
      <PageBanner title="Drilling Services" subtitle="Professional drilling solutions for your exploration and production needs" />
      
      <section className="service-detail-section">
        <div className="container">
          <div className="service-intro">
            <h2>Expert Drilling Solutions</h2>
            <p>
              South Asia Consultancy provides comprehensive drilling services with cutting-edge technology 
              and experienced personnel. Our drilling teams deliver reliable, safe, and cost-effective 
              operations across onshore and offshore environments.
            </p>
          </div>

          <div className="features-grid">
            <h3>Why Choose Our Drilling Services</h3>
            <div className="features-list">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <span className="feature-icon">✓</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="capabilities-section">
            <h3>Our Capabilities</h3>
            <div className="capabilities-grid">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="capability-card">
                  <h4>{cap.title}</h4>
                  <p>{cap.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready to Start Your Drilling Project?</h3>
            <p>Contact us today for a consultation and project assessment</p>
            <a href="/contact" className="cta-button">Request a Quote</a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default DrillingServices;
