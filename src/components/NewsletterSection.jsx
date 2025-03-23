import React from "react";
import Container from "./Container";

const NewsletterSection = () => {
  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 rounded-2xl p-8 md:p-12 border border-pink-100 dark:border-pink-900/20">
      <Container className="  dark:bg-gray-950 mt-10">
        <div className="container mx-auto px-4">
          <div className=" mx-auto bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20 rounded-2xl p-8 md:p-12 border border-pink-100 dark:border-pink-900/20 shadow-md">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              {/* Text Section */}
              <div className="md:col-span-3 space-y-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-pink-500 rounded-md hover:bg-pink-600">
                  Newsletter
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Stay updated with the latest products, exclusive offers, and
                  tech news.
                </p>
              </div>
              {/* Form Section */}
              <div className="md:col-span-2">
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950"
                  >
                    Subscribe
                    <span className="ml-2">→</span>
                  </button>
                  <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                    By subscribing, you agree to our Privacy Policy and Terms of
                    Service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsletterSection;
