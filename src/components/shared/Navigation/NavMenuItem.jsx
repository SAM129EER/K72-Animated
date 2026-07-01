import React from "react";

const NavMenuItem = ({ title, marqueeText, images }) => {
  // Duplicate images so the marquee loops smoothly
  const marqueeImages = [...images, ...images];

  return (
    <div className="group relative overflow-hidden border-b cursor-pointer">
      {/* Normal Title */}
      <h1 className="font-[lausanne-lg] uppercase text-[6vw] leading-22 mt-3 text-center transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:-translate-y-full">
        {title}
      </h1>

      {/* Hover Layer */}
      <div className="absolute inset-0 translate-y-full overflow-hidden bg-(--primary-hover) transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:translate-y-0">
        <div className="moveX flex h-full w-max items-center gap-4 px-4">
          { marqueeImages.map((image, index) => (
            <React.Fragment key={index}>
              <h2 className="whitespace-nowrap font-[lausanne-lg] uppercase text-[6vw] leading-22 mt-3">
                {marqueeText}
              </h2>

              <img
                src={image}
                alt=""
                className="h-22 w-60 shrink-0 rounded-full object-cover"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavMenuItem;