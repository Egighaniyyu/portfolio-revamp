import React, { useState } from "react";
import Mainlayouts from "../layouts/Mainlayouts";

import DribbbleIcon from "../assets/images/dribbble.svg";
import MediumIcon from "../assets/images/medium.svg";

const Project = () => {
  const [portfolioImage, setPortfolioImage] = useState(
    "/public/images/portfolio1.png"
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
      title: "IDPods E-Commerce",
      link: "https://idpods.co.id/",
      image: "/images/portfolio1.png",
    },
    {
      title: "Finance Mobile Apps",
      link: "https://dribbble.com/shots/22088961-CashWave-Finance-Mobile-APP",
      image: "/images/portfolio2.png",
    },
    {
      title: "Smart Home Mobile Apps",
      link: "https://dribbble.com/shots/22083501-SmartLiving-Smart-Home-Mobile-App",
      image: "/images/portfolio3.png",
    },
    {
      title: "Weather Mobile Apps",
      link: "https://dribbble.com/shots/19903136-Weather-App",
      image: "/images/portfolio4.png",
    },
  ];

  return (
    <>
      <Mainlayouts>
        <div className="px-4 sm:container flex flex-col sm:flex-row justify-between items-center w-full mb-10">
          <div className="w-full sm:w-5/12">
            <div className="flex flex-col items-start w-full gap-8 sm:gap-16">
              <div className="flex flex-col items-start gap-0 md:gap-3 lg:gap-4 xl:gap-5">
                <div className="title-page">PROJECT</div>
                <div className="subtitle-page">CREATIVITY IN EVERY CLICK</div>
              </div>
              <div className="flex flex-col items-start gap-6 w-full h-auto sm:h-60 sm:overflow-y-scroll">
                {projects.map((project) => (
                  <a
                    key={project.title}
                    href={project.link}
                    className="project-menu"
                    onMouseEnter={() => handleProjectLinkHover(project)}
                    onMouseLeave={handleProjectLinkLeave}
                    target="_blank"
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
            </div>
          </div>
          <div className="hidden sm:block w-12/12 sm:w-7/12">
            <img
              src={portfolioImage}
              alt="portfolio"
              className="w-12/12 pt-4 sm:pt-0 sm:w-10/12 h-auto ml-auto"
            />
          </div>
        </div>

        <div className="flex pt-10 pb-24 md:pb-32 px-10 justify-between items-center w-full bg-black mt-20">
          <div className="footer-logo">EGIGHANIYYU</div>
          <div className="flex items-center gap-8">
            <img src={DribbbleIcon} alt="dribbble" />
            <img src={MediumIcon} alt="medium" />
          </div>
        </div>
      </Mainlayouts>
    </>
  );
};

export default Project;
