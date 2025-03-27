import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useSelector } from "react-redux";

const NavIcon = () => {
  const { user } = useContext(AuthContext);
  const selector = useSelector((state) => state.nextGen.cart);
  // console.log(selector);

  return (
    <div className="flex items-center gap-6">
      <div className="flex relative group cursor-pointer">
        <IoIosSearch
          size={27}
          className="text-gray-700 group-hover:text-blue-500 transition duration-300"
        />
      </div>
      <Link to={"/carts"} className="flex relative group cursor-pointer">
        <BsBag
          size={27}
          className="text-gray-700 group-hover:text-blue-500 transition duration-300"
        />
        <span className="absolute -top-2 -right-2 text-xs w-5 h-5 flex justify-center items-center bg-red-600 text-white rounded-full">
          {selector.length ? selector.length : "0"}
        </span>
      </Link>
      <div className="flex relative group cursor-pointer">
        <IoIosHeartEmpty
          size={27}
          className="text-gray-700 group-hover:text-blue-500 transition duration-300"
        />
        <span className="absolute -top-2 -right-2 text-xs w-5 h-5 flex justify-center items-center bg-red-600 text-white rounded-full">
          22
        </span>
      </div>
      {user ? (
        <div className="flex relative group cursor-pointer">
          <img
            src={user && user?.photoURL} // Fallback to default image
            alt="User Profile"
            className="w-8 h-8 rounded-full object-cover border border-gray-300"
          />
        </div>
      ) : (
        <Link to={"/login"} className="flex relative group cursor-pointer">
          <FaUser
            size={27}
            className="text-gray-700 group-hover:text-blue-500 transition duration-300"
          />
        </Link>
      )}
    </div>
  );
};

export default NavIcon;
