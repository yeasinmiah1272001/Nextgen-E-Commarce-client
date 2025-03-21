import React from "react";
import { IoMenu } from "react-icons/io5";
import SideMenu from "./SideMenu";
const AdminMenu = () => {
  return (
    <div>
      <SideMenu address={"adminhome"} title={"Admin Home"} icon={IoMenu} />
      <SideMenu address={"manageuser"} title={"Manage User"} icon={IoMenu} />
      <SideMenu address={"addproduct"} title={"Add Product"} icon={IoMenu} />
      <SideMenu address={"manageorder"} title={"Manage Order"} icon={IoMenu} />
    </div>
  );
};

export default AdminMenu;
