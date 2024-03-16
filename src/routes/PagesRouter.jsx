import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Project from "../pages/Project";
import DesignProcess from "../pages/DesignProcess";
import ProjectKitabisa from "../pages/detail-project/Project-Kitabisa";

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
  {
    path: "/detail-project/ui-ux-case-study-menu-kabar-terbaru-kitabisa-com",
    element: <ProjectKitabisa />,
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
