import React from "react";
import { Link } from "react-router-dom";
import { usePageTransition } from "../PageTransitionContext";

const NavMenuItem = ({ title, marqueeText, images, to, onClick, className = "" }) => {
  const marqueeImages = [...images, ...images];
  const Element = to ? Link : "button";
  const linkProps = to ? { to } : { type: "button" };
  const { transitionTo } = usePageTransition();

  const handleClick = (event) => {
    if (to) {
      event.preventDefault();
    }

    if (onClick) {
      onClick(() => {
        if (to) {
          transitionTo(to);
        }
      });
      return;
    }

    if (to) {
      transitionTo(to);
    }
  };

  return (
    <Element
      {...linkProps}
      data-transition-manual={onClick ? "true" : undefined}
      onClick={handleClick}
      className={`group relative block w-full overflow-hidden border-b cursor-pointer text-left ${className}`}
    >
      <div className="relative h-[18vw] overflow-hidden sm:h-[14vw] md:h-[8vw]">
        <h1
          className="
            absolute inset-0
            z-10
            flex items-center justify-center
            font-[lausanne-lg]
            uppercase
            text-[12vw]
            sm:text-[9vw]
            md:text-[6vw]
            leading-none
            transition-opacity
            duration-300
            group-hover:opacity-0
          "
        >
          {title}
        </h1>

        <div
          className="
            absolute inset-0
            opacity-0
            bg-[var(--primary-hover)]
            transition-opacity
            duration-200
            group-hover:opacity-100
          "
        >
          <div className="moveX flex h-full w-max items-center gap-3 px-3 sm:gap-4 sm:px-4">
            {marqueeImages.map((image, index) => (
              <React.Fragment key={index}>
                <h2 className="whitespace-nowrap font-[lausanne-lg] uppercase text-[12vw] leading-none text-black sm:text-[9vw] md:text-[6vw]">
                  {marqueeText}
                </h2>

                <img
                  src={image}
                  alt=""
                  className="h-12 w-28 rounded-full object-cover shrink-0 sm:h-16 sm:w-40 md:h-20 md:w-56"
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default NavMenuItem;
