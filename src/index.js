import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import Home from "./Home"
import Commissions from "./Commissions"

const router = createHashRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/commissions",
    element: <Commissions></Commissions>
  }
], {basename: "/"});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);