import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "How to work with prototype design with adobe xd featuring tools",
      description:
        "The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design.",
      link: "#",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Ambitias receives honorable gift mention at Fast Company’s most Innovation by Design Awards",
      link: "#",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Multiple art board prototype with Figma",
      description:
        "Beyond launched ambitias, a Chrome extension that replaces LinkedIn profile photos.",
      link: "#",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Team presentation with latest user interface & experience reach more",
      link: "#",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <section className="pb-16 pt-24 bg-white">
      <div className="max-w-screen-xl mx-auto text-center px-4">
        {/* Header Section */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Popular blog post we updated
        </h2>
        <p className="text-gray-600 mb-8">Update newsfeed blog</p>

        {/* Blog Section */}
        <div className="flex flex-wrap gap-6 flex-col md:flex-row">
          {/* First Blog with Extra Details */}
          <div className="flex flex-col flex-1">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-60 object-cover rounded-lg"
            />
            <div className="p-6 text-left flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-400 mb-4">{blogPosts[0].description}</p>
              <a
                href={blogPosts[0].link}
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>

          {/* Smaller Blogs in a Horizontal Layout */}
          <div className="flex-1 flex flex-col gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <div
                key={index}
                className="flex items-center overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-32 h-32 object-cover flex-shrink-0 rounded-lg"
                />
                <div className="p-4 text-left flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-gray-400 mb-4 text-md">
                      {post.description}
                    </p>
                  )}
                  <a
                    href={post.link}
                    className="text-blue-600 text-sm font-semibold hover:underline"
                  >
                    Learn More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
