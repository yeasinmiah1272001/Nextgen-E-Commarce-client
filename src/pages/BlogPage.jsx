import React from "react";
import Container from "../components/Container";
import blog1 from "../assets/blog/blog1.webp";
import blog2 from "../assets/blog/blog2.webp";
import blog3 from "../assets/blog/blog3.webp";
import blog4 from "../assets/blog/blog4.webp";
import blog5 from "../assets/blog/3.jpg";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "How to Optimize Your Product Pages for Conversion",
      excerpt:
        "Learn the key elements that make product pages convert visitors into customers.",
      image: blog1,
      category: "Marketing",
      date: "Mar 20, 2025",
    },
    {
      title: "The Rise of Voice Commerce: What You Need to Know",
      excerpt:
        "Voice-activated shopping is changing how consumers interact with brands.",
      image: blog2,
      category: "Technology",
      date: "Mar 18, 2025",
    },
    {
      title: "7 E-Commerce Design Trends Dominating in 2025",
      excerpt:
        "Stay ahead of the competition with these cutting-edge design approaches.",
      image: blog3,
      category: "Design",
      date: "Mar 15, 2025",
    },
    {
      title: "Building Customer Loyalty in the Digital Age",
      excerpt:
        "Strategies to keep customers coming back to your online store again and again.",
      image: blog4,
      category: "Strategy",
      date: "Mar 12, 2025",
    },
  ];

  const categories = [
    { name: "Marketing", count: 24 },
    { name: "Technology", count: 18 },
    { name: "Design", count: 15 },
    { name: "Strategy", count: 12 },
    { name: "Development", count: 9 },
  ];

  return (
    <Container>
      <div className="min-h-screen bg-white">
        <main className="container mx-auto px-4 py-8">
          {/* Featured Post */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={blog5}
                  alt="Featured blog post"
                  className="w-full h-full object-contain aspect-[16/10]"
                />
              </div>
              <div className="flex flex-col justify-center">
                {/* <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mb-4">
                  Featured
                </span> */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  The Future of E-Commerce: Trends to Watch in 2025
                </h1>
                <p className="text-gray-600 mb-6">
                  Discover the emerging technologies and consumer behaviors that
                  will shape the e-commerce landscape in the coming years.
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>March 25, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>5 min read</span>
                  </div>
                </div>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-fit">
                  Read Article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* Blog Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          <span>{post.date}</span>
                        </div>
                        <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                          Read more
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-8">
                {/* Search */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Search</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Categories</h3>
                  <div className="grid gap-2">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-1"
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-500"
                          >
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                            <line x1="7" y1="7" x2="7.01" y2="7"></line>
                          </svg>
                          <span className="text-gray-700">{category.name}</span>
                        </div>
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest e-commerce tips and trends straight to your
                    inbox.
                  </p>
                  <div className="grid gap-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default BlogPage;
