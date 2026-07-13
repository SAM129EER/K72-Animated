import { createContext, useContext } from "react";

export const PageTransitionContext = createContext({
  transitionTo: () => {},
});

export const usePageTransition = () => useContext(PageTransitionContext);
