import React from "react";

const NavMenuItem = ({ title, marqueeText, images }) => {
  const marqueeImages = [...images, ...images];

  return (
    <div className="group relative overflow-hidden border-b  cursor-pointer">

      <div className="relative h-[8vw] overflow-hidden">

        {/* Title */}
        <h1
          className="
            absolute inset-0
            z-10
            flex items-center justify-center
            font-[lausanne-lg]
            uppercase
            text-[6vw]
            leading-none
            transition-opacity
            duration-300
            group-hover:opacity-0
          "
        >
          {title}
        </h1>

        {/* Marquee */}
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
          <div className="moveX flex h-full w-max items-center gap-4 px-4">
            {marqueeImages.map((image, index) => (
              <React.Fragment key={index}>
                <h2 className="whitespace-nowrap font-[lausanne-lg] uppercase text-[6vw] leading-none text-black">
                  {marqueeText}
                </h2>

                <img
                  src={image}
                  alt=""
                  className="h-20 w-56 rounded-full object-cover shrink-0"
                />
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NavMenuItem;