import MainLayout from "../../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import "./OAndM.css";

function OAndM() {
  const services = [
    "Daily operational management",
    "Preventive maintenance programs",
    "Equipment inspection and certification",
    "24/7 emergency response",
    "Production monitoring systems",
    "Performance optimization"
  ];

  const benefits = [
    {
      title: "Continuous Operations",
      description: "Ensure uninterrupted production with proactive maintenance"
    },
    {
      title: "Cost Reduction",
      description: "Minimize unexpected downtime and maintenance costs"
    },
    {
      title: "Equipment Reliability",
      description: "Extend equipment life with preventive maintenance strategies"
    },
    {
      title: "Expert Management",
      description: "Dedicated teams for 24/7 operational oversight"
    }
  ];

  return (
    <MainLayout>
      <PageBanner title="Operation & Maintenance" subtitle="Reliable O&M services ensuring continuous field productivity" />
      
      <section className="service-detail-section">
        <div className="container">
          <div className="service-intro">
            <h2>Operation & Maintenance Excellence</h2>
            <p>
              South Asia Consultancy provides comprehensive operation and maintenance services 
              to ensure continuous, safe, and efficient field operations. Our dedicated teams 
              manage daily activities while implementing preventive maintenance to minimize downtime.
            </p>
          </div>

          <div className="services-list">
            <h3>O&M Services</h3>
            <div className="services-grid">
              {services.map((service, idx) => (
                <div key={idx} className="service-item">
                  <span className="service-icon">🔧</span>
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="benefits-section">
            <h3>Key Benefits</h3>
            <div className="benefits-grid">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="benefit-card">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section">
            <h3>Ensure Operational Excellence</h3>
            <p>Partner with us for reliable O&M services</p>
            <a href="/contact" className="cta-button">Schedule a Meeting</a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default OAndM;
