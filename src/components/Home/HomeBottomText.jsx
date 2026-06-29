import React from "react";
import { Link } from "react-router-dom";
import Clock from "./Clock";

const HomeBottomText = () => {
  return (
    <div className="font-[lausanne-lg]  flex justify-center items-center gap-3 pb-3 ">
      <Link
        to="/projects"
        className="text-[6vw] uppercase border-3 rounded-full px-8 leading-[6vw] hover:text-lime-400 hover:border-lime-400 pt-2 "
      >
        Projects
      </Link>
      <Link
        to="/agence"
        className="text-[6vw] uppercase border-3 rounded-full px-8 leading-[6vw] hover:text-lime-400 hover:border-lime-400 pt-2"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
