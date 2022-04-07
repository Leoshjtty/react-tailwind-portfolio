import { React, useState } from 'react';

function Navbar() {
  var [menuOpen, toggleMenu] = useState(false)
  const toggler = () => {
    menuOpen ? toggleMenu(false) : toggleMenu(true)
    console.log("toggleMenu", menuOpen)
  }
  return (
    <nav className="bg-teal-500 p-6 fixed w-screen z-10">
      <div className="wrapper flex items-center justify-between flex-wrap max-w-6xl m-auto">
        <div className="flex items-end flex-shrink-0 text-white mr-6">
          <img className="h-8 w-8 mr-2" src={process.env.PUBLIC_URL+"img/candle-logo.png"} width="54" height="54" alt="logo" style={{filter: "brightness(0) invert(100%)"}}/>
          <span className="font-semibold text-xl tracking-tight">Ösel</span>
        </div>
        <div className="block lg:hidden" >
          {menuOpen ?  <button onClick={toggler} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><title>Close</title><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" /></svg>
          </button> : <button onClick={toggler} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>}
        </div>
        {menuOpen && <div className="lg:hidden w-full block lg:flex lg:items-center lg:w-auto z-10"> {/*transition-transform*/}
          <div className="text-sm lg:flex-grow">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
            <a href="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Projects
            </a>
            <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </a>
            <a href="/resume" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 lg:mr-0">
              Resume
            </a>
          </div>
        </div>}
        <div className="hidden lg:block w-full block lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
            <a href="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Projects
            </a>
            <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About
            </a>
            <a href="/resume" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 lg:mr-0">
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;