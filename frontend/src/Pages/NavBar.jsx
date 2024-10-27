// Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css"; // Make sure the path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">Logo</NavLink>
      </div>
      <div className={`navbar__toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar__menu ${isOpen ? "active" : ""}`}>
        <li className="navbar__item">
          <NavLink to="/home" className="navbar__link" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/news" className="navbar__link" onClick={() => setIsOpen(false)}>
            My Communities
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/about-us" className="navbar__link" onClick={() => setIsOpen(false)}>
            Communities
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/get-started" className="navbar__link" onClick={() => setIsOpen(false)}>
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
