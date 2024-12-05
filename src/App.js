import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { lazy } from "react";
import Error from "./components/Error.js";
import ProductDetail from "./components/ProductDetail.js";
import Cart from "./components/Cart.js";
import UserContext from "./utils/UserContext.js";

const AboutUS = lazy(() => import("./components/AboutUs.js"));

const App = () => {
  useEffect(() => {
    data = { name: "karan" };
    setUserName(data.name);
  }, []);
  const [userName, setUserName] = useState("");
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider
          value={{ loggedInUser: userName, setUserName: setUserName }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
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
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
