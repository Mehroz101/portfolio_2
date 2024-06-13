import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showNav,setShowNav] = useState(false)
  const toggleNav = () => {
    setShowNav(!showNav)
    console.log(showNav)
  }
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo">
            <h1>MOJI</h1>
            <i class="bar fa-solid fa-bars-staggered" onClick={toggleNav}></i>
          </div>
          <div className={showNav? "show": "" }>
          <ul>
            <li onClick={toggleNav}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={toggleNav}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={toggleNav}>
              <Link to="/projects">Work</Link>
            </li>
            <li onClick={toggleNav}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button className="btn" onClick={toggleNav}>Let's talks</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
