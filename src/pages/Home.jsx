import Video from "../components/Home/Home_Video";
import HomeTopText from "../components/Home/HomeTopText";
import HomeBottomText from "../components/Home/HomeBottomText";
import Clock from "../components/shared/Clock";

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="relative z-10 flex h-screen w-screen flex-col justify-center gap-16 px-4 pt-20 pb-4 text-white sm:gap-20 md:justify-between md:gap-0 md:px-0 md:pt-0 md:pb-0">
        <HomeTopText />
        <HomeBottomText />
      </div>
      <Clock className="hidden md:flex" />
    </>
  );
};

export default Home;
