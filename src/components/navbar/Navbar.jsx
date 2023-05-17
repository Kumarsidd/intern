import React from "react";
import { FaSearch } from "react-icons/fa";
import "./index.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="topNav">
        <div className="logo"></div>
        <div className="search">
          <input
            type="search"
            className="search"
            placeholder="Search entire store here... "
          />
          <FaSearch className="searchBar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
