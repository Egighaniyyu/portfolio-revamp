import React, { useRef, useLayoutEffect, useEffect } from "react";
import PagesRouter from "./routes/PagesRouter";
import "./input.css";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

const App = () => {
  document.title = "Egi Ghaniyyu";

  // const el = useRef(null);
  // const q = gsap.utils.selector(el);
  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // useLayoutEffect(() => {
  //   let smoother = ScrollSmoother.create({
  //     smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  //     effects: true, // looks for data-speed and data-lag attributes on elements
  //   });
  //   return () => {
  //     smoother.kill();
  //   };
  // }, []);

  return (
    // <div ref={el} id="smooth-wrapper">
    //   <div id="smooth-content">
    <PagesRouter />
    //   </div>
    // </div>
  );
};

export default App;
