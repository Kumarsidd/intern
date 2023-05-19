import React, { useState } from "react";
import { FaSearch, FaBars, FaShoppingBag } from "react-icons/fa";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`topNav ${isMobileMenuOpen ? "mobile-hide" : ""}`}>
        <div className="logo"></div>
        <div className="search">
          <input
            type="search"
            className="search-input"
            placeholder="Search entire store here..."
          />
          <FaSearch className="searchBar" />
        </div>
      </div>
      <div className={`navContent ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <ul className={`listNav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <li className="active2">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/nomatch">Featured</NavLink>
          </li>
          <li>
            <NavLink to="/nomatch">Layouts</NavLink>
          </li>
          <li>
            <NavLink to="/nomatch">Page</NavLink>
          </li>
        </ul>
        <div className="rightNav">
          <ul className="content">
            <li className="mobile-toggle" onClick={handleMobileMenuToggle}>
              <FaBars />
              <FaSearch
                className={`searchBar desk ${
                  isMobileMenuOpen ? "mobile-hide" : ""
                }`}
              />
              <FaShoppingBag
                className={` desk ${isMobileMenuOpen ? "mobile-hide" : ""}`}
              />
            </li>
            <li>
              <FaShoppingBag />
              <span className="cart-count">2</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
