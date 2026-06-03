import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "HOME",
    "ABOUT US",
    "SERVICES",
    "INDUSTRIES",
    "RECRUITMENT",
    "PROJECTS",
    "EQUIPMENT",
    "CLIENTS",
    "CAREERS",
    "MEDIA",
    "GALLERY",
    "CONTACT",
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="navbar-top">
        <div className="navbar-top-container">
          <div className="contact-info">
            <span className="contact-item">
              <span className="contact-label">EMAIL SUPPORT</span>
              <span>info@southasiaconsultancy.com</span>
            </span>
            <span className="contact-item">
              <span className="contact-label">CALL SUPPORT</span>
              <span>+91 9316305258</span>
            </span>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">𝕏</a>
            <a href="#" className="social-icon">◉</a>
            <a href="#" className="social-icon">in</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo Section */}
          <div className="navbar-logo">
            <div className="logo-icon">SAC</div>
            <div className="logo-text">
              <h2>South Asia Consultancy</h2>
              <p>OPERATOR-DRIVEN ENERGY WORKFORCE PARTNER</p>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Menu Items */}
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            {menuItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="cta-button">GET A QUOTE</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;