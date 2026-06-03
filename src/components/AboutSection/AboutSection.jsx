import "./AboutSection.css";

function AboutSection() {
  const services = [
    {
      icon: "⚙️",
      title: "Manpower Solutions",
      description: "Skilled and trained workforce for energy operations and maintenance"
    },
    {
      icon: "🎓",
      title: "Training & Development",
      description: "Comprehensive training programs for operational excellence"
    },
    {
      icon: "🔧",
      title: "Technical Services",
      description: "Expert technical consultation and on-site support"
    },
    {
      icon: "📊",
      title: "Consulting",
      description: "Strategic workforce planning and optimization"
    }
  ];

  const features = [
    "ISO Certified Operations",
    "24/7 Support",
    "Quality Assurance",
    "Cost Effective Solutions",
    "Rapid Deployment",
    "Industry Expertise"
  ];

  return (
    <section className="about-section">
      {/* About Intro */}
      <div className="about-intro">
        <div className="about-container">
          <h2 className="section-title">About South Asia Consultancy</h2>
          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                South Asia Consultancy is India's leading operator-driven energy workforce partner. 
                We specialize in providing skilled professionals, training, and consulting services 
                to energy operations across the country.
              </p>
              <p className="about-text">
                With over 10 years of experience and a network of 500+ trained professionals, 
                we help energy companies scale their operations safely and efficiently.
              </p>
              <ul className="features-list">
                {features.map((feature, index) => (
                  <li key={index}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="400" fill="#f0f3f5" rx="10" />
                  <circle cx="150" cy="100" r="50" fill="#e74c3c" opacity="0.2" />
                  <rect x="50" y="180" width="200" height="150" fill="#2d5a7b" opacity="0.1" rx="5" />
                  <text x="150" y="270" textAnchor="middle" fill="#2d5a7b" fontSize="18" fontWeight="bold">
                    Professional Team
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="about-container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="industries-section">
        <div className="about-container">
          <h2 className="section-title">Industries We Serve</h2>
          <div className="industries-grid">
            {[
              "Oil & Gas",
              "Power Generation",
              "Renewable Energy",
              "Manufacturing",
              "Infrastructure",
              "Utilities"
            ].map((industry, index) => (
              <div key={index} className="industry-tag">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose-us">
        <div className="about-container">
          <h2 className="section-title">Why Choose South Asia Consultancy?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-number">01</div>
              <h4>Proven Track Record</h4>
              <p>Successfully deployed professionals across 50+ industry partners</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">02</div>
              <h4>Quality Assurance</h4>
              <p>ISO certified processes and rigorous quality control measures</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">03</div>
              <h4>Expert Team</h4>
              <p>Experienced professionals with deep industry knowledge</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">04</div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock customer support and rapid issue resolution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;