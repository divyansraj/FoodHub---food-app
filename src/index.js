import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import React, { lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import HeroSection from "./components/HeroSection";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Recipie from "./components/Recipie";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const Instamart = lazy(() => import("./components/Instamart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "about", // Relative path without the leading '/'
        element: <About />,
      },
      {
        path: "contact", // Relative path without the leading '/'
        element: <Contact />,
      },
      {
        path: "recipes", // Relative path without the leading '/'
        element: <Recipie />,
      },
      {
        path: "restaurant/:id", // Relative path without the leading '/'
        element: <RestaurantMenu />,
      },
      {
        path: "instamart", // Relative path without the leading '/'
        element: (
          <Suspense fallback={<h1>Loading InstaMart... ...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path : "cart",
        element: <Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

reportWebVitals();