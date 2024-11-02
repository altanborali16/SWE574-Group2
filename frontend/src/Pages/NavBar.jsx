// Navbar.jsx
import React, { useState } from "react";
import { NavLink  } from "react-router-dom";
import "../Styles/Navbar.css"; // Make sure the path is correct
import { useAuthContext } from "../Context/useAuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate(); // Hook to programmatically navigate
  const { removeSession } = useAuthContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    // Add your logout logic here, e.g., clearing tokens, making an API call, etc.
    console.log("Logging out...");
    // After logout logic, redirect to the login or home page
    removeSession(); // Change the path as per your routing setup
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
          <NavLink to="/mycommunities" className="navbar__link" onClick={() => setIsOpen(false)}>
            My Communities
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/communities" className="navbar__link" onClick={() => setIsOpen(false)}>
            Communities
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to="/profile" className="navbar__link" onClick={() => setIsOpen(false)}>
            Profile
          </NavLink>
        </li>
        <li className="navbar__item">
          <button className="navbar__link" style={{background : "red"}} onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;