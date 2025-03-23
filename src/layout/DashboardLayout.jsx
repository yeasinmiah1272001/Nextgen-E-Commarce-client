import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto">
        <div className="w-full min-h-screen">
          <div className="bg-[#AADEEE] h-screen p-6 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
