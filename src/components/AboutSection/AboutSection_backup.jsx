import "./AboutSection.css";

function AboutSection() {
  const features = [
    "Industry-leading expertise",
    "Advanced technology & equipment",
    "Strong H&C culture",
    "Customer-centric approach",
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <p className="section-label">ABOUT US</p>
        <h2 className="section-title">A Trusted Partner in Energy and Beyond</h2>

        <div className="about-grid">
          <div className="about-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="200" fill="#e74c3c" opacity="0.2" />
                <rect y="200" width="300" height="200" fill="#1a3a52" opacity="0.1" />
                <circle cx="150" cy="100" r="50" fill="#e74c3c" />
                <text x="150" y="110" textAnchor="middle" fill="white" fontSize="32" fontWeight="bold">
                  SAC
                </text>
              </svg>
            </div>
          </div>

          <div className="about-content">
            <p className="about-text">
              South Asia Consultancy is a leading provider of integrated oilfield services with a strong focus on quality, safety and client satisfaction. We bring technical expertise, advanced equipment and a skilled workforce to deliver results in the most challenging environments.
            </p>

            <ul className="features-list">
              {features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a href="/about" className="know-more-btn">
              KNOW MORE ABOUT US →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
