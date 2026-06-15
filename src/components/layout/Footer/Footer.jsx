import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Recruitment", path: "/recruitment" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Drilling Services",
    "Workover & Completion",
    "Operations & Maintenance",
    "Equipment Solutions",
    "Manpower Supply",
  ];

  return (
    <footer className="bg-[#0B2341] text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              South Asia Consultancy
            </h3>

            <div className="w-14 h-1 bg-red-600 mb-5"></div>

            <p className="text-slate-300 leading-relaxed text-sm">
              Operator-driven energy workforce partner delivering
              drilling, workover, maintenance, equipment, and manpower
              solutions across oil & gas projects.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/SouthAsiaConsultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:-translate-y-1"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="https://www.linkedin.com/company/southasiaconsultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:-translate-y-1"
              >
                <FaLinkedinIn size={15} />
              </a>

              <a
                href="https://x.com/DSR_SOUTHASIA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:-translate-y-1"
              >
                <FaXTwitter size={15} />
              </a>

              <a
                href="https://www.instagram.com/southasiaconsultancy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:-translate-y-1"
              >
                <FaInstagram size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              Quick Links
            </h4>

            <div className="w-10 h-1 bg-red-600 mb-5"></div>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-red-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              Services
            </h4>

            <div className="w-10 h-1 bg-red-600 mb-5"></div>

            <ul className="space-y-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-slate-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              Contact Info
            </h4>

            <div className="w-10 h-1 bg-red-600 mb-5"></div>

            <div className="space-y-5 text-slate-300 text-sm leading-relaxed">

              <div>
                <p className="font-semibold text-white mb-1">
                  Mumbai Office
                </p>

                <p>
                  1209, 12th Floor, Hubtown Viva Building,
                  Near Mogra Metro Station,
                  Jogeshwari East, Mumbai - 400060
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-1">
                  Ahmedabad Office
                </p>

                <p>
                  402, Orange Mall,
                  Mehsana Highway,
                  Above HDFC Bank,
                  Chandkheda,
                  Ahmedabad - 382424
                </p>

                <p className="mt-3">
                  📞 +91 9316305258
                </p>

                <p>
                  ✉️ info@southasiaconsultancy.com
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-700">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <p className="text-center text-sm text-white">
            © {currentYear} South Asia Consultancy Services Pvt. Ltd.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;