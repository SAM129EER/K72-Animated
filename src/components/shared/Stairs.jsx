import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = ({ children }) => {
  console.log(children);
  const loctae = useLocation().pathname;
  const pageRef = useRef(null);
  const parentStairRef = useRef(null);
  const tl = gsap.timeline();
  useGSAP(
    function () {
      tl.to(parentStairRef.current, {
        display: "block",
      });
      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.35,
        },
      });
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.35,
        },
      });
      tl.to(parentStairRef.current, {
        display: "none",
      });
      tl.to(".stair", {
        y: "0",
      });
        gsap.from(pageRef.current,{
          opacity:0,
        //   scale:0.9,
          delay:1.3
        })
    },
    [loctae],
  );
  return (
    <div>
      <div ref={parentStairRef} className="">
        <div className="flex top-0 z-30 h-screen w-full fixed">
          <div className="stair bg-black h-full w-1/5 "></div>
          <div className="stair bg-black h-full w-1/5 "></div>
          <div className="stair bg-black h-full w-1/5 "></div>
          <div className="stair bg-black h-full w-1/5 "></div>
          <div className="stair bg-black h-full w-1/5 "></div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stairs;
