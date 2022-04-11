import React, { useState } from "react";
import "./styles/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [showMenuBar, setShowMenuBar] = useState(false);
  return (
    <div className="navbar">
      <h1>Edie</h1>
      <nav className={showMenuBar ? "nav mobile-nav" : "nav"}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#our_works">Our Works</a>
          </li>

          <li>
            <a href="#clients">Clients</a>
          </li>

          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
      <div
        className="menubar-icon"
        onClick={() => {
          setShowMenuBar(!showMenuBar);
        }}
      >
        <MenuIcon className="menu-icon" />
      </div>
    </div>
  );
}

export default Navbar;
