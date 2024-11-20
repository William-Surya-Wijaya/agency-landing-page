import React from "react";

const Features = () => {
  const features = [
    {
      icon: "📐",
      title: "3D Modeling & Art",
      description: "Get your info tests delivered at home collect a sample from your progress tests.",
    },
    {
      icon: "🔗",
      title: "Digital Promotion",
      description: "Get your info tests delivered at home collect a sample from your progress tests.",
    },
    {
      icon: "🏢",
      title: "Business Enterprise",
      description: "Get your info tests delivered at home collect a sample from your progress tests.",
    },
    {
      icon: "📊",
      title: "Marketing & Advertising",
      description: "Get your info tests delivered at home collect a sample from your progress tests.",
    },
    {
      icon: "∞",
      title: "Ultimate Development",
      description: "Get your info tests delivered at home collect a sample from your progress tests.",
    },
    {
      icon: "📞",
      title: "Online Support",
      description: "Get your info tests delivered at home collect a sample from your progress tests.",
    },
  ];

  const coreFeatures = [
    {
      icon: "📐",
      title: "3D Modeling & Art",
      description: "Get your info tests delivered at home collect a sample from your progress tests.",
    },
    {
      icon: "🔗",
      title: "Digital Promotion",
      description: "Get your info tests delivered at home collect a sample from your progress tests.",
    },
  ];

  return (
    <section className="relative pt-16 bg-gray-100 text-center -mt-24">
      <h2 className="text-4xl font-bold mb-4">What the Features of Product</h2>
      <p className="text-gray-600 mb-12">Features are highlighted here</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-xl mx-auto px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div className="rounded-3xl bg-teal-200/50 h-20 w-36 flex items-center justify-center">
              <div className="text-4xl mb-2">{feature.icon}</div>
            </div>
            <div className="flex flex-col items-start justify-start text-start">
              <div className="text-xl font-semibold mb-2">{feature.title}</div>
              <div className="text-gray-600 mb-4">{feature.description}</div>
              <a
                href="#"
                className="text-blue-500 hover:underline font-medium"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Core Features Section */}
      <div className="py-24 bg-gray-50 text-center mt-24">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-20">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Hero Section Main"
            className="rounded-xl shadow-lg"
          />
          <div className="flex flex-col text-start align-start">
            <div className="text-indigo-600 font-bold mb-4">Core Features</div>
            <div className="text-4xl font-bold mb-10">Smart Jackpots that you may love this</div>
            <div className="flex flex-col gap-10">
              {coreFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="rounded-3xl bg-teal-200/50 h-20 w-36 flex items-center justify-center">
                    <div className="text-4xl mb-2">{feature.icon}</div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-start">
                    <div className="text-xl font-semibold mb-2">{feature.title}</div>
                    <div className="text-gray-600 mb-4">{feature.description}</div>
                    <a
                      href="#"
                      className="text-blue-500 hover:underline font-medium"
                    >
                      Learn More &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <div className="pb-24 bg-gray-50 text-center">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col-reverse lg:flex-row justify-center items-center gap-10 md:gap-20">
          <div className="flex flex-col text-start align-start">
            <div className="text-indigo-600 font-bold mb-4">Behind the design</div>
            <div className="text-4xl font-bold mb-10">Code that we used to built the website with integrating apps</div>
            <div className="leading-8 mb-10">Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</div>
            <div class="flex">
              <button className="bg-indigo-950 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
                Explore More
              </button>
            </div>
          </div>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Hero Section Main"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
