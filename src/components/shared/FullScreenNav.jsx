import React from "react";
import NavMenuItem from "./Navigation/NavMenuItem";
import Logo from "./Navigation/Logo";
import Clock from "./Clock";

const FullScreenNav = () => {
  return (
    <div className="h-screen bg-black text-white grid grid-rows-[90px_1fr_90px]">
      {/* ================= Header ================= */}
      <header className="flex items-center justify-between h-16 pt-2">
        <Logo />
        <button className="group relative flex h-20 w-20 items-center justify-center">
          <span className="absolute h-[2px] w-14 rotate-45 bg-white"></span>

          <span className="absolute h-[2px] w-14 -rotate-45 bg-white"></span>
        </button>
      </header>

      {/* ================= Menu ================= */}
      <main className="flex flex-col justify-center">
        <div className="border-t">
          <NavMenuItem
            title="Projects"
            marqueeText="See Everything"
            images={["/NavImages/pic1.png", "/NavImages/pic2.jpg"]}
          />
        </div>

        <NavMenuItem
          title="Agency"
          marqueeText="Know About Us"
          images={[
            "/NavImages/Michele_640x290.jpg",
            "/NavImages/Michele_640x290.jpg",
          ]}
        />

        <NavMenuItem
          title="Contact"
          marqueeText="Let's Talk"
          images={["/NavImages/mail.png", "/NavImages/mail.png"]}
        />

        <NavMenuItem
          title="Blog"
          marqueeText="Read Articles"
          images={["/NavImages/pic3.jpg", "/NavImages/pic4.png"]}
        />
      </main>

      {/* Clock */}
      <div className="">
        <Clock />
      </div>

      {/* ================= Footer ================= */}
      <footer className="grid grid-cols-3 items-center px-3 py-3 ">
        {/* Empty column (Clock occupies the left visually) */}
        <div></div>

        {/* Center */}
        <div className="flex justify-center gap-8 text-lg uppercase tracking-wide text-white/70">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Cookies</p>
        </div>

        {/* Right */}
        <div className="flex justify-end gap-6 text-lg font-medium uppercase">
          <p>FB</p>
          <p>IG</p>
          <p>IN</p>
        </div>
      </footer>
    </div>
  );
};

export default FullScreenNav;
