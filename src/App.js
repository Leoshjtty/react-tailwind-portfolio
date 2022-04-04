import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import './App.css';

import Navbar from './pages/Navbar/Navbar.js';
import Footer from './pages/Footer/Footer.js';

import Home from './pages/Home/Home.js';
import Projects from './pages/Projects/Projects.js';
import About from './pages/About/About.js';
import Resume from './pages/Resume/Resume.js';


function App() {

  return (
    <div className="App flex flex-col h-screen">
      <Navbar />
      <div className="App-header">
        <Router>
          <div className="Routing" > {/*id={load ? "no-scroll" : "scroll"}*/}
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        </Router>
      </div>
      <Footer />
    </div>

  );
}

export default App;
