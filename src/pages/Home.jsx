import React from "react";
import Video from "../components/Home/Home_Video";
import HomeTopText from "../components/Home/HomeTopText";
import HomeBottomText from "../components/Home/HomeBottomText";
import Clock from "../components/shared/Clock";
// import Logo from "../components/Home/Logo";
const Home = () => {
  return (
    <>
    {/* <Logo/> */}
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen flex flex-col justify-between text-white z-10 relative">
        <HomeTopText />
        <HomeBottomText />
      </div>
      <Clock />
    </>
  );
};

export default Home;
