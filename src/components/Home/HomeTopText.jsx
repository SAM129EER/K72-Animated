import React from "react";
import Video from "./Home_Video";

const HomeTopText = () => {
  return (
    <>
      <div className="font-[lausanne-sm] text-center pt-3">
        <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">
          The spark for
        </div>
        <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">
          all
          <div className="h-[8vw] w-[16vw] rounded-full overflow-hidden -mt-4 flex items-center justify-center">
            <Video />
          </div>
          things
        </div>
        <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">creative</div>
      </div>
    </>
  );
};

export default HomeTopText;
