import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Container from "../components/Container";
import { AuthContext } from "../provider/AuthProvider";
import NavIcon from "../components/NavIcon";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Shop", path: "/shop" },
  { title: "Blog", path: "/blog" },
  { title: "Hot Deal", path: "/hotdeals" },
  { title: "Contact", path: "/contact" },
  { title: "About", path: "/about" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <Container className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-lg font-bold text-gray-900">
          <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide text-[#F05077] hover:text-black duration-300">
            <span className="text-black hover:text-[#F05077]">Next</span>Gen
          </h1>
        </NavLink>

        {/* Search Bar (Hidden on small screens) */}
        <div className="relative hidden md:block w-1/3">
          <input
            type="text"
            placeholder="Search product..."
            className="w-full px-4 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>

        {/* Icons & Mobile Menu Button */}
        <div className="flex items-center space-x-4 text-gray-700">
          <NavIcon />
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </Container>

      {/* Search Bar (Visible only on small screens) */}
      <div className="md:hidden px-4 pb-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search product..."
            className="w-full px-4 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>
      </div>

      {/* Navigation Links */}
      <nav
        className={`bg-gray-100 md:block ${
          isMenuOpen ? "block" : "hidden"
        } transition-all duration-300`}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-10 py-3">
          {navItems.map(({ title, path }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-yellow-500 transition ${
                  isActive ? "text-yellow-500" : "text-gray-800"
                }`
              }
            >
              {title}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
