import Logo from "./Navigation/Logo";

const Navbar = ({ isNavOpen, onToggleNav }) => {
  return (
    <header className="fixed top-0 left-0 z-[120] flex w-full items-center justify-between">
      <div className="p-3 sm:p-4">
        <Logo />
      </div>

      <button
        type="button"
        onClick={onToggleNav}
        aria-label={isNavOpen ? "Close navigation" : "Open navigation"}
        className="group absolute top-0 right-0 h-14 w-28 overflow-hidden bg-black sm:h-16 sm:w-54"
      >
        {isNavOpen ? (
          <div className="absolute inset-0 flex items-center justify-end pr-3 sm:pr-4">
            <div className="relative h-10 w-14 sm:h-12 sm:w-20">
              <span className="absolute right-0 top-1/2 h-[3px] w-14 -translate-y-1/2 rotate-45 bg-white sm:w-20"></span>
              <span className="absolute right-0 top-1/2 h-[3px] w-14 -translate-y-1/2 -rotate-45 bg-white sm:w-20"></span>
            </div>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 flex items-center justify-end pr-3 transition-opacity duration-300 group-hover:opacity-0 sm:pr-4">
              <div className="flex flex-col gap-1">
                <span className="h-1 w-14 rounded-full bg-white sm:w-20"></span>
                <span className="h-1 w-8 rounded-full bg-white sm:w-10"></span>
              </div>
            </div>

            <div
              className="absolute inset-0 origin-top scale-y-0 transition-transform duration-300 ease-in-out group-hover:scale-y-100"
              style={{ backgroundColor: "var(--primary-hover)" }}
            >
              <div className="flex h-full items-center justify-end pr-3 sm:pr-4">
                <div className="flex flex-col gap-1">
                  <span className="h-1 w-14 rounded-full bg-black sm:w-20"></span>
                  <span className="h-1 w-8 rounded-full bg-black sm:w-10"></span>
                </div>
              </div>
            </div>
          </>
        )}
      </button>
    </header>
  );
};

export default Navbar;
