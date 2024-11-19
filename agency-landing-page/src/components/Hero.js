import React from "react";

import paperPlaneLeft from "../assets/svg/paperplane-left.svg";
import paperPlaneRight from "../assets/svg/paperplane-right.svg";
import patternSquare from "../assets/svg/pattern-square.svg";
import patternCircle from "../assets/svg/pattern-circle.svg";
import waves from "../assets/svg/waves.svg";

const Hero = () => {
  return (
    <section className="relative bg-gray-50 text-gray-900 py-20 px-6">
      {/* Background Icons */}
      <div className="absolute inset-0 overflow-hidden md:block hidden">
        <div className="absolute left-top-icon-position opacity-10 animate-wind">
          <i className="bi bi-bell text-6xl"></i>
        </div>
        <div className="absolute right-top-icon-position opacity-10 animate-wind">
        <i class="bi bi-chat-dots text-6xl"></i>
        </div>
        <div className="absolute waves-position">
          <img src={waves} alt="Waves" className="w-46 h-38" />
        </div>
        <div className="absolute pattern-square-position">
          <img src={patternSquare} alt="Pattern Square" className="w-80 h-80" />
        </div>
        <div className="absolute pattern-circle-position animate-spinInfinite">
          <img src={patternCircle} alt="Pattern Square" className="w-42 h-42" />
        </div>
        <div className="absolute paperplane-left-position animate-paperplane">
          <img
            src={paperPlaneLeft}
            alt="Paper Plane Left"
            className="w-80 h-80"
          />
        </div>
        <div className="absolute paperplane-right-position animate-paperplane">
          <img
            src={paperPlaneRight}
            alt="Paper Plane Right"
            className="w-80 h-80"
          />
        </div>
      </div>

      {/* Center Logo */}
      <div className="flex align-center justify-center mb-6 relative">
        {/* Background Shadow */}
        <div className="w-32 h-32 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full flex items-center justify-center blur-lg"></div>

        {/* Logo */}
        <div className="absolute w-32 h-32 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
          <div className="w-28 h-28 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Create beautiful landing page in few minutes
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Design your perfect website using professional layouts.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
            Get Started
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative mt-12 flex align-center justify-center">
      <div className="absolute max-w-4xl mx-auto p-6 border -mt-6 bg-white rounded-2xl bg-gradient-to-r from-teal-50 to-blue-50 opacity-50">
          <div className="relative">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Hero Section Main"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Hero Section Main"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
