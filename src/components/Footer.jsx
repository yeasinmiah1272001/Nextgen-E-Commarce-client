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
    <div className="">
      <div>
        <footer className="bg-pink-200 text-gray-300 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-black font-bold mb-4">Shop Categories</h3>
                <ul className="space-y-2 text-black">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Home & Kitchen
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Fashion
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Beauty & Personal Care
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Sports & Outdoors
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-black font-bold mb-4">Customer Service</h3>
                <ul className="space-y-2 text-black">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Shipping Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Returns & Refunds
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Order Tracking
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-black font-bold mb-4">About Us</h3>
                <ul className="space-y-2 text-black">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Sustainability
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-black font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4 mb-4 text-black">
                  <a
                    href="#"
                    className="bg-white hover:bg-red-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white hover:bg-red-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white hover:bg-red-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-white hover:bg-red-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <span className="sr-only">YouTube</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
                <h3 className="text-black font-bold mb-4">Payment Methods</h3>
                <div className="flex space-x-2">
                  <div className="bg-white p-1 rounded">
                    <svg className="w-8 h-5" viewBox="0 0 32 20">
                      <path d="M0 0h32v20h-32z" fill="#fff" />
                      <path
                        d="M21.151 7.802h-2.352v5.836h2.352v-5.836zm-5.23 3.129c0 1.273-1.736 1.344-1.736 0v-3.129h-2.31v3.5c0 2.273 1.736 2.695 3.087 2.336.466-.127.959-.423.959-.423v.423h2.31v-5.836h-2.31v3.129zm-7.497-3.129h-2.352v5.836h2.352v-3.129l1.778 3.129h2.694l-2.056-3.129 2.056-2.707h-2.694l-1.778 2.707v-2.707z"
                        fill="#00579f"
                      />
                    </svg>
                  </div>
                  <div className="bg-white p-1 rounded">
                    <svg className="w-8 h-5" viewBox="0 0 32 20">
                      <path d="M0 0h32v20h-32z" fill="#fff" />
                      <path
                        d="M12.635 7.292l-2.385 5.654h-1.615l-1.176-4.549c-.071-.276-.133-.377-.349-.493-.354-.19-.94-.368-1.457-.478l.035-.134h2.511c.32 0 .608.213.681.582l.621 3.304 1.533-3.886h1.601zm6.428 3.811c.007-1.523-2.103-1.607-2.089-2.288.005-.207.202-.427.633-.483.214-.028.803-.05 1.471.257l.262-1.226c-.358-.13-.819-.255-1.394-.255-1.471 0-2.507.783-2.516 1.904-.01.83.739 1.292 1.304 1.569.579.283.773.464.771.717-.004.387-.463.558-.89.565-.748.012-1.183-.202-1.53-.364l-.269 1.259c.348.16.991.299 1.658.306 1.566 0 2.591-.773 2.589-1.961zm3.876 1.843h1.424l-1.244-5.654h-1.313c-.297 0-.546.172-.657.437l-2.316 5.217h1.615l.322-.893h1.979l.19.893zm-1.718-2.098l.813-2.24.467 2.24h-1.28zm-6.48-3.556l-1.275 5.654h-1.538l1.275-5.654h1.538z"
                        fill="#00579f"
                      />
                    </svg>
                  </div>
                  <div className="bg-white p-1 rounded">
                    <svg className="w-8 h-5" viewBox="0 0 32 20">
                      <path d="M0 0h32v20h-32z" fill="#fff" />
                      <path
                        d="M9.817 7.802c-.378 0-.757.039-1.135.117v.039c.378-.039.795-.078 1.135-.078 1.513 0 2.687.818 2.687 2.143 0 1.013-.757 1.558-1.513 1.558-.757 0-1.135-.545-1.135-1.052 0-.506.378-.818.757-.818.378 0 .378.117.757.117.378 0 .757-.312.757-.662 0-.701-.757-1.013-1.513-1.013-1.135 0-1.892.818-1.892 1.83 0 1.986 1.513 2.338 2.687 2.338 1.513 0 3.027-.818 3.027-2.649 0-1.83-1.513-2.87-3.784-2.87h-.835z"
                        fill="#ff5f00"
                      />
                    </svg>
                  </div>
                  <div className="bg-white p-1 rounded">
                    <svg className="w-8 h-5" viewBox="0 0 32 20">
                      <path d="M0 0h32v20h-32z" fill="#fff" />
                      <path
                        d="M20.5 10c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5z"
                        fill="#eb001b"
                      />
                      <path
                        d="M20.5 10c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5z"
                        fill="#f79e1b"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center text-black">
              <p>&copy; 2025 HotDeals Marketplace. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
