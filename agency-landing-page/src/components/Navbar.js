import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-gray-800" : "bg-gray-900 shadow-lg text-white"
      }`}
    >
      <div className="max-w-screen-lg mx-auto flex items-center justify-between py-4 px-6 sm:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-blue-500"></div>
          <span className="text-lg font-bold">Startup Landing</span>
        </div>

        {/* Normal Menu (Desktop) */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a href="#home" className="hover:text-purple-600">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-purple-600">
              Services
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-purple-600">
              Pricing
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-purple-600">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#news" className="hover:text-purple-600">
              News
            </a>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <button className="hidden md:block bg-gray-800 text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-900">
          Purchase Now
        </button>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden focus:outline-none"
        >
          <i className="bi bi-list text-2xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-600 font-medium">
          <li>
            <a href="#home" className="hover:text-purple-600 block">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-purple-600 block">
              Services
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-purple-600 block">
              Pricing
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-purple-600 block">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#news" className="hover:text-purple-600 block">
              News
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
