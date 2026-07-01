import React from "react";
import Logo from "./Navigation/Logo";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between">
      <div className="p-4">
        <Logo />
      </div>

      <button className="group absolute top-0 right-0 h-16 w-54 bg-black overflow-hidden ">
        {/* Default Layer */}
        <div className="absolute inset-0 flex items-center justify-end pr-4 transition-opacity duration-300 group-hover:opacity-0">
          <div className="flex flex-col gap-1">
            <span className="h-1 w-20 rounded-full bg-white"></span>
            <span className="h-1 w-10 rounded-full bg-white"></span>
          </div>
        </div>

        {/* Hover Layer */}
        <div
          className="absolute inset-0 origin-top scale-y-0 transition-transform duration-300 ease-in-out group-hover:scale-y-100"
          style={{ backgroundColor: "var(--primary-hover)" }}
        >
          <div className="flex h-full items-center justify-end pr-4">
            <div className="flex flex-col gap-1">
              <span className="h-1 w-20 rounded-full bg-black"></span>
              <span className="h-1 w-10 rounded-full bg-black"></span>
            </div>
          </div>
        </div>
      </button>
    </header>
  );
};

export default Navbar;