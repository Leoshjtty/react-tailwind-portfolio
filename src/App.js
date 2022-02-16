import React from "react";
import logo from './logo.svg';
import pp from './assets/Profile Pic.jpg';
import Navbar from './components/Navbar/Navbar.js';
import './App.css';

function App() {
  
  return (
    <div className="App">
      {/* <Navbar /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={pp} className="Profile-pic" alt="pp" />
        <p className="text-3xl font-bold underline">
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
    </div>
  );
}

export default App;
