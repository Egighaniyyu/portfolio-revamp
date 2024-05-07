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
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ChevronDown, ChevronUp } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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

  const [linkImage, setLinkImage] = useState("/images/dribbble-navbar.png");
  const [lastHoveredImage, setLastHoveredImage] = useState("");

  const handleLinkHover = (link) => {
    setLinkImage(link.image);
    setLastHoveredImage(link.image);
  };

  const handleLinkLeave = () => {
    setLinkImage(lastHoveredImage);
  };

  const links = [
    {
      title: "Dribbble",
      link: "https://dribbble.com/egighaniyyu",
      desc: "Just a shot of my design",
      image: "/images/dribbble-navbar.png",
    },
    {
      title: "Medium",
      link: "https://medium.com/@egighaniyyu",
      desc: "Blog & Article about research",
      image: "/images/medium-navbar.png",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/egighaniyyu/",
      desc: "Let's connect and collaborate",
      image: "/images/linkedin-navbar.png",
    },
  ];

  const contacts = [
    {
      title: "Email",
      link: "mailto:egighaniyyu@gmail.com",
      desc: "email me for any inquiries",
      image: "/images/email-navbar.png",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/egghny/",
      desc: "Follow me for daily updates",
      image: "/images/instagram-navbar.png",
    },
    {
      title: "WhatsApp",
      link: "https://wa.me/6282334638693",
      desc: "Let's chat and discuss",
      image: "/images/whatsapp-navbar.png",
    },
  ];

  const [isOpenLink, setIsOpenLink] = useState(false);
  const [isOpenContacts, setIsOpenContacts] = useState(false);

  const [linkIcon, setLinkIcon] = useState(<ChevronDown />);
  const [contactsIcon, setContactsIcon] = useState(<ChevronDown />);

  const toggleLink = () => {
    setIsOpenLink(!isOpenLink);
    setLinkIcon(isOpenLink ? <ChevronDown /> : <ChevronUp />);
  };

  const toggleContacts = () => {
    setIsOpenContacts(!isOpenContacts);
    setContactsIcon(isOpenContacts ? <ChevronDown /> : <ChevronUp />);
  };
  return (
    <>
      {/* desktop view */}
      <div className="hidden xl:inline-flex mt-2 py-2 px-2 justify-center items-center gap-2 backdrop-blur-xl floating-bar-section left-1/2 -translate-x-1/2 rounded-full w-fit">
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
          WORKFLOW
        </NavLink>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="floating-nav">
                LINK
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white flex flex-row gap-4 p-4 md:w-[300px] lg:w-[400px]">
                {/* Column 1: Images */}
                <div className="w-6/12 h-auto">
                  {links.map((link) => (
                    <img
                      key={link.title}
                      src={link.image}
                      alt="#"
                      className="h-full object-cover rounded-lg mb-4 w-full"
                      style={{
                        display: linkImage === link.image ? "block" : "none",
                      }}
                    />
                  ))}
                </div>
                {/* Column 2: Links */}
                <div className="flex flex-col gap-4 w-full">
                  {links.map((link) => (
                    <a
                      key={link.title}
                      href={link.link}
                      target="_blank"
                      onMouseEnter={() => handleLinkHover(link)}
                      onMouseLeave={handleLinkLeave}
                      className="text-sm font-semibold text-[#212121] hover:text-blue-500"
                    >
                      <div className="flex flex-col gap-1">
                        <div className="text-base">{link.title}</div>
                        <div className="text-sm text-gray-400">{link.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="floating-nav">
                CONTACTS
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white flex flex-row gap-4 p-4 md:w-[300px] lg:w-[400px]">
                <div className="flex flex-col gap-4 w-full">
                  {contacts.map((contact) => (
                    <a
                      key={contact.title}
                      href={contact.link}
                      target="_blank"
                      className="text-base font-semibold text-[#212121] hover:text-blue-500"
                    >
                      <div className="flex gap-4">
                        <img
                          src={contact.image}
                          alt="contact"
                          className="w-12 h-12 object-cover rounded-md"
                        />
                        <div className="flex flex-col gap-1">
                          <div className="text-base">{contact.title}</div>
                          <div className="text-sm text-gray-400">
                            {contact.desc}
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* mobile view*/}
      <div className="flex xl:hidden container w-full py-4 mb-8 justify-between items-center">
        <div className="header-logo">EGIGHANIYYU</div>

        <Sheet>
          <SheetTrigger asChild>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-align-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#212121"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M10 12l10 0" />
              <path d="M6 18l14 0" />
            </svg>
          </SheetTrigger>
          <SheetContent side="top" className="h-screen bg-[#f5f4f4]">
            <div className="flex flex-col gap-2 justify-center align-middle h-screen">
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
                WORKFLOW
              </NavLink>

              <Collapsible
                open={isOpenLink}
                onOpenChange={toggleLink}
                className="w-full space-y-2"
              >
                <CollapsibleTrigger asChild>
                  <div className="flex items-center w-full">
                    <div className="floating-nav text-center w-full">LINK</div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-9 p-0 absolute right-6"
                      onClick={toggleLink}
                    >
                      {linkIcon}
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                  <div className="flex flex-col gap-4 w-full">
                    {links.map((link) => (
                      <a
                        key={link.title}
                        href={link.link}
                        target="_blank"
                        className="text-base font-semibold text-[#212121] hover:text-blue-500"
                      >
                        <div className="flex flex-col gap-2">
                          <div className="text-base text-center">
                            {link.title}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible
                open={isOpenContacts}
                onOpenChange={toggleContacts}
                className="w-full space-y-2"
              >
                <CollapsibleTrigger asChild>
                  <div className="flex items-center w-full">
                    <div className="floating-nav text-center w-full">
                      CONTACTS
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-9 p-0 absolute right-6"
                      onClick={toggleContacts}
                    >
                      {contactsIcon}
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                  <div className="flex flex-col gap-4 w-full">
                    {contacts.map((contact) => (
                      <a
                        key={contact.title}
                        href={contact.link}
                        target="_blank"
                        className="text-base font-semibold text-[#212121] hover:text-blue-500"
                      >
                        <div className="flex flex-col gap-2">
                          <div className="text-base text-center">
                            {contact.title}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Floatingbar;
