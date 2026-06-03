import MainLayout from "../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import "./About.css";

function About() {
  const values = [
    { title: "Safety First", description: "Safety is our top priority in all operations" },
    { title: "Quality Excellence", description: "Maintaining highest quality standards" },
    { title: "Innovation", description: "Continuously innovating our services" },
    { title: "Integrity", description: "Operating with transparency and honesty" },
  ];

  const team = [
    { role: "Leadership", count: "50+" },
    { role: "Engineers", count: "200+" },
    { role: "Technicians", count: "300+" },
    { role: "Support Staff", count: "150+" },
  ];

  return (
    <MainLayout>
      <PageBanner title="About South Asia Consultancy" />
      
      <section className="about-full-section">
        <div className="container">
          <div className="section-block">
            <h2>Our Journey</h2>
            <p>
              South Asia Consultancy was founded with a vision to be the trusted partner for integrated oilfield services. Over the past two decades, we have grown from a small startup to a leading service provider with operations across multiple continents.
            </p>
            <p>
              Our commitment to safety, quality, and innovation has earned us the trust of major oil & gas operators and helped us build long-term partnerships based on reliability and excellence.
            </p>
          </div>

          <div className="section-block">
            <h2>Our Mission</h2>
            <p>
              To deliver innovative, reliable, and safe integrated oilfield services that help our clients achieve operational excellence and sustainable growth in the energy sector.
            </p>
          </div>

          <div className="section-block">
            <h2>Our Vision</h2>
            <p>
              To be the most trusted and preferred integrated oilfield services provider globally, known for our technical excellence, safety culture, and commitment to customer success.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon">✓</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-description">
            With over 700 skilled professionals, we have the expertise to handle complex oilfield operations.
          </p>
          <div className="team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-count">{member.count}</div>
                <h3>{member.role}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default About;