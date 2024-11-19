import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 300);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full bg-gray-800 text-white shadow-md focus:outline-none transition-opacity duration-300 flex align-center gap-3 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${
        isPressed
          ? "animate-press"
          : "animate-bounce-idle"
      }`}
    >
    <i class="bi bi-arrow-up-circle text-xl"></i>
    </button>
  );
};

export default ScrollToTop;
