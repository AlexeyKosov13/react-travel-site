import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Button} from '../components/Button';
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
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
              <Link to='/services' className="nav-links" onClick={closeMobileMenu}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to='/products' className="nav-links" onClick={closeMobileMenu}>Products</Link>
            </li>
            <li className="nav-item">
              <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>Sign Up</Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </div>
    </>
  );
}

export default Navbar;
