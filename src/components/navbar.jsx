import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/about", label: "Nosotros" },
    { to: "/services", label: "Servicios" },
    { to: "/gallery", label: "Galería" },
    { to: "/contact", label: "Contacto" },
  ];

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50 font-[Montserrat] transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-purple-700 font-extrabold text-lg md:text-xl hover:opacity-90 transition-opacity"
        >
          <img
            src="https://imgur.com/4XXg4mH.jpg"
            alt="Balagan House Logo"
            className="h-9 md:h-10 w-auto rounded-lg shadow-sm"
          />
          <span className="tracking-wide hidden sm:block">Balagan House</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-700 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-700 ${
                  isActive ? "text-purple-700 after:w-full font-semibold" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-700 transition-transform duration-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-inner transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5 py-5 text-gray-700 font-medium">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `hover:text-purple-700 transition-colors ${
                  isActive ? "text-purple-700 font-semibold" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
