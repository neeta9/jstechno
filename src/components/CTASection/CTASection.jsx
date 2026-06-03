import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Let's Work Together</h2>
          <p className="cta-description">
            We are ready to deliver the right solution for your next project.
          </p>
          <a href="/contact" className="cta-button">
            REQUEST A QUOTE →
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
