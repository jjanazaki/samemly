import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Constant/Layout";
import Home from "./components/Home";

import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";

import Choices from "./components/Choices/Choice";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },

    {
      path: "/login",
      element: <Login />
    },

    {
      path: "/signup",
      element: <Signup />
    },

    {
      path: "/choices",
      element: <Choices />
    }
  ]);

  return <RouterProvider router={router} />;
}