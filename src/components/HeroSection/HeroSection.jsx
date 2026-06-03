import "./HeroSection.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">We Help Energy Operations Scale Safely</h1>
          <p className="hero-subtitle">
            Your trusted partner for operator-driven energy workforce solutions across India and beyond
          </p>
          
          <div className="hero-cta">
            <button className="btn btn-primary">Start Today</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Professionals Deployed</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Industry Partners</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-placeholder">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: "#2d5a7b", stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: "#e74c3c", stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <circle cx="200" cy="200" r="150" fill="url(#grad1)" opacity="0.3" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="#e74c3c" strokeWidth="2" />
              <text x="200" y="210" textAnchor="middle" fill="#fff" fontSize="48" fontWeight="bold">SAC</text>
            </svg>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}

export default Hero;