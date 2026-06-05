
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../../assets/images/logo.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Industries", path: "/industries" },
    { label: "Recruitment", path: "/recruitment" },
    { label: "Projects", path: "/projects" },
    { label: "Equipment", path: "/equipment" },
    { label: "Clients", path: "/clients" },
    { label: "Careers", path: "/careers" },
  ];

  const serviceItems = [
    { label: "All Services", path: "/services" },
    { label: "Drilling Services", path: "/services#drilling" },
    { label: "Workover & Completion", path: "/services#workover" },
    { label: "Operation & Maintenance", path: "/services#om" },
    { label: "Oilfield Equipment", path: "/services#equipment" },
    { label: "Manpower Supply", path: "/services#manpower" },
  ];

  const mediaItems = [
    { label: "Media Hub", path: "/media" },
    { label: "Blogs", path: "/media/blogs" },
    { label: "News", path: "/media/news" },
    { label: "Gallery", path: "/gallery" },
  ];

  const DropdownLink = ({ item }) => (
    <Link
      to={item.path}
      className="
      group
      relative
      block
      px-6
      py-4
      text-slate-800
      font-medium
      overflow-hidden
      hover:text-red-600
      transition-all
      duration-300
      "
    >
      {item.label}

      <span
        className="
        absolute
        bottom-0
        left-0
        h-[2px]
        w-0
        bg-red-600
        transition-all
        duration-300
        group-hover:w-full
        "
      />
    </Link>
  );

  return (
    <header className="sticky top-0 z-[999] bg-[#071A2F] shadow-lg">

      <nav className="max-w-[1500px] mx-auto h-[80px] px-4 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="shrink-0 mr-8"
        >
          <img
            src={logo}
            alt="South Asia Consultancy"
            className="h-10 sm:h-12 lg:h-14 object-contain"
          />
        </Link>

        {/* Desktop Menu */}

        <div className="hidden xl:flex items-center justify-center gap-7 flex-1">

          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`group relative whitespace-nowrap font-medium transition-all duration-300 hover:text-red-500 ${
                location.pathname === item.path
                  ? "text-red-500"
                  : "text-white"
              }`}
            >
              {item.label}

              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-red-500 transition-all duration-300 ${
                  location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* Services */}

          <div
            className="relative flex items-center h-full"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="group relative flex items-center gap-1 text-white hover:text-red-500 transition whitespace-nowrap">

              Services

              <ChevronDown size={16} />

              <span className="absolute -bottom-2 left-0 h-[2px] bg-red-500 transition-all duration-300 w-0 group-hover:w-full" />

            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2 w-72">
                <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] overflow-hidden border border-slate-200">

                  {serviceItems.map((item) => (
                    <DropdownLink
                      key={item.label}
                      item={item}
                    />
                  ))}

                </div>
              </div>
            )}
          </div>

          {/* Media */}

          <div
            className="relative flex items-center h-full"
            onMouseEnter={() => setMediaOpen(true)}
            onMouseLeave={() => setMediaOpen(false)}
          >
            <button className="group relative flex items-center gap-1 text-white hover:text-red-500 transition whitespace-nowrap">

              Media

              <ChevronDown size={16} />

              <span className="absolute -bottom-2 left-0 h-[2px] bg-red-500 transition-all duration-300 w-0 group-hover:w-full" />

            </button>

            {mediaOpen && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] overflow-hidden border border-slate-200">

                  {mediaItems.map((item) => (
                    <DropdownLink
                      key={item.label}
                      item={item}
                    />
                  ))}

                </div>
              </div>
            )}
          </div>

        </div>

        {/* CTA */}

        <Link
          to="/contact"
          className="
          hidden
          xl:flex
          items-center
          justify-center
          px-14
          h-12
          bg-red-600
          text-white
          rounded-full
          font-semibold
          whitespace-nowrap
          hover:bg-red-700
          hover:-translate-y-1
          transition-all
          duration-300
          "
        >
          Get A Quote
        </Link>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden text-white"
        >
          {mobileOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>

      </nav>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div
          className="
          xl:hidden
          bg-[#071A2F]
          border-t
          border-white/10
          max-h-[calc(100vh-80px)]
          overflow-y-auto
          "
        >
          <div className="flex flex-col px-6 py-6">

            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`py-3 text-lg ${
                  location.pathname === item.path
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-red-500 font-semibold mb-3">
                Services
              </p>

              {serviceItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 pl-4 text-slate-300 hover:text-red-500"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-red-500 font-semibold mb-3">
                Media
              </p>

              {mediaItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 pl-4 text-slate-300 hover:text-red-500"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="
                block
                text-center
                py-3
                bg-red-600
                text-white
                rounded-full
                font-semibold
                "
              >
                Get A Quote
              </Link>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}

export default Navbar;
