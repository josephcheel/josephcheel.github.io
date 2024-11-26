import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home/Home.tsx'
import Nav from './Components/Nav.tsx'
import NotFound from './Components/NotFound.tsx'
import './App.css'
// import { grained } from './grained.js'
// const grained = require('./grained.js');


function App() {
  
  return (
      <div id="wrapper">
    <Router>
        <Routes>
          <Route path="/" element={<><Nav /><Home /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
