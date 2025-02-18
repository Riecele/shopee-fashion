import React, { useState, useContext } from "react";

import {  FaUser, FaSun, FaMoon, FaBars, FaShoppingCart } from "react-icons/fa";
import { StoreContext } from "./storeManager";

function Header({ onToggleTheme, darkTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartQuantity } = useContext(StoreContext);
  const totalQuantity = getTotalCartQuantity();

  const headerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    backgroundColor: darkTheme ? "#333" : "#fff",
    color: darkTheme ? "#fff" : "#333",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    flexWrap: "wrap",
  };

  const headerBrandStyles = {
    display: "flex",
    alignItems: "center",
  };

  const menuIconStyles = {
    display: "none",
    marginLeft: "1rem",
    cursor: "pointer",
  };

  const headerNavStyles = {
    display: "flex",
    flexWrap: "wrap",
  };

  const headerNavLinkStyles = {
    margin: "0 1rem",
    textDecoration: "none",
    color: darkTheme ? "#fff" : "#333",
    transition: "color 0.3s",
  };

  

  const headerActionsStyles = {
    display: "flex",
    alignItems: "center",
  };

  const themeToggleStyles = {
    marginRight: "1rem",
    padding: "0.5rem 1rem",
    background: "transparent",
    border: "none",
    color: darkTheme ? "#fff" : "#333",
    cursor: "pointer",
    fontSize: "1.25rem",
    transition: "transform 0.3s",
  };

  const themeToggleHoverStyles = {
    transform: "rotate(20deg)",
  };

  const iconStyles = {
    marginLeft: "1rem",
    fontSize: "1.25rem",
    cursor: "pointer",
  };

  const cartIconStyles = {
    position: "relative",
    display: "inline-block",
  };

  const cartCountStyles = {
    position: "absolute",
    top: "-5px",
    right: "-10px",
    backgroundColor: "red",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
    padding: "3px 6px",
    borderRadius: "50%",
  };

  const menuOpenStyles = menuOpen ? { display: "flex" } : { display: "none" };

  return (
    <header style={headerStyles}>
      <div style={headerBrandStyles}>
        <h1>My E-Commerce</h1>
        <FaBars
          style={menuIconStyles}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <nav style={{ ...headerNavStyles, ...menuOpenStyles }}>
        <a href="/about" style={headerNavLinkStyles}>
          About
        </a>
        <a href="/contact" style={headerNavLinkStyles}>
          Contact Us
        </a>
      </nav>
      <div style={headerActionsStyles}>
        <button
          onClick={onToggleTheme}
          style={{ ...themeToggleStyles, ...(darkTheme ? themeToggleHoverStyles : {}) }}
        >
          {darkTheme ? <FaSun /> : <FaMoon />}
        </button>
        <div style={cartIconStyles}>
          <FaShoppingCart style={iconStyles} />
          <span style={cartCountStyles}>{totalQuantity}</span>
        </div>
        <FaUser style={iconStyles} />
      </div>
    </header>
  );
}

export default Header;
