import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { lazy } from "react";
import Error from "./components/Error.js";
import ProductDetail from "./components/ProductDetail.js";

const AboutUS = lazy(() => import("./components/AboutUs.js"));

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is the parent route
    children: [
      {
        path: "/", // Nested route
        element: <Body />,
      },
      {
        path: "/about", // Nested route
        element: <AboutUS />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
