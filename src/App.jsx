import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import Navbar from "./components/shared/Navbar";
import FullScreenNav from "./components/shared/FullScreenNav";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [closeNavSignal, setCloseNavSignal] = useState(0);

  const handleToggleNav = () => {
    if (isNavOpen) {
      setCloseNavSignal((current) => current + 1);
      return;
    }

    setCloseNavSignal(0);
    setIsNavOpen(true);
  };

  return (
    <div>
      <Navbar isNavOpen={isNavOpen} onToggleNav={handleToggleNav} />
      {isNavOpen && (
        <FullScreenNav
          closeSignal={closeNavSignal}
          onClose={() => setIsNavOpen(false)}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
    </div>
  );
};

export default App;
