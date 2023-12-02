import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Project from "../pages/Project";
import DesignProcess from "../pages/DesignProcess";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/design-process",
    element: <DesignProcess />,
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
