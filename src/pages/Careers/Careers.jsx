import MainLayout from "../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import "./Careers.css";

function Careers() {
  const positions = [
    { title: "Senior Drilling Engineer", location: "Abu Dhabi", type: "Full-time" },
    { title: "HSE Officer", location: "Dubai", type: "Full-time" },
    { title: "Field Supervisor", location: "Doha", type: "Full-time" },
    { title: "Technician", location: "Bahrain", type: "Full-time" },
  ];

  return (
    <MainLayout>
      <PageBanner title="Careers" />
      
      <section className="careers-section">
        <div className="container">
          <p className="intro-text">
            We offer exciting career opportunities in the energy sector. Join our dynamic team and grow your career with us.
          </p>

          <div className="positions-grid">
            {positions.map((position, idx) => (
              <div key={idx} className="position-card">
                <h3>{position.title}</h3>
                <p className="location">📍 {position.location}</p>
                <p className="type">{position.type}</p>
                <a href="/contact" className="apply-btn">Apply Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Careers;
