import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Overview from "./components/Overview";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import 'bootstrap-icons/font/bootstrap-icons.css';
import BlogSection from "./components/BlogSection";
import FAQSection from "./components/FAQSection";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Header />
      <Hero />
      <Features />
      <Overview />
      <Pricing />
      <Testimonials />
      <BlogSection />
      <FAQSection/>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
