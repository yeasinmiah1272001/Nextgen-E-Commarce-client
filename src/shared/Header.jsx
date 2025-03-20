import React, { useState } from "react";
import Container from "../components/Container";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import NavIcon from "../components/NavIcon";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navlink = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "Blog", path: "/blog" },
    { title: "Hot Deal", path: "/hotdeal" },
  ];

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="shadow shadow-gray-400 p-2">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide text-[#F05077] hover:text-black duration-300">
          <span className="text-black hover:text-[#F05077]">Next</span>Gen
        </h1>

        {/* Navigation Links for Large Screens */}
        <div className="hidden sm:flex items-center justify-center gap-4 md:gap-8">
          {navlink.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.path}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active text-[#F05077] border-b-2 border-[#F05077]"
                  : "text-gray-700 hover:text-[#F05077] transition duration-300"
              }
            >
              {nav.title}
            </NavLink>
          ))}
        </div>
        {/* icon */}
        <NavIcon />

        {/* Menu Icon for Small Devices */}
        <button
          onClick={toggleSidebar}
          className="sm:hidden text-2xl text-[#F05077] hover:text-black"
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </Container>

      {/* Sidebar for Small Devices */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          {navlink.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.path}
              onClick={toggleSidebar}
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              {nav.title}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Header;
