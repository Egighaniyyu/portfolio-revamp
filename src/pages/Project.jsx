import React from "react";
import Mainlayouts from "../layouts/Mainlayouts";

import Portfolio1 from "../assets/images/portfolio1.png";

export default function Project() {
  return (
    <>
      <Mainlayouts>
        <div className="container flex justify-between items-center w-full mt-10">
          <div className="w-5/12">
            <div className="flex flex-col items-start gap-16">
              <div className="flex flex-col items-start gap-5">
                <div className="title-page">PROJECT</div>
                <div className="subtitle-page">CREATIVITY IN EVERY CLICK</div>
              </div>
              <div className="flex flex-col items-start gap-6 w-full h-60 overflow-y-scroll">
                <a href="#" className="project-menu">
                  IDPods E-Commerce
                </a>
                <a href="#" className="project-menu">
                  Kitabisa Revamp Apps
                </a>
                <a href="#" className="project-menu">
                  E-Learning Mobile Apps
                </a>
                <a href="#" className="project-menu">
                  Finance Mobile Apps
                </a>
                <a href="#" className="project-menu">
                  Smart Home Mobile Apps
                </a>
                <a href="#" className="project-menu">
                  Weather Mobile Apps
                </a>
              </div>
            </div>
          </div>
          <div className="w-7/12">
            <img
              src={Portfolio1}
              alt="portfolio1"
              className="w-10/12 h-auto ml-auto"
            />
          </div>
        </div>
      </Mainlayouts>
    </>
  );
}
