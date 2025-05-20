import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 h-20 ${
        scrolled ? "bg-white text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-center gap-20">
        {/* Categori (hanya tampil di md ke atas) */}
        <Link
          to="/galeri"
          className="hidden md:inline-block hover:underline font-sans font-semibold text-xs px-6 py-2 rounded-full bg-blue-900 hover:bg-white hover:text-blue-900"
        >
          Categori
        </Link>

        {/* Logo (selalu tampil) */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-14 object-contain" />
        </Link>

        {/* Contact (hanya tampil di md ke atas) */}
        <Link
          to="/contact"
          className="hidden md:inline-block hover:underline font-sans font-semibold text-xs px-6 py-2 rounded-full bg-blue-900 hover:bg-white hover:text-blue-900"
        >
          Contact
        </Link>

        {/* Hamburger menu (mobile only) */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-transparent text-white">
          <ul className="flex flex-col gap-3 text-center">
            <li>
              <Link to="/" className="block" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
