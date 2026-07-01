import React from 'react'
import { Route ,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Agence from './pages/Agence';
import Navbar from './components/shared/Navbar';
// import Stairs from './components/shared/Stairs';

const App = () => {
  return (
    <div>
      {/* <Stairs /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
    </div>
  )
}

export default App
