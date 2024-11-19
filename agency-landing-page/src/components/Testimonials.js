import React from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", feedback: "Amazing service, highly recommend!" },
    { name: "Jane Smith", feedback: "Professional and efficient!" },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p>"{testimonial.feedback}"</p>
            <h3 className="font-bold mt-4">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
