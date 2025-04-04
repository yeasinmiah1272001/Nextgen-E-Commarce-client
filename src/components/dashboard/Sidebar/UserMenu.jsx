import React from "react";
import SideMenu from "./SideMenu";
import { IoMenu } from "react-icons/io5";

const UserMenu = () => {
  return (
    <div>
      <SideMenu address={"userhome"} title={"User Home"} icon={IoMenu} />
      <SideMenu
        address={"paymenthistry"}
        title={"Payment Histry"}
        icon={IoMenu}
      />
      <SideMenu address={"vieworder"} title={"View Order"} icon={IoMenu} />
    </div>
  );
};

export default UserMenu;
