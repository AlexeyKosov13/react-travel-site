import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL 
            <img src="images/logo.svg" alt="logo" className="logo-image svg"/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            { click ? <img src="images/close.svg" alt="close" className="close-image svg"/>:<img src="images/burger.svg" alt="burger" className="burger-image svg"/>}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/' className="nav-links" onClick={closeMobileMenu}>Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
