import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const agenceImages = [
  "/Agences/CAMILLE_480X640_2.jpg",
  "/Agences/Carl_480x640.jpg",
  "/Agences/ChantalG_480x640.jpg",
  "/Agences/joel_480X640_3.jpg",
  "/Agences/MEGGIE_480X640_2.jpg",
  "/Agences/MEL_480X640.jpg",
  "/Agences/Michele_480X640.jpg",
  "/Agences/Olivier_480x640.jpg",
];

const Agence = () => {
  // scrollTrigger need this to work properly
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  useGSAP(() => {
    const imageDiv = imageDivRef.current;
    gsap.to(imageDiv, {
      scrollTrigger: {
        trigger: imageDiv,
        markers: true,
        start: "top 25%",
        end: "top -90%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          // console.log("Scroll progress:", self.progress);
          const index = Math.floor(self.progress * (agenceImages.length-1));
          imageRef.current.src = agenceImages[index]
        },
      },
    });
  });

  return (
    <div>
      {" "}
      <div className="section1">
        <div
          ref={imageDivRef}
          className="absolute top-[25vh] left-[25vw]  h-[18vw] w-[14vw] overflow-hidden rounded-4xl"
        >
          <img
            ref={imageRef}
            src={agenceImages[0]}
            alt="Agence portrait"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative">
          <div className="mt-[55vh]">
            <h1 className="text-[19vw] uppercase text-center leading-[15vw] font-[lausanne-lg]">
              SEVEN7Y <br />
              TWO
            </h1>
          </div>
          <div className="mt-[5vh] pl-[40vw]">
            <p className="font-[lausanne-sm] text-5xl ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and
              open-minded, and we make sure creativity crowds out ego from every
              corner. A brand is a living thing,with values, a personality and a
              story. If we ignore that,we can achieve short-term success, but
              not influence that goes the distance. We bring that perspective to
              every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
