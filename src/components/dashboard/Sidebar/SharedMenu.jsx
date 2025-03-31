import React, { useContext } from "react";
import SideMenu from "./SideMenu";
import { IoMenu } from "react-icons/io5";
import { AuthContext } from "../../../provider/AuthProvider";

const SharedMenu = () => {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <SideMenu address={"/"} title={"Home Menu"} icon={IoMenu} />
      <SideMenu address={"profile"} title={"Profile"} icon={IoMenu} />
      <button
        onClick={handleLogout}
        className="flex mt-2 w-full items-center gap-3 py-3 px-5 rounded-lg transition-all duration-200 text-lg font-medium hover:bg-gray-700 hover:text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default SharedMenu;
