import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How much does it cost to be a credit card merchant?",
      answer:
        "For our recent trip to S.A., I booked several accommodations thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon. I will then make my bookings with your company again.",
    },
    {
      question: "How can I open a merchant account?",
      answer: "You can open a merchant account by filling out our online form.",
    },
    {
      question: "How long does the application take?",
      answer: "The application process typically takes 1-2 business days.",
    },
    {
      question: "Can I make payment outside of Hong Kong?",
      answer: "Yes, you can make payments globally with our services.",
    },
    {
      question: "How do I get the payment complete?",
      answer: "Complete the payment by following the steps outlined on your invoice.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative pt-16 pb-32 bg-white text-center">
      <h2 className="text-4xl font-bold mb-4">Frequently Ask Question</h2>
      <p className="text-gray-600 mb-12">Ask your question and meet</p>
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col-reverse md:flex-row gap-12">
        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-start">
            Do you have any question? Please ask here we are ready to support
          </h2>
          <p className="text-gray-600 mb-6 text-start">
            If your question is not listed here, please feel free to make a
            manual support request.
          </p>
          <div className="flex">
            <button className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900">
                Ask your Question
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="md:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium hover:bg-gray-50"
                >
                  {faq.question}
                  <span className="ml-2">
                    {activeIndex === index ? <i class="bi bi-chevron-down"></i> : <i class="bi bi-chevron-right"></i>}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-4 py-3 text-gray-600 text-start">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
