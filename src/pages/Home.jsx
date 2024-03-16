import React from "react";
import Mainlayouts from "../layouts/Mainlayouts";

// splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";

// images
import JumbotronImage from "../assets/images/jumbotron.png";
import ScrollDownImage from "../assets/images/img-scrolldown.png";
import UnionWhite from "../assets/images/union-white.svg";
import UnionBlue from "../assets/images/union-blue.svg";
import UnionBlack from "../assets/images/union-black.svg";
import Portfolio1 from "../assets/images/portfolio1.png";
import Portfolio2 from "../assets/images/portfolio2.png";
import Portfolio3 from "../assets/images/portfolio3.png";
import Portfolio4 from "../assets/images/portfolio4.png";
import Portfolio5 from "../assets/images/portfolio5.png";
import Portfolio6 from "../assets/images/portfolio6.png";
import Portfolio7 from "../assets/images/portfolio7.png";
import Portfolio8 from "../assets/images/portfolio8.svg";
import Quotes1 from "../assets/images/quotes1.png";
import Quotes2 from "../assets/images/quotes2.png";
import ContactUsImage from "../assets/images/img-contactus.png";
import ArrowUpRight from "../assets/images/arrow-up-right.svg";
import LinkedInIcon from "../assets/images/linkedin.svg";
import DribbbleIcon from "../assets/images/dribbble.svg";
import MediumIcon from "../assets/images/medium.svg";

