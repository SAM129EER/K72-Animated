import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PageTransitionContext } from "./PageTransitionContext";

const Stairs = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const parentStairRef = useRef(null);
  const isTransitioningRef = useRef(false);

  const { contextSafe } = useGSAP(
    () => {
      const q = gsap.utils.selector(parentStairRef);

      gsap.set(parentStairRef.current, { display: "none" });
      gsap.set(q(".stair"), { height: 0, y: 0 });
    },
    { scope: parentStairRef },
  );

  const transitionTo = contextSafe((to) => {
    const currentPath = `${location.pathname}${location.search}`;

    if (!to || to === currentPath || isTransitioningRef.current) {
      return;
    }

    isTransitioningRef.current = true;
    const q = gsap.utils.selector(parentStairRef);
    const tl = gsap.timeline();

    tl.set(parentStairRef.current, { display: "block" })
      .set(q(".stair"), { height: 0, y: 0 })
      .to(q(".stair"), {
        height: "100%",
        duration: 0.4,
        stagger: {
          amount: -0.2,
        },
        ease: "power3.inOut",
      })
      .add(() => {
        navigate(to);
      })
      .to(q(".stair"), {
        y: "100%",
        duration: 0.45,
        stagger: {
          amount: -0.2,
        },
        ease: "power3.inOut",
      })
      .set(parentStairRef.current, { display: "none" })
      .set(q(".stair"), { height: 0, y: 0 })
      .add(() => {
        isTransitioningRef.current = false;
      });
  });

  const handleClickCapture = (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }

    const anchor = event.target.closest("a[href]");

    if (!anchor || anchor.target || anchor.hasAttribute("download")) {
      return;
    }

    if (anchor.closest('[data-transition-manual="true"]')) {
      return;
    }

    const url = new URL(anchor.href);

    if (url.origin !== window.location.origin) {
      return;
    }

    const nextPath = `${url.pathname}${url.search}`;
    const currentPath = `${location.pathname}${location.search}`;

    if (nextPath === currentPath) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    transitionTo(nextPath);
  };

  return (
    <PageTransitionContext.Provider value={{ transitionTo }}>
      <div ref={parentStairRef}>
        <div className="fixed top-0 z-[130] flex h-screen w-full">
          <div className="stair bg-black h-full w-1/5 "></div>
          <div className="stair bg-black h-full w-1/5 "></div>
          <div className="stair bg-black h-full w-1/5 "></div>
          <div className="stair bg-black h-full w-1/5 "></div>
          <div className="stair bg-black h-full w-1/5 "></div>
        </div>
      </div>
      <div onClickCapture={handleClickCapture}>{children}</div>
    </PageTransitionContext.Provider>
  );
};

export default Stairs;
