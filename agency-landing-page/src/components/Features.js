const Features = () => {
    const features = [
      { title: "Custom Design", description: "Create stunning designs." },
      { title: "Marketing Strategy", description: "Reach your audience effectively." },
      { title: "Analytics", description: "Track and improve performance." },
    ];
  
    return (
      <section id="features" className="relative -mt-24 py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-screen-lg mx-auto px-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;
  