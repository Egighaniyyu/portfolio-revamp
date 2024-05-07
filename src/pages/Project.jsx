import React, { useState } from "react";
import Mainlayouts from "../layouts/Mainlayouts";

import LinkedInIcon from "../assets/images/linkedin.svg";
import DribbbleIcon from "../assets/images/dribbble.svg";
import MediumIcon from "../assets/images/medium.svg";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Project = () => {
  const [portfolioImage, setPortfolioImage] = useState(
    "/images/portfolio5.png"
  );
  const [lastHoveredImage, setLastHoveredImage] = useState("");

  const handleProjectLinkHover = (project) => {
    setPortfolioImage(project.image);
    setLastHoveredImage(project.image);
  };

  const handleProjectLinkLeave = () => {
    setPortfolioImage(lastHoveredImage);
  };

  const projects = [
    {
      title: "Case Study : Kitabisa Revamp",
      link: "/detail-project/ui-ux-case-study-menu-kabar-terbaru-kitabisa-com",
      image: "/images/portfolio5.png",
      category: "case study",
      tag: [
        {
          title: "Case Study",
          class: "case-study",
        },
        {
          title: "UI Design",
          class: "ui-design",
        },
        {
          title: "UX Design",
          class: "ux-design",
        },
      ],
    },
    {
      title: "UI Design : SIM-RS | Medical Dashboard",
      link: "https://dribbble.com/shots/22134409-SIM-RS-Medical-Dashboard",
      image: "/images/portfolio7.png",
      category: "ui shots",
      tag: [
        {
          title: "UI Design",
          class: "ui-design",
        },
      ],
    },
    {
      title: "Development : Meny Finance Landing Page",
      link: "https://menyfinance.framer.website/",
      image: "/images/portfolio8.svg",
      category: "development",
      tag: [
        {
          title: "Framer",
          class: "framer",
        },
        {
          title: "UI Design",
          class: "ui-design",
        },
        {
          title: "UX Design",
          class: "ux-design",
        },
      ],
    },
    {
      title: "Case Study : PWMP Link Redesign",
      link: "https://egighaniyyu.notion.site/UI-UX-Case-Study-PWMP-Link-App-Revamp-17a8348f2a5945d3bede4fc6871f2a18?pvs=4",
      image: "/images/portfolio6.png",
      category: "case study",
      tag: [
        {
          title: "Case Study",
          class: "case-study",
        },
        {
          title: "UI Design",
          class: "ui-design",
        },
        {
          title: "UX Design",
          class: "ux-design",
        },
      ],
    },
    {
      title: "Project : IDPods E-Commerce (Case Study Coming Soon)",
      link: "https://idpods.co.id/",
      image: "/images/portfolio1.png",
      category: "case study",
      tag: [
        {
          title: "UI Design",
          class: "ui-design",
        },
        {
          title: "UX Design",
          class: "ux-design",
        },
      ],
    },
    {
      title: "UI Design : Finance Mobile Apps",
      link: "https://dribbble.com/shots/22088961-CashWave-Finance-Mobile-APP",
      image: "/images/portfolio2.png",
      category: "ui shots",
      tag: [
        {
          title: "UI Design",
          class: "ui-design",
        },
      ],
    },
    {
      title: "UI Design : Smart Home Mobile Apps",
      link: "https://dribbble.com/shots/22083501-SmartLiving-Smart-Home-Mobile-App",
      image: "/images/portfolio3.png",
      category: "ui shots",
      tag: [
        {
          title: "UI Design",
          class: "ui-design",
        },
      ],
    },
    {
      title: "UI Design : Weather Mobile Apps",
      link: "https://dribbble.com/shots/19903136-Weather-App",
      image: "/images/portfolio4.png",
      category: "ui shots",
      tag: [
        {
          title: "UI Design",
          class: "ui-design",
        },
      ],
    },
  ];

  const categories = [...new Set(projects.map((project) => project.category))]; // Mendapatkan semua kategori unik dari projects

  const [activeTab, setActiveTab] = useState(categories[0]); // Set kategori pertama sebagai kategori aktif

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  ); // Filter proyek berdasarkan kategori yang dipilih

  return (
    <>
      <Mainlayouts>
        <div className="container flex flex-col items-start gap-2">
          <div className="title-page">PROJECT</div>
          <div className="subtitle-page">CREATIVITY IN EVERY CLICK</div>
        </div>
        <div className=" sm:container flex flex-col sm:flex-row justify-between w-full mb-10">
          <div className="w-full sm:w-5/12">
            <div className="flex flex-col items-start w-full gap-8 sm:gap-16">
              <Tabs defaultValue={categories[0]} className="w-full mt-6">
                <TabsList className="grid w-full grid-cols-3">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      onClick={() => setActiveTab(category)}
                      className="mx-1"
                    >
                      {category.toUpperCase()}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {categories.map((category) => (
                  <TabsContent key={category} value={category}>
                    <div className="flex flex-col items-start gap-6 w-full mt-8">
                      {filteredProjects.map((project) => (
                        <a
                          key={project.title}
                          href={project.link}
                          className="project-menu"
                          onMouseEnter={() => handleProjectLinkHover(project)}
                          onMouseLeave={handleProjectLinkLeave}
                        >
                          <div className="block sm:hidden w-4/12 sm:w-7/12">
                            <img
                              src={project.image}
                              alt="portfolio"
                              className="w-12/12 pt-4 sm:pt-0 sm:w-10/12 h-auto ml-auto"
                            />
                          </div>
                          {project.title}
                        </a>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
          <div className="hidden sm:block w-12/12 sm:w-7/12 mt-6">
            <div className="flex flex-col gap-5 pl-20 items-start">
              {" "}
              {/* Mengubah align-items menjadi items-start */}
              <img
                src={portfolioImage}
                alt="portfolio"
                className="w-12/12 pt-4 sm:pt-0 sm:w-10/12 h-auto"
              />
              {projects.map((projectItem) => {
                if (projectItem.image === portfolioImage) {
                  return (
                    <div
                      key={projectItem.title}
                      className="flex flex-row gap-2 items-start"
                    >
                      {projectItem.tag.map((tag) => (
                        <div className={`tag ${tag.class}`} key={tag.title}>
                          {tag.title}
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>

        <div className="flex pt-10 pb-24 md:pb-32 px-10 justify-between items-center w-full bg-black mt-20">
          <div className="footer-logo">EGIGHANIYYU</div>
          <div className="flex items-center gap-8">
            <a href="https://www.linkedin.com/in/egighaniyyu/" target="_blank">
              <img
                src={LinkedInIcon}
                alt="linkedin"
                className="w-7 h-7 md:w-10 md:h-10"
              />
            </a>
            <a href="https://dribbble.com/egighaniyyu" target="_blank">
              <img
                src={DribbbleIcon}
                alt="dribbble"
                className="w-7 h-7 md:w-10 md:h-10"
              />
            </a>
            <a href="https://medium.com/@egighaniyyu" target="_blank">
              <img
                src={MediumIcon}
                alt="medium"
                className="w-7 h-7 md:w-10 md:h-10"
              />
            </a>
          </div>
        </div>
      </Mainlayouts>
    </>
  );
};

export default Project;
