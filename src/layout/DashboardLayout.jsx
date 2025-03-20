import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen flex">
      <Sidebar />
      <div className="flex-1  h-screen">
        <div className="w-full min-h-screen">
          <div className="bg-[#AADEEE] h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
