import React from "react";

const Header = () => {
  return (
    <header className="p-6 bg-gray-900 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Startup Agency</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
