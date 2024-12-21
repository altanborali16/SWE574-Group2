// Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css"; // Make sure the path is correct
import { useAuthContext } from "../Context/useAuthContext";
import AdvancedSearch from "../Components/Inputs/AdvancedSearch";
import Logo from "../assets/Community_Logo.png"

const NavbarCommunity = ({ isSearchForm }) => {
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
      <NavLink to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "50px", height: "auto" }} // Adjust size as needed
          />
        </NavLink>
      </div>
      <div
        className={`navbar__toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar__menu ${isOpen ? "active" : ""}`}>
        <li>
          <AdvancedSearch onClick={isSearchForm} />
        </li>
        <li className="navbar__item">
          <NavLink
            to="/home"
            className="navbar__link"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/feed"
            className="navbar__link"
            onClick={() => setIsOpen(false)}
          >
            Explore
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/mycommunities"
            className="navbar__link"
            onClick={() => setIsOpen(false)}
          >
            My Communities
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/communities"
            className="navbar__link"
            onClick={() => setIsOpen(false)}
          >
            Communities
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/profile"
            className="navbar__link"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </NavLink>
        </li>
        <li className="navbar__item">
          <button
            className="navbar__link"
            style={{ background: "red" }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarCommunity;
