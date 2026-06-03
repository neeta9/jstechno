import MainLayout from "../../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import "./ManpowerSupply.css";

function ManpowerSupply() {
  const services = [
    "Skilled technical professionals",
    "Certified drilling personnel",
    "Operations engineers and supervisors",
    "Safety and HSE specialists",
    "Maintenance technicians",
    "Training and development programs"
  ];

  const workforce = [
    {
      category: "Skilled Technicians",
      count: "500+",
      description: "Certified and experienced field professionals"
    },
    {
      category: "Engineering Staff",
      count: "100+",
      description: "Qualified engineers and project managers"
    },
    {
      category: "Safety Specialists",
      count: "50+",
      description: "HSE and safety compliance experts"
    },
    {
      category: "Supervisors",
      count: "75+",
      description: "Experienced site and operation supervisors"
    }
  ];

  return (
    <MainLayout>
      <PageBanner title="Manpower Supply" subtitle="Skilled workforce for your operational needs" />
      
      <section className="service-detail-section">
        <div className="container">
          <div className="service-intro">
            <h2>Professional Workforce Solutions</h2>
            <p>
              South Asia Consultancy supplies experienced and certified personnel for drilling, 
              operations, maintenance, and support roles. Our workforce undergoes rigorous training 
              and maintains the highest standards of safety and professionalism.
            </p>
          </div>

          <div className="services-list">
            <h3>Available Services</h3>
            <div className="services-grid">
              {services.map((service, idx) => (
                <div key={idx} className="service-item">
                  <span className="service-icon">👥</span>
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="workforce-section">
            <h3>Our Workforce Strength</h3>
            <div className="workforce-grid">
              {workforce.map((wf, idx) => (
                <div key={idx} className="workforce-card">
                  <div className="workforce-count">{wf.count}</div>
                  <h4>{wf.category}</h4>
                  <p>{wf.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section">
            <h3>Hire Skilled Personnel</h3>
            <p>Get the right team for your projects</p>
            <a href="/contact" className="cta-button">Request Manpower</a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ManpowerSupply;
