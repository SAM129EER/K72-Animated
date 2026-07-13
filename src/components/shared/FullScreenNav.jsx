import { useCallback, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NavMenuItem from "./Navigation/NavMenuItem";
import Clock from "./Clock";

const navItems = [
  {
    title: "Projects",
    to: "/projects",
    marqueeText: "See Everything",
    images: ["/NavImages/pic1.png", "/NavImages/pic2.jpg"],
  },
  {
    title: "Agency",
    to: "/agence",
    marqueeText: "Know About Us",
    images: [
      "/NavImages/Michele_640x290.jpg",
      "/NavImages/Michele_640x290.jpg",
    ],
  },
  {
    title: "Contact",
    marqueeText: "Let's Talk",
    images: ["/NavImages/mail.png", "/NavImages/mail.png"],
  },
  {
    title: "Blog",
    marqueeText: "Read Articles",
    images: ["/NavImages/pic3.jpg", "/NavImages/pic4.png"],
  },
];

const FullScreenNav = ({ closeSignal, onClose }) => {
  const navRef = useRef(null);
  const isClosingRef = useRef(false);
  const closePoint = "calc(100% - 48px) 32px";

  useGSAP(
    () => {
      const q = gsap.utils.selector(navRef);
      const tl = gsap.timeline();

      tl.fromTo(
        navRef.current,
        { clipPath: `circle(0% at ${closePoint})` },
        {
          clipPath: `circle(150% at ${closePoint})`,
          duration: 0.75,
          ease: "power4.out",
        },
      ).from(
        q(".nav-content"),
        {
          y: 30,
          opacity: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: "power3.out",
        },
        "-=0.35",
      );
    },
    { scope: navRef },
  );

  const handleClose = useCallback((afterClose) => {
    if (isClosingRef.current) {
      return;
    }

    isClosingRef.current = true;
    const q = gsap.utils.selector(navRef);
    const tl = gsap.timeline({
      onComplete: () => {
        onClose();
        if (afterClose) {
          afterClose();
        }
      },
    });

    tl.to(q(".nav-content"), {
      y: -18,
      opacity: 0,
      duration: 0.22,
      stagger: 0.025,
      ease: "power2.in",
    }).to(
      navRef.current,
      {
        clipPath: `circle(0% at ${closePoint})`,
        duration: 0.55,
        ease: "power4.inOut",
      },
      "-=0.08",
    );
  }, [onClose]);

  useEffect(() => {
    if (closeSignal > 0) {
      handleClose();
    }
  }, [closeSignal, handleClose]);

  return (
    <div
      ref={navRef}
      className="fixed inset-0 z-[100] grid h-screen grid-rows-[72px_1fr_120px] bg-black text-white md:grid-rows-[90px_1fr_90px]"
    >
      <div></div>

      {/* ================= Menu ================= */}
      <main className="nav-content flex flex-col justify-center px-0">
        {navItems.map((item, index) => (
          <NavMenuItem
            key={item.title}
            {...item}
            className={index === 0 ? "border-t" : ""}
            onClick={handleClose}
          />
        ))}
      </main>

      {/* Clock */}
      <div className="nav-content hidden md:block">
        <Clock />
      </div>

      {/* ================= Footer ================= */}
      <footer className="nav-content fixed bottom-2 left-0 right-0 flex flex-col items-center gap-2 px-3 text-center md:grid md:grid-cols-3 md:gap-0">
        {/* Empty column (Clock occupies the left visually) */}
        <div className="hidden md:block"></div>

        {/* Center */}
        <div className="flex justify-center gap-5 text-sm uppercase tracking-wide text-white/70 sm:text-base md:gap-8 md:text-lg">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Cookies</p>
        </div>

        {/* Right */}
        <div className="flex justify-end gap-5 text-sm font-medium uppercase sm:text-base md:gap-6 md:text-lg">
          <p>FB</p>
          <p>IG</p>
          <p>IN</p>
        </div>
      </footer>
    </div>
  );
};

export default FullScreenNav;
