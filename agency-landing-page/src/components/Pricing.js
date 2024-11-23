import React, { useState } from "react";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      id: 1,
      title: "For Team pack",
      description: [
        "Ultimate access to all course, exercises and assessments",
        "Free access for all kind of exercise corrections with downloads",
        "Total assessment corrections with free download access system",
        "Unlimited download of courses on the mobile app contents",
        "Download and print courses and exercises in PDF",
      ],
      price: isMonthly ? "29.99/mo" : "299.99/yr",
      icon: <i className="bi bi-people-fill text-5xl text-indigo-500"></i>,
    },
    {
      id: 2,
      title: "For Organization pack",
      description: [
        "Ultimate access to all course, exercises and assessments",
        "Free access for all kind of exercise corrections with downloads",
        "Total assessment corrections with free download access system",
        "Unlimited download of courses on the mobile app contents",
        "Download and print courses and exercises in PDF",
      ],
      price: isMonthly ? "49.99/mo" : "499.99/yr",
      icon: <i className="bi bi-people text-5xl text-indigo-500"></i>,
      recommended: true,
    },
  ];

  return (
    <section className="pt-16 pb-32 bg-gray-50 -mt-40">
      {/* Header */}
      <div className="text-center mb-12 mt-40">
        <h2 className="text-4xl font-bold mb-4 md:text-3xl">What deal suits you perfect</h2>
        <p className="text-gray-600">Meet our pricing plan</p>
      </div>

      {/* Toggle Plan */}
      <div className="flex justify-center mb-12 gap-4">
        <button
          onClick={() => setIsMonthly(true)}
          className={`px-8 py-3 rounded-lg transition-all duration-300 ${
            isMonthly
              ? "bg-indigo-600 text-white shadow-md scale-105"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Monthly Plan
        </button>
        <button
          onClick={() => setIsMonthly(false)}
          className={`px-8 py-3 rounded-lg transition-all duration-300 ${
            !isMonthly
              ? "bg-indigo-600 text-white shadow-md scale-105"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Annual Plan
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid sm:grid-cols-2 gap-8 max-w-screen-lg mx-auto md:px-24">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-white py-6 px-6 mx-12 md:px-12 rounded-lg border hover:shadow-lg transition-all duration-300 ${
              plan.recommended
                ? "border-indigo-500 scale-105"
                : "border-gray-200 hover:scale-105"
            }`}
          >
            {/* Recommended Badge */}
            {plan.recommended && (
              <span className="absolute top-4 right-4 bg-indigo-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-sm">
                Recommended
              </span>
            )}

            {/* Icon */}
            <div className="flex justify-start mb-4">{plan.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-bold text-start mb-8">{plan.title}</h3>

            {/* Features */}
            <ul className="mb-6">
              {plan.description.map((desc, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-600 mb-4"
                >
                  <i className="bi bi-check-circle-fill text-green-400"></i>
                  {desc}
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="text-center bg-gray-100 flex justify-between items-center rounded-lg py-4 px-8">
              <div className="flex flex-col items-start">
                <p className="text-gray-500 text-sm">Starting from</p>
                <p className="text-3xl font-bold text-indigo-500">{plan.price}</p>
              </div>

              <i className="bi bi-arrow-right-circle text-2xl text-gray-500 hover:text-gray-800 transition-transform duration-300 hover:scale-110"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
