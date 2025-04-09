import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from 'react'
import Home from './Components/Home/Home.tsx'
import Nav from './Components/Nav.tsx'
import NotFound from './Components/NotFound.tsx'
import Work from "./Components/Works/Work.tsx"
import Projects from "./Components/Projects/Projects.tsx"
// import Contact from "./Components/Contact/Contact.tsx"


import './App.css'
// import { grained } from './grained.js'
// const grained = require('./grained.js');


const App = () => {
  const location = useLocation();

  useEffect(() => {
    // List of pages where overflow should be hidden
    const pagesWithHiddenOverflow = ["/", "/Works"];

    if (pagesWithHiddenOverflow.includes(location.pathname)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [location.pathname]);

  return (
    
      <div id="wrapper">
    <>
        <Routes>
          <Route path="/" element={<><Nav /><Home /></>} />
          <Route path="/work" element={<><Nav /><Work /></>} />
          <Route path="/projects" element={<><Nav /><Projects /></>} />
          {/* <Route path="/contact" element={<><Nav /><Contact /></>} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  )
}

export default App;
