import React, { useState } from "react";
import { FaSearch, FaBars, FaShoppingBag } from "react-icons/fa";
import "./navbar.css";

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
          <li className="active">
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/Product">Shop</a>
          </li>
          <li>
            <a href="/#">Featured</a>
          </li>
          <li>
            <a href="/#">Layouts</a>
          </li>
          <li>
            <a href="/#">Page</a>
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
