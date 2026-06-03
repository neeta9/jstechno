import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMedia = () => {
    setIsMediaOpen(!isMediaOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Industries", path: "/industries" },
    { name: "Recruitment", path: "/recruitment" },
    { name: "Projects", path: "/projects" },
    { name: "Equipment", path: "/equipment" },
    { name: "Clients", path: "/clients" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    { name: "All Services", path: "/services" },
    { name: "Drilling Services", path: "/services/drilling" },
    { name: "Workover & Completion", path: "/services/workover-completion" },
    { name: "Operation & Maintenance", path: "/services/oam" },
    { name: "Oilfield Equipment", path: "/services/equipment" },
    { name: "Manpower Supply", path: "/services/manpower" },
  ];

  const mediaItems = [
    { name: "Media Hub", path: "/media" },
    { name: "Blogs", path: "/media/blogs" },
    { name: "News", path: "/media/news" },
    { name: "Gallery", path: "/gallery" },
  ];

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMediaOpen(false);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <span>📧 info@southasiaconsultancy.com</span>
          <span>📞 +971 4 323 4567</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenus}>
            <span>🌐</span> South Asia Consultancy
          </Link>

          {/* Hamburger Menu */}
          <div 
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Menu Items */}
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} onClick={closeMenus}>
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Services Dropdown */}
            <li className={`dropdown ${isServicesOpen ? "active" : ""}`}>
              <button 
                className="dropdown-toggle"
                onClick={toggleServices}
              >
                Services
              </button>
              {isServicesOpen && (
                <ul className="dropdown-menu">
                  {serviceItems.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.path} onClick={closeMenus}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Media Dropdown */}
            <li className={`dropdown ${isMediaOpen ? "active" : ""}`}>
              <button 
                className="dropdown-toggle"
                onClick={toggleMedia}
              >
                Media
              </button>
              {isMediaOpen && (
                <ul className="dropdown-menu">
                  {mediaItems.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.path} onClick={closeMenus}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* CTA Button */}
          <Link to="/contact" className="cta-button">
            GET A QUOTE
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;