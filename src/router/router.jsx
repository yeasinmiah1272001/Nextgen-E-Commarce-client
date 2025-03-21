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
import AdminHome from "../pages/dashboard/admin/AdminHome";
import ManageUser from "../pages/dashboard/admin/ManageUser";
import AddProduct from "../pages/dashboard/admin/AddProduct";
import ManageOrder from "../pages/dashboard/admin/ManageOrder";
import AllProduct from "../pages/dashboard/admin/AllProduct";
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
      // admin related
      {
        path: "adminhome",
        element: <AdminHome />,
      },
      {
        path: "manageuser",
        element: <ManageUser />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
      {
        path: "manageorder",
        element: <ManageOrder />,
      },
      {
        path: "allproduct",
        element: <AllProduct />,
      },
    ],
  },
]);
