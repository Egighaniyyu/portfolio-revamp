import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import ExternalLink from "../../assets/images/externallink.svg";
import Contact from "../../assets/images/contact.svg";
import Menu from "../../assets/images/menu.svg";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Floatingbar = () => {
  const [activeText, setActiveText] = useState("MENU");
  const location = useLocation();

  useEffect(() => {
    // Callback ini akan dipanggil setiap kali URL berubah
    switch (location.pathname) {
      case "/":
        setActiveText("HOME");
        break;
      case "/project":
        setActiveText("PROJECT");
        break;
      case "/design-process":
        setActiveText("DESIGN PROCESS");
        break;
      default:
        setActiveText("MENU");
        break;
    }
  }, [location.pathname]); // Memastikan efek ini hanya dipanggil saat location.pathname berubah

  return (
    <>
      {/* floating bar */}
      <div className="hidden md:inline-flex p-3 justify-center items-center gap-2 fixed bottom-6 left-1/2 -translate-x-1/2 backdrop-blur-lg floating-bar-section">
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
        {/* <div className="floating-nav ">EXPERIENCE</div> */}
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

      <div className="md:hidden inline-flex p-3 justify-center items-center gap-2 fixed bottom-0 w-full left-1/2 -translate-x-1/2 backdrop-blur-lg z-50 floating-bar-section">
        <div className="w-8/12 flex flex-row floating-menu">
          <Popover>
            <PopoverTrigger>
              <div className="floating-bar-section-mobile">
                <img src={Menu} alt="menu" className="w-5 h-5" />
                <div className="floating-nav-mobile">{activeText}</div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="backdrop-blur-lg bg-black bg-opacity-80 w-fit">
              <NavLink to="/" className="floating-nav-tooltip">
                HOME
              </NavLink>
              <NavLink to="/project" className="floating-nav-tooltip">
                PROJECT
              </NavLink>
              <NavLink to="/design-process" className="floating-nav-tooltip">
                DESIGN PROCESS
              </NavLink>
            </PopoverContent>
          </Popover>
        </div>
        <div className="border border-y-8"></div>
        <div className="w-4/12 flex flex-row">
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
                <img
                  src={Contact}
                  alt="contact"
                  className="p-3 floating-icon"
                />
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
      </div>
    </>
  );
};

export default Floatingbar;
