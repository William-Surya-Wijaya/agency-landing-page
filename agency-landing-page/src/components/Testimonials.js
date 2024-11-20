import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Cherice Justin",
    username: "@cherice.me",
    testimonial: "Thank you for all your help. Your service was excellent and very FAST.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Minnie Horn",
    username: "@hello.mimmie",
    testimonial: "You got me the best place ever in just a few moments after I spoke to you.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Thais Carballal",
    username: "@myself.thais",
    testimonial: "Everything worked out perfectly with all the bookings, and your booking was very quick and professional.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Veona Watson",
    username: "@hi.veona",
    testimonial: "Your patience with me as I continuously changed my plans is to be commended.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Cherice Justin",
    username: "@cherice.me",
    testimonial: "Thank you for all your help. Your service was excellent and very FAST.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Minnie Horn",
    username: "@hello.mimmie",
    testimonial: "You got me the best place ever in just a few moments after I spoke to you.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Thais Carballal",
    username: "@myself.thais",
    testimonial: "Everything worked out perfectly with all the bookings, and your booking was very quick and professional.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Veona Watson",
    username: "@hi.veona",
    testimonial: "Your patience with me as I continuously changed my plans is to be commended.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Cherice Justin",
    username: "@cherice.me",
    testimonial: "Thank you for all your help. Your service was excellent and very FAST.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Minnie Horn",
    username: "@hello.mimmie",
    testimonial: "You got me the best place ever in just a few moments after I spoke to you.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Thais Carballal",
    username: "@myself.thais",
    testimonial: "Everything worked out perfectly with all the bookings, and your booking was very quick and professional.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Veona Watson",
    username: "@hi.veona",
    testimonial: "Your patience with me as I continuously changed my plans is to be commended.",
    image: "https://via.placeholder.com/50",
  },
];

const Testimonials = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "160px",
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  // Group testimonials into pairs
  const groupedTestimonials = testimonials.reduce((acc, _, index, arr) => {
    if (index % 2 === 0) acc.push(arr.slice(index, index + 2));
    return acc;
  }, []);

  return (
    <section className="py-24 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">
        What Clients Say About Us
      </h2>
      <p className="text-gray-600 mb-8">Customer Testimonial</p>
      <Slider {...settings}>
        {groupedTestimonials.map((group, index) => (
          <div key={index} className="flex flex-col justify-center items-start gap-6">
            {group.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 max-w-lg mx-auto mt-4"
              >
                <p className="text-gray-700 text-sm mb-4 text-start">{item.testimonial}</p>
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-md font-bold text-gray-800 text-start">
                      {item.name}
                    </h4>
                    <p className="text-xs font-bold text-gray-500 text-start text-indigo-400">{item.username}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
