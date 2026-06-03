import MainLayout from "../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import "./Industries.css";

function Industries() {
  const industries = [
    {
      title: "Oil & Gas",
      description: "Upstream, midstream and downstream operations",
      icon: "🛢️"
    },
    {
      title: "Power Generation",
      description: "Thermal, hydro and nuclear power plants",
      icon: "⚡"
    },
    {
      title: "Renewable Energy",
      description: "Wind, solar and geothermal projects",
      icon: "♻️"
    },
    {
      title: "Manufacturing",
      description: "Industrial manufacturing and processing",
      icon: "🏭"
    },
    {
      title: "Infrastructure",
      description: "Pipeline and infrastructure projects",
      icon: "🏗️"
    },
    {
      title: "Utilities",
      description: "Water, gas and utilities management",
      icon: "🔧"
    },
  ];

  return (
    <MainLayout>
      <PageBanner title="Industries We Serve" />
      
      <section className="industries-full-section">
        <div className="container">
          <p className="intro-text">
            With expertise across diverse sectors, we deliver specialized solutions tailored to each industry's unique challenges and requirements.
          </p>

          <div className="industries-grid">
            {industries.map((industry, idx) => (
              <div key={idx} className="industry-item">
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Industries;
