import React, { useEffect, useRef } from "react";
import "../assets/css/index.css";

import gsap from "gsap";

// splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";

// shadcn
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
import Quotes1 from "../assets/images/quotes1.png";
import Quotes2 from "../assets/images/quotes2.png";
import ContactUsImage from "../assets/images/img-contactus.png";
import ArrowUpRight from "../assets/images/arrow-up-right.svg";
import DribbbleIcon from "../assets/images/dribbble.svg";
import MediumIcon from "../assets/images/medium.svg";
import ExternalLinkIcon from "../assets/images/externallink.svg";
import ContactIcon from "../assets/images/contact.svg";

const Home = () => {
  const ballRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP and set initial ball position
    const ball = ballRef.current;
    gsap.set(ball, { left: -25, top: -25 });

    // Handle mousemove event
    window.addEventListener("mousemove", (e) => {
      gsap.to(ball, {
        duration: 0.35,
        x: e.clientX,
        y: e.clientY,
        ease: "none",
        overwrite: "auto",
        stagger: 0.035,
      });
    });

    return () => {
      // Cleanup event listener
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <>
      <div className="ball" ref={ballRef}></div>
      {/* header */}
      <div className="container w-full py-9">
        <div className="header-logo">EGIGHANIYYU</div>
      </div>
      {/* end header */}

      {/* jumbotron */}
      <div className="container">
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
              <div className="scroll-spin-image">
                <img
                  src={ScrollDownImage}
                  alt="scroll down"
                  className="animate-spin img-spin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end jumbotron */}

      {/* services */}
      <div className="container mt-section-services">
        <div className="flex flex-col items-start gap-8">
          <div className="w-full flex pt-5 justify-center items-center self-start border-b border-solid border-black sec-services">
            <div className="text-services text-center">UI DESIGNER</div>
          </div>
          <div className="w-full flex pt-5 justify-center items-center self-start border-b border-solid border-black sec-services">
            <div className="text-services text-center">UX DESIGNER</div>
          </div>
          <div className="w-full flex pt-5 justify-center items-center self-start border-b border-solid border-black sec-services">
            <div className="text-services text-center">UI ENGINEER</div>
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
        </Splide>
      </div>
      {/* end swipe services */}

      {/* portfolio */}
      <div className="container mt-section">
        <div className="flex flex-col items-start relative w-fit">
          <div className="portfolio-title">CREATIVITY IN</div>
          <div className="portfolio-title">EVERY CLICK</div>
          <div className="union-blue">
            <img src={UnionBlue} alt="union blue" />
          </div>
        </div>
      </div>
      <div className="mt-20">
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
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
          className="swipe-portfolio"
        >
          <SplideSlide>
            <div className="cursor-eye-portfolio">
              <img src={Portfolio1} alt="portfolio1" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="cursor-eye-portfolio">
              <img src={Portfolio2} alt="portfolio2" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="cursor-eye-portfolio">
              <img src={Portfolio3} alt="portfolio3" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="cursor-eye-portfolio">
              <img src={Portfolio4} alt="portfolio4" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <div className="mt-20">
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
            <div className="cursor-eye-portfolio">
              <img src={Portfolio1} alt="portfolio1" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="cursor-eye-portfolio">
              <img src={Portfolio2} alt="portfolio2" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="cursor-eye-portfolio">
              <img src={Portfolio3} alt="portfolio3" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="cursor-eye-portfolio">
              <img src={Portfolio4} alt="portfolio4" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
      {/* end portfolio */}

      {/* quote */}
      <div className="inline-flex flex-col justify-center items-center gap-10 mt-section w-full">
        <div className="flex items-center gap-8">
          <div className="text-quote w-9/12">MAKE AMAZING</div>
          <img src={Quotes1} alt="quotes1" className="img-qoute w-3/12" />
        </div>
        <div className="flex items-center gap-8">
          <img src={Quotes2} alt="quotes2" className="img-qoute w-3/12" />
          <div className="text-quote w-9/12">IDEAS FOR YOU</div>
        </div>
      </div>
      {/* end quote */}

      {/* contact us */}
      <div className="container mt-section">
        <div className="w-full sec-contactus relative">
          <div className="relative w-fit">
            <div className="container text-header-contactus">CONTACT US</div>
            <div className="union-black">
              <img src={UnionBlack} alt="union black" />
            </div>
          </div>
          <div className="absolute bottom-10 right-10 cursor-pointer">
            <div className="flex justify-center align-middle relative">
              <img
                src={ArrowUpRight}
                alt="arrow up right"
                className="btn-contactus"
              />
              <img
                src={ContactUsImage}
                alt="contact us"
                className="animate-spin img-spin"
              />
            </div>
          </div>
        </div>
      </div>
      {/* end contact us */}

      <div className="flex pt-32 pb-10 px-10 justify-between items-center w-full bg-black -mt-20">
        <div className="footer-logo">EGIGHANIYYU</div>
        <div className="flex items-center gap-8">
          <img src={DribbbleIcon} alt="dribbble" />
          <img src={MediumIcon} alt="medium" />
        </div>
      </div>

      {/* floating bar */}
      <div className="inline-flex p-3 justify-center items-center gap-2 fixed bottom-6 left-1/2 -translate-x-1/2 backdrop-blur-lg floating-bar-section">
        <div className="floating-nav active">HOME</div>
        <div className="floating-nav ">PROJECT</div>
        <div className="floating-nav ">SKILL & TOOLS</div>
        <div className="floating-nav ">EXPERIENCE</div>
        <div className="border border-y-8"></div>
        <Popover>
          <PopoverTrigger>
            <img
              src={ExternalLinkIcon}
              alt="external link"
              className="p-3 floating-icon"
            />
          </PopoverTrigger>
          <PopoverContent className="backdrop-blur-lg bg-black bg-opacity-80 w-fit">
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
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <img
              src={ContactIcon}
              alt="contact"
              className="p-3 floating-icon"
            />
          </PopoverTrigger>
          <PopoverContent className="backdrop-blur-lg bg-black bg-opacity-80 w-fit">
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
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default Home;
