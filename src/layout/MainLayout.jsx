import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../shared/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

export default MainLayout;
