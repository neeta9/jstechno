import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Drilling", path: "/services" },
    { name: "Workover & Completion", path: "/services" },
    { name: "O&M Services", path: "/services" },
    { name: "Manpower Supply", path: "/services" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>South Asia Consultancy</h3>
          <p>
            Leading provider of integrated oilfield services across the Middle East
            and South Asia with 20+ years of industry experience.
          </p>
          <div className="social-links">
            <a href="#" title="Facebook">f</a>
            <a href="#" title="Twitter">𝕏</a>
            <a href="#" title="LinkedIn">in</a>
            <a href="#" title="Instagram">📷</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            {services.map((service, idx) => (
              <li key={idx}>
                <Link to={service.path}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>
            <strong>Address:</strong>
            <br />
            Office 125, Business Bay, Dubai, UAE
          </p>
          <p>
            <strong>Phone:</strong>
            <br />
            +971 4 323 4567
          </p>
          <p>
            <strong>Email:</strong>
            <br />
            info@southasiaconsultancy.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} South Asia Consultancy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;