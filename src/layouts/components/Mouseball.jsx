import React, { useEffect, useRef } from "react";
import gsap, { Elastic } from "gsap";

const Mouseball = () => {
  const ballRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP and set initial ball position
    const ball = ballRef.current;
    gsap.set(ball, {
      left: -25,
      top: -25,
      // ease: Elastic.easeOut.config(1, 0.75),
    });

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

      if (e.target.classList == "header-title") {
        gsap.quickTo(ball, 0.3, { width: 100, height: 100 });
      } else {
        gsap.quickTo(ball, 0.3, { width: 50, height: 50 });
      }
    });

    return () => {
      // Cleanup event listener
      window.removeEventListener("mousemove", () => {});
    };
  }, []);
  return (
    <>
      <div className="ball" ref={ballRef}></div>
    </>
  );
};

export default Mouseball;
