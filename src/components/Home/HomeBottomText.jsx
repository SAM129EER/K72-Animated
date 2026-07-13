import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 pb-0 font-[lausanne-lg] sm:gap-3 md:pb-1">
      <Link
        to="/projects"
        className="rounded-full border-2 px-5 pt-2 text-[12vw] uppercase leading-[11vw] hover:border-[var(--primary-hover)] hover:text-[var(--primary-hover)] sm:px-7 sm:text-[9vw] sm:leading-[8vw] md:border-3 md:px-8 md:text-[6vw] md:leading-[6vw]"
      >
        Projects
      </Link>
      <Link
        to="/agence"
        className="rounded-full border-2 px-5 pt-2 text-[12vw] uppercase leading-[11vw] hover:border-[var(--primary-hover)] hover:text-[var(--primary-hover)] sm:px-7 sm:text-[9vw] sm:leading-[8vw] md:border-3 md:px-8 md:text-[6vw] md:leading-[6vw]"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
