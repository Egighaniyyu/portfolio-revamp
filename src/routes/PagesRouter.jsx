import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Project from "../pages/Project";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project",
    element: <Project />,
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
