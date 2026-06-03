import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">SAC</div>
              <div className="footer-logo-text">
                <h4>South Asia Consultancy</h4>
                <p>Energy Workforce Partner</p>
              </div>
            </div>
            <p className="footer-description">
              Your trusted partner for operator-driven energy workforce solutions across India and beyond.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">f</a>
              <a href="#" className="social-link" aria-label="Twitter">𝕏</a>
              <a href="#" className="social-link" aria-label="Instagram">◉</a>
              <a href="#" className="social-link" aria-label="LinkedIn">in</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h5 className="footer-section-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h5 className="footer-section-title">Services</h5>
            <ul className="footer-links">
              <li><a href="#recruitment">Recruitment</a></li>
              <li><a href="#training">Training & Development</a></li>
              <li><a href="#consulting">Consulting</a></li>
              <li><a href="#staffing">Staffing Solutions</a></li>
              <li><a href="#project">Project Management</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h5 className="footer-section-title">Contact Us</h5>
            <div className="contact-item">
              <strong>Email:</strong>
              <a href="mailto:info@southasiaconsultancy.com">
                info@southasiaconsultancy.com
              </a>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <a href="tel:+919316305258">+91 9316305258</a>
            </div>
            <div className="contact-item">
              <strong>Address:</strong>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {currentYear} South Asia Consultancy. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;