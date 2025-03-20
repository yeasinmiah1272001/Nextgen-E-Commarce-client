import React from "react";
import SideMenu from "./SideMenu";
import { IoMenu } from "react-icons/io5";

const UserMenu = () => {
  return (
    <div>
      <SideMenu address={"userhome"} title={"User Home"} icon={IoMenu} />
      <SideMenu address={"vieworder"} title={"View Order"} icon={IoMenu} />
      <SideMenu address={"manageuser"} title={"Manage User"} icon={IoMenu} />
      <SideMenu address={"review"} title={"Review"} icon={IoMenu} />
    </div>
  );
};

export default UserMenu;
