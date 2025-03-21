import React from "react";
import SideMenu from "./SideMenu";
import { IoMenu } from "react-icons/io5";

const SharedMenu = () => {
  return (
    <div>
      <SideMenu address={"/"} title={"Home Menu"} icon={IoMenu} />
      <SideMenu address={"profile"} title={"Profile"} icon={IoMenu} />
    </div>
  );
};

export default SharedMenu;
