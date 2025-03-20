import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import UserMenu from "./UserMenu";
import SharedMenu from "./SharedMenu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const sidebar = document.getElementById("sidebar");
      if (isOpen && sidebar && !sidebar.contains(event.target)) {
        closeSidebar();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="flex relative">
      <button
        className="lg:hidden text-red-500 p-2 focus:outline-none"
        onClick={toggleSidebar}
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`fixed lg:relative bg-gray-800 text-white h-screen shadow-lg p-2 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 w-72`}
      >
        {/* UserMenu */}
        <nav className="p-4">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <UserMenu />
        </nav>
        <hr />
        {/* SharedMenu */}
        <nav className="p-4">
          <SharedMenu />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
