import React from "react";
import { NavLink } from "react-router-dom";

import ExternalLink from "../../assets/images/externallink.svg";
import Contact from "../../assets/images/contact.svg";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Floatingbar = () => {
  return (
    <>
      {/* floating bar */}
      <div className="inline-flex p-3 justify-center items-center gap-2 fixed bottom-6 left-1/2 -translate-x-1/2 backdrop-blur-lg floating-bar-section">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "floating-nav active" : "floating-nav"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive ? "floating-nav active" : "floating-nav"
          }
        >
          PROJECT
        </NavLink>
        <NavLink
          to="/design-process"
          className={({ isActive }) =>
            isActive ? "floating-nav active" : "floating-nav"
          }
        >
          DESIGN PROCESS
        </NavLink>
        <div className="floating-nav ">EXPERIENCE</div>
        <div className="border border-y-8"></div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <img
                src={ExternalLink}
                alt="external link"
                className="p-3 floating-icon"
              />
            </TooltipTrigger>
            <TooltipContent className="backdrop-blur-lg bg-black bg-opacity-80 w-fit">
              <div className="flex flex-col child-floating-nav">
                <a
                  href="https://dribbble.com/egighaniyyu"
                  target="_blank"
                  className="text-center"
                >
                  Dribbble
                </a>
                <a
                  href="https://medium.com/@egighaniyyu"
                  target="_blank"
                  className="text-center"
                >
                  Medium
                </a>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <img src={Contact} alt="contact" className="p-3 floating-icon" />
            </TooltipTrigger>
            <TooltipContent className="backdrop-blur-lg bg-black bg-opacity-80 w-fit">
              <div className="flex flex-col child-floating-nav">
                <a
                  href="mailto:egighaniyyu@gmail.com"
                  target="_blank"
                  className="text-center"
                >
                  Email
                </a>
                <a
                  href="https://www.instagram.com/egghny/"
                  target="_blank"
                  className="text-center"
                >
                  Instagram
                </a>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};

export default Floatingbar;
