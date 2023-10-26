import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import Details from "../pages/Details";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
]);

const PagesRouter = () => {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default PagesRouter;
