const Hero = () => {
    return (
      <section className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to Startup Agency</h1>
        <p className="text-lg mb-8">
          Grow your business with our innovative solutions.
        </p>
        <div>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg mr-4 hover:bg-gray-100">
            Get Started
          </button>
          <button className="border border-white px-6 py-2 rounded-lg">
            Learn More
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  