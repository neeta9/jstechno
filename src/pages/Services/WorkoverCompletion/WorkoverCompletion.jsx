import MainLayout from "../../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import "./WorkoverCompletion.css";

function WorkoverCompletion() {
  const services = [
    "Well intervention services",
    "Tubing and liner installation",
    "Perforation and stimulation",
    "Sand control solutions",
    "Well testing and evaluation",
    "Production optimization"
  ];

  const advantages = [
    {
      title: "Cost Efficiency",
      description: "Minimize downtime and operational costs with optimized procedures"
    },
    {
      title: "Enhanced Productivity",
      description: "Maximize well productivity through advanced completion techniques"
    },
    {
      title: "Safety Excellence",
      description: "Zero-accident operational record with strict safety protocols"
    },
    {
      title: "Technical Expertise",
      description: "Experienced engineers and field specialists for complex operations"
    }
  ];

  return (
    <MainLayout>
      <PageBanner title="Workover & Completion" subtitle="Expert well workover and completion services for maximum well performance" />
      
      <section className="service-detail-section">
        <div className="container">
          <div className="service-intro">
            <h2>Workover & Completion Excellence</h2>
            <p>
              We provide comprehensive workover and well completion services designed to enhance 
              well productivity and extend field life. Our experienced teams deliver reliable 
              solutions using advanced technology and industry best practices.
            </p>
          </div>

          <div className="services-list">
            <h3>Our Services</h3>
            <div className="services-grid">
              {services.map((service, idx) => (
                <div key={idx} className="service-item">
                  <span className="service-icon">⚙️</span>
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="advantages-section">
            <h3>Key Advantages</h3>
            <div className="advantages-grid">
              {advantages.map((adv, idx) => (
                <div key={idx} className="advantage-card">
                  <h4>{adv.title}</h4>
                  <p>{adv.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section">
            <h3>Optimize Your Well Performance</h3>
            <p>Let our experts help you achieve maximum productivity</p>
            <a href="/contact" className="cta-button">Get Expert Consultation</a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default WorkoverCompletion;
