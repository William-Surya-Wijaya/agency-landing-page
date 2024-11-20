import React, { useState } from "react";

const TabbedFeatures = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: <i className="bi bi-wallet-fill"></i>,
      title: "Budget Overview",
      image: "https://via.placeholder.com/1200x600",
    },
    {
      icon: <i className="bi bi-gear-fill"></i>,
      title: "Create & Adjust",
      image: "https://via.placeholder.com/1200x600",
    },
    {
      icon: <i className="bi bi-pie-chart-fill"></i>,
      title: "View Reports",
      image: "https://via.placeholder.com/1200x600",
    },
    {
      icon: <i className="bi bi-folder-fill"></i>,
      title: "Manage Files",
      image: "https://via.placeholder.com/1200x600",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16 mt-8">
        <h2 className="text-3xl font-bold mb-4">What the Features of Product</h2>
        <p className="text-gray-600 text-sm sm:text-base">Introducing all screen details</p>
      </div>

      {/* Tabs */}
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 lg:border-b lg:border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`relative flex items-center gap-4 transition-transform duration-300 pb-4 px-4 sm:px-6 text-sm sm:text-base ${
              activeTab === index
                ? "text-gray-800"
                : "text-gray-400 hover:text-gray-600"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {/* Icon */}
            <span
              className={`text-xl sm:text-2xl transition-transform duration-500 ${
                activeTab === index
                  ? "scale-100"
                  : "scale-90 group-hover:scale-100"
              }`}
            >
              {tab.icon}
            </span>

            {/* Title */}
            <span
              className={`transition-opacity duration-300 ${
                activeTab === index
                  ? "opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            >
              {tab.title}
            </span>

            {/* Active Underline Animation */}
            {activeTab === index && (
              <span
                className="absolute bottom-0 left-0 w-full undertabs bg-gray-600 animate-slide-in"
              ></span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content with Animation */}
      <div className="max-w-screen-xl mx-auto flex justify-center">
        <div key={activeTab} className="animate-fade-in mx-auto w-full">
          <img
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            className="rounded-xl shadow-lg w-full h-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default TabbedFeatures;
