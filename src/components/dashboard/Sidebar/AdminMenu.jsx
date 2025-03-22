import React from "react";
import {
  IoHomeOutline,
  IoPeopleOutline,
  IoAddCircleOutline,
  IoListOutline,
} from "react-icons/io5";
import SideMenu from "./SideMenu";

const AdminMenu = () => {
  return (
    <div>
      <SideMenu
        address={"adminhome"}
        title={"Admin Home"}
        icon={IoHomeOutline}
      />
      <SideMenu
        address={"manageuser"}
        title={"Manage User"}
        icon={IoPeopleOutline}
      />
      <SideMenu
        address={"addproduct"}
        title={"Add Product"}
        icon={IoAddCircleOutline}
      />
      <SideMenu
        address={"allproduct"}
        title={"Manage Product"}
        icon={IoAddCircleOutline}
      />
      <SideMenu
        address={"manageorder"}
        title={"Manage Order"}
        icon={IoListOutline}
      />
    </div>
  );
};

export default AdminMenu;
