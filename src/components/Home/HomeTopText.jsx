import Video from "./Home_Video";

const HomeTopText = () => {
  return (
    <>
      <div className="pt-0 text-center font-[lausanne-sm] md:pt-3">
        <div className="flex items-center justify-center text-[16vw] uppercase leading-[13vw] sm:text-[13vw] sm:leading-[10.5vw] md:text-[9.5vw] md:leading-[8vw]">
          The spark for
        </div>
        <div className="flex items-center justify-center text-[16vw] uppercase leading-[13vw] sm:text-[13vw] sm:leading-[10.5vw] md:text-[9.5vw] md:leading-[8vw]">
          all
          <div className="-mt-2 flex h-[13vw] w-[26vw] items-center justify-center overflow-hidden rounded-full sm:h-[10vw] sm:w-[20vw] md:-mt-4 md:h-[8vw] md:w-[16vw]">
            <Video />
          </div>
          things
        </div>
        <div className="flex items-center justify-center text-[16vw] uppercase leading-[13vw] sm:text-[13vw] sm:leading-[10.5vw] md:text-[9.5vw] md:leading-[8vw]">creative</div>
      </div>
    </>
  );
};

export default HomeTopText;
