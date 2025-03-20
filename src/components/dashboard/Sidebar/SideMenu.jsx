import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SideMenu = ({ address, title, icon: Icon }) => {
  return (
    <div>
      <ul className="mt-3">
        <li className="">
          <NavLink
            to={address}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-5 rounded-lg transition-all duration-200 text-lg font-medium hover:bg-gray-700 hover:text-white ${
                isActive ? "bg-gray-700 text-white" : "text-gray-400"
              }`
            }
          >
            <span className="text-xl">
              <Icon />
            </span>
            <span>{title}</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
