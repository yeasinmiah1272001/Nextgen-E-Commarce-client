import React from "react";
import { BsBag } from "react-icons/bs";
import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const NavIcon = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex relative group cursor-pointer">
        <IoIosSearch
          size={27}
          className="text-gray-700 group-hover:text-blue-500 transition duration-300"
        />
      </div>
      <div className="flex relative group cursor-pointer">
        <BsBag
          size={27}
          className="text-gray-700 group-hover:text-blue-500 transition duration-300"
        />
        <span className="absolute -top-2 -right-2 text-xs w-5 h-5 flex justify-center items-center bg-red-600 text-white rounded-full">
          22
        </span>
      </div>
      <div className="flex relative group cursor-pointer">
        <IoIosHeartEmpty
          size={27}
          className="text-gray-700 group-hover:text-blue-500 transition duration-300"
        />
        <span className="absolute -top-2 -right-2 text-xs w-5 h-5 flex justify-center items-center bg-red-600 text-white rounded-full">
          22
        </span>
      </div>
      <div className="flex relative group cursor-pointer">
        <FaUser
          size={27}
          className="text-gray-700 group-hover:text-blue-500 transition duration-300"
        />
      </div>
    </div>
  );
};

export default NavIcon;
