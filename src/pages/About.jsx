import React from "react";
import { FaShoppingCart, FaTruck, FaHeadset } from "react-icons/fa";
import Container from "../components/Container";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center gap-8 py-12">
        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <img
            src={about}
            alt="E-commerce About"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">About Our Store</h2>
          <p className="mt-4 text-gray-600">
            Welcome to our online store! We offer a wide range of high-quality
            products with fast shipping and excellent customer service. Shop
            with confidence and enjoy a seamless shopping experience.
          </p>

          {/* Highlights */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-md">
              <FaShoppingCart className="text-3xl text-blue-500" />
              <span className="text-lg font-semibold">Wide Product Range</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-md">
              <FaTruck className="text-3xl text-green-500" />
              <span className="text-lg font-semibold">
                Fast & Secure Delivery
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-md">
              <FaHeadset className="text-3xl text-purple-500" />
              <span className="text-lg font-semibold">
                24/7 Customer Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
