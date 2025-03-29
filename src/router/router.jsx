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
import ProductDetaiils from "../pages/home/ProductDetaiils";
import ShoppingCarts from "../pages/ShoppingCarts";
import PaymentHistry from "../pages/dashboard/users/PaymentHistry";
import ViewOrder from "../pages/dashboard/users/ViewOrder";
import PrivateRoute from "./PrivateRoute";
import BlogPage from "../pages/BlogPage";
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
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetaiils />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/details/${params.id}`),
      },
      {
        path: "/carts",
        element: (
          <PrivateRoute>
            <ShoppingCarts />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
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
      // user related
      {
        path: "paymenthistry",
        element: <PaymentHistry />,
      },
      {
        path: "vieworder",
        element: <ViewOrder />,
      },
    ],
  },
]);