export default function Home() {
  return (
    <>
      <Mainlayouts>
        {/* jumbotron */}
        <div className="px-4 md:container">
          <div className="sec-jumbotron relative">
            <div className="flex flex-col items-start">
              <div className="header-title text-4xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl">
                FROM IDEA
              </div>
              <div className="header-title text-4xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl">
                TO AWESOME
              </div>
            </div>
            <div className="w-full absolute -z-10 top-3/4">
              <div className="flex flex-col relative w-full">
                <div className="w-full">
                  <img src={JumbotronImage} alt="Jumbotron" />
                </div>
                <div className="scroll-spin-image absolute left-5 md:-top-1/4">
                  <img
                    src={ScrollDownImage}
                    alt="scroll down"
                    className="animate-spin img-spin w-4/12 sm:w-8/12 md:w-10/12 lg:w-12/12 xl:w-fit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end jumbotron */}

        {/* services */}
        <div className="px-4 mt-section-services md:container">
          <div className="flex flex-col items-start gap-3">
            <div className="w-full flex justify-center items-center self-start border-b border-solid border-black sec-services">
              <div className="text-services text-center">UI DESIGNER</div>
            </div>
            <div className="w-full flex justify-center items-center self-start border-b border-solid border-black sec-services">
              <div className="text-services text-center">UX DESIGNER</div>
            </div>
            <div className="w-full flex justify-center items-center self-start border-b border-solid border-black sec-services">
              <div className="text-services text-center">UI ENGINEER</div>
            </div>
            <div className="w-full flex justify-center items-center self-start border-b border-solid border-black sec-services">
              <div className="text-services text-center">FRAMER DESIGNER</div>
            </div>
          </div>
        </div>
        {/* end services */}

        {/* swipe services */}
        <div className="mt-section">
          <Splide
            options={{
              type: "loop",
              drag: false,
              arrows: false,
              pagination: false,
              perPage: 5,
              autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
                speed: 1,
              },
            }}
            extensions={{ AutoScroll }}
            className="py-5 bg-black swipe-service"
          >
            <SplideSlide>
              <div className="text-swipe-services">UI DESIGNER</div>
            </SplideSlide>
            <SplideSlide>
              <img src={UnionWhite} alt="union wihite" />
            </SplideSlide>
            <SplideSlide>
              <div className="text-swipe-services">UX DESIGNER</div>
            </SplideSlide>
            <SplideSlide>
              <img src={UnionWhite} alt="union wihite" />
            </SplideSlide>
            <SplideSlide>
              <div className="text-swipe-services">UI ENGINEER</div>
            </SplideSlide>
            <SplideSlide>
              <img src={UnionWhite} alt="union wihite" />
            </SplideSlide>
            <SplideSlide>
              <div className="text-swipe-services">FRAMER DESIGNER</div>
            </SplideSlide>
            <SplideSlide>
              <img src={UnionWhite} alt="union wihite" />
            </SplideSlide>
          </Splide>
        </div>
        {/* end swipe services */}

        {/* portfolio */}
        <div className="pl-2 mt-section lg:container">
          <div className="flex flex-col items-start relative w-fit">
            <div className="portfolio-title">CREATIVITY IN</div>
            <div className="portfolio-title">EVERY CLICK</div>
            <div className="union-blue">
              <img src={UnionBlue} alt="union blue" />
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-20">
          <Splide
            options={{
              type: "loop",
              drag: true,
              arrows: false,
              pagination: false,
              perPage: 3,
              autoWidth: true,
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: true,
                rewind: false,
                speed: 1,
              },
            }}
            extensions={{ AutoScroll }}
            className="swipe-portfolio"
          >
            <SplideSlide>
              {/* <div className="cursor-eye-portfolio"> */}
              <a
                href="https://menyfinance.framer.website/"
                target="_blank"
                className="w-auto h-auto"
              >
                <img
                  src={Portfolio8}
                  alt="portfolio8"
                  className="w-8/12 h-auto lg:w-11/12"
                />
              </a>
              {/* </div> */}
            </SplideSlide>
            <SplideSlide>
              {/* <div className="cursor-eye-portfolio"> */}
              <a
                href="/detail-project/ui-ux-case-study-menu-kabar-terbaru-kitabisa-com"
                target="_blank"
                className="w-auto h-auto"
              >
                <img
                  src={Portfolio5}
                  alt="portfolio5"
                  className="w-8/12 h-auto lg:w-11/12"
                />
              </a>
              {/* </div> */}
            </SplideSlide>
            <SplideSlide>
              {/* <div className="cursor-eye-portfolio"> */}
              <a
                href="https://egighaniyyu.notion.site/UI-UX-Case-Study-PWMP-Link-App-Revamp-17a8348f2a5945d3bede4fc6871f2a18?pvs=4"
                target="_blank"
                className="w-auto h-auto"
              >
                <img
                  src={Portfolio6}
                  alt="portfolio6"
                  className="w-8/12 h-auto lg:w-11/12"
                />
              </a>
              {/* </div> */}
            </SplideSlide>
            <SplideSlide>
              {/* <div className="cursor-eye-portfolio"> */}
              <a
                href="https://idpods.co.id/"
                target="_blank"
                className="w-auto h-auto"
              >
                <img
                  src={Portfolio1}
                  alt="portfolio1"
                  className="w-8/12 h-auto lg:w-11/12"
                />
              </a>
              {/* </div> */}
            </SplideSlide>
            <SplideSlide>
              {/* <div className="cursor-eye-portfolio"> */}
              <a
                href="https://dribbble.com/shots/22134409-SIM-RS-Medical-Dashboard"
                target="_blank"
                className="w-auto h-auto"
              >
                <img
                  src={Portfolio7}
                  alt="portfolio7"
                  className="w-8/12 h-auto lg:w-11/12"
                />
              </a>
              {/* </div> */}
            </SplideSlide>
            <SplideSlide>
              {/* <div className="cursor-eye-portfolio "> */}
              <a
                href="https://dribbble.com/shots/22088961-CashWave-Finance-Mobile-APP"
                target="_blank"
                className="w-auto h-auto"
              >
                <img
                  src={Portfolio2}
                  alt="portfolio2"
                  className="w-8/12 h-auto lg:w-11/12"
                />
              </a>
              {/* </div> */}
            </SplideSlide>
            <SplideSlide>
              {/* <div className="cursor-eye-portfolio "> */}
              <a
                href="https://dribbble.com/shots/22083501-SmartLiving-Smart-Home-Mobile-App"
                target="_blank"
                className="w-auto h-auto"
              >
                <img
                  src={Portfolio3}
                  alt="portfolio3"
                  className="w-8/12 h-auto lg:w-11/12"
                />
              </a>
              {/* </div> */}
            </SplideSlide>
            <SplideSlide>
              {/* <div className="cursor-eye-portfolio "> */}
              <a
                href="https://dribbble.com/shots/19903136-Weather-App"
                target="_blank"
                className="w-auto h-auto"
              >
                <img
                  src={Portfolio4}
                  alt="portfolio4"
                  className="w-8/12 h-auto lg:w-11/12"
                />
              </a>
              {/* </div> */}
            </SplideSlide>
          </Splide>
        </div>
        <div className="mt-10">
          <Splide
            options={{
              type: "loop",
              drag: true,
              arrows: false,
              pagination: false,
              perPage: 3,
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: true,
                rewind: false,
                speed: -1,
              },
            }}
            extensions={{ AutoScroll }}
            className="swipe-portfolio"
          >
            <SplideSlide>
              {/* <div className="cursor-eye-portfolio"> */}
              <a
                href="https://menyfinance.framer.website/"
                target="_blank"
                className="w-auto h-auto"
              >
                <img
                  src={Portfolio8}
                  alt="portfolio8"
                  className="w-8/12 h-auto lg:w-11/12"
                />
              </a>
              {/* </div> */}
            </SplideSlide>
            <SplideSlide>
              {/* <div className="cursor-eye-portfolio"> */}
              <a
                href="https://idpods.co.id/"
                target="_blank"
                className="w-auto h-auto"
              >
                <img
                  src={Portfolio1}
                  alt="portfolio1"
                  className="w-8/12 h-auto lg:w-11/12"
                />
              </a>
              {/* </div> */}
            </SplideSlide>
            <SplideSlide>
              {/* <div className="cursor-eye-portfolio "> */}
              <a
                href="https://dribbble.com/shots/22088961-CashWave-Finance-Mobile-APP"
                target="_blank"
                className="w-auto h-auto"
              >
                <img
                  src={Portfolio2}
                  alt="portfolio2"
                  className="w-8/12 h-auto lg:w-11/12"
                />
              </a>
              {/* </div> */}
            </SplideSlide>
            <SplideSlide>
              {/* <div className="cursor-eye-portfolio "> */}
              <a
                href="https://dribbble.com/shots/22083501-SmartLiving-Smart-Home-Mobile-App"
                target="_blank"
                className="w-auto h-auto"
              >
                <img
                  src={Portfolio3}
                  alt="portfolio3"
                  className="w-8/12 h-auto lg:w-11/12"
                />
              </a>
              {/* </div> */}
            </SplideSlide>
            <SplideSlide>
              {/* <div className="cursor-eye-portfolio "> */}
              <a
                href="https://dribbble.com/shots/19903136-Weather-App"
                target="_blank"
                className="w-auto h-auto"
              >
                <img
                  src={Portfolio4}
                  alt="portfolio4"
                  className="w-8/12 h-auto lg:w-11/12"
                />
              </a>
              {/* </div> */}
            </SplideSlide>
          </Splide>
        </div>
        {/* end portfolio */}

        {/* quote */}
        <div className="inline-flex flex-col justify-center items-center gap-0 md:gap-2 sm:container mt-section w-full">
          <div className="flex items-center gap-8 ">
            <div className="w-full text-quote sm:w-9/12">MAKE AMAZING</div>
            <img
              src={Quotes1}
              alt="quotes1"
              className="hidden sm:block sm:img-qoute sm:w-3/12"
            />
          </div>
          <div className="flex items-center gap-8 m-auto">
            <img
              src={Quotes2}
              alt="quotes2"
              className="hidden sm:block sm:img-qoute sm:w-3/12"
            />
            <div className="w-full text-quote sm:w-9/12">IDEAS FOR YOU</div>
          </div>
        </div>
        {/* end quote */}

        {/* contact us */}
        <div className="container mt-section">
          <div className="w-full sec-contactus relative">
            <div className="relative w-fit">
              <div className="px-4 sm:container text-header-contactus">
                CONTACT US
              </div>
              <div className="union-black">
                <img src={UnionBlack} alt="union black" className="w-2/4" />
              </div>
            </div>
            <div className="absolute bottom-8 right-0 sm:bottom-10 sm:right-10 cursor-pointer">
              <div className="flex justify-center align-middle relative">
                <img
                  src={ArrowUpRight}
                  alt="arrow up right"
                  className="btn-contactus w-4/12 md:w-5/12 lg:w-6/12"
                />
                <img
                  src={ContactUsImage}
                  alt="contact us"
                  className="animate-spin img-spin w-8/12 md:w-10/12 lg:w-12/12 xl:w-fit"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end contact us */}

        <div className="flex pt-32 pb-28 md:pb-32 px-10 justify-between items-center w-full bg-black -mt-20">
          <div className="footer-logo">EGIGHANIYYU</div>
          <div className="flex items-center gap-4 sm:gap-8">
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
}
