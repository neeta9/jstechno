import MainLayout from "../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import "./Recruitment.css";

function Recruitment() {
  const opportunities = [
    { title: "Experienced Professionals", count: "50+" },
    { title: "Fresh Graduates", count: "30+" },
    { title: "Skilled Technicians", count: "80+" },
    { title: "Safety Officers", count: "15+" },
  ];

  return (
    <MainLayout>
      <PageBanner title="Recruitment" />
      
      <section className="recruitment-section">
        <div className="container">
          <p className="intro-text">
            Join our team of talented professionals dedicated to delivering excellence in the energy sector. We offer competitive compensation and great career growth opportunities.
          </p>

          <div className="opportunities-grid">
            {opportunities.map((opp, idx) => (
              <div key={idx} className="opportunity-card">
                <div className="opp-count">{opp.count}</div>
                <h3>{opp.title}</h3>
              </div>
            ))}
          </div>

          <div className="recruitment-cta">
            <p>Ready to join our team?</p>
            <a href="/contact" className="cta-button">Apply Now</a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Recruitment;
