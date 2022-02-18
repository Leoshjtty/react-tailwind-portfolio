import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
import pp from './assets/Profile Pic.jpg';
import './App.css';

import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';

import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js';
import About from './components/About/About.js';
import Resume from './components/Resume/Resume.js';


function App() {

  return (
    <div className="App">
      <Navbar />

      <Router>

        <div className="Routing" > {/*id={load ? "no-scroll" : "scroll"}*/}

          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/resume" element={<Resume/>} />
          </Routes>

        </div>
      </Router>

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={pp} className="Profile-pic" alt="pp" />
        <p>
          Work In Progress
        </p>
        <a
          className="App-link"
          href="https://linkedin.com/in/osel-lim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
      <Footer/>
    </div>
    
  );
}

export default App;
