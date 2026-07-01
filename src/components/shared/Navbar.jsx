import React from "react";
import Logo from "./Navigation/Logo";

const Navbar = () => {
  return (
    <div>
      <div className="  top-0 flex justify-between items-center w-full fixed z-10">
        <div className="p-4">
          <Logo />
        </div>
        <div className="bg-black fixed top-0 right-0 w-54 h-14">
            <div className="flex flex-col justify-center items-end gap-0.5 h-full pr-4 ">
                <div className="h-1 w-20 bg-white rounded-md" ></div>
                <div className="h-1 w-10 bg-white rounded-md"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
