import React from "react";
import SideMenu from "./SideMenu";
import { IoMenu } from "react-icons/io5";

const SharedMenu = () => {
  return (
    <div>
      <SideMenu address={"profile"} title={"Profile"} icon={IoMenu} />
      <SideMenu address={"/"} title={"Home Menu"} icon={IoMenu} />
    </div>
  );
};

export default SharedMenu;
