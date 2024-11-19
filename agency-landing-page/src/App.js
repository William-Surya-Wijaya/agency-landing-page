import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Header />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
