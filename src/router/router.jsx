import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../components/Error";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import DashboardLayout from "../layout/DashboardLayout";
import UserHome from "../pages/dashboard/users/UserHome";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../shared/Profile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "userhome",
        element: <UserHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
