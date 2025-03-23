import React from "react";
import Container from "./Container";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-pink-50">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {/* Logo and Social Icons Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">NEXTGEN</h2>
            <p className="mt-2 text-gray-600">
              Discover curated furniture collections at Tulio, blending style
              and comfort to elevate your living spaces.
            </p>
            <div className="flex space-x-3 mt-4">
              <FaFacebookF className="text-gray-500 hover:text-gray-800 cursor-pointer" />
              <FaTwitter className="text-gray-500 hover:text-gray-800 cursor-pointer" />
              <FaInstagram className="text-gray-500 hover:text-gray-800 cursor-pointer" />
              <FaLinkedinIn className="text-gray-500 hover:text-gray-800 cursor-pointer" />
              <FaPinterestP className="text-gray-500 hover:text-gray-800 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="hover:text-gray-800 cursor-pointer">About us</li>
              <li className="hover:text-gray-800 cursor-pointer">Contact us</li>
              <li className="hover:text-gray-800 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-gray-800 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-gray-800 cursor-pointer">FAQs</li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Categories</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="hover:text-gray-800 cursor-pointer">Mobiles</li>
              <li className="hover:text-gray-800 cursor-pointer">Appliances</li>
              <li className="hover:text-gray-800 cursor-pointer">
                Smartphones
              </li>
              <li className="hover:text-gray-800 cursor-pointer">
                Air Conditioners
              </li>
              <li className="hover:text-gray-800 cursor-pointer">
                Washing Machine
              </li>
              <li className="hover:text-gray-800 cursor-pointer">
                Kitchen Appliances
              </li>
              <li className="hover:text-gray-800 cursor-pointer">
                Gadget Accessories
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Newsletter</h3>
            <p className="mt-2 text-gray-600">
              Subscribe to our newsletter to receive updates and exclusive
              offers.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-10 py-4 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 <span className="font-bold">TECHNOX</span>. All rights
            reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
