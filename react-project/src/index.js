import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Routes";
import { CartProvider } from "./context/CartContext"; 

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CartProvider> 
    <RouterProvider router={router} />
  </CartProvider>
);
