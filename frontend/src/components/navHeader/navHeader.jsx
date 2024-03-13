import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navHeader.scss";

export default function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    if (menuOpen === false) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };
  return (
    <>
      <header>
        <div className="headerContainer">
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <h2>AV.</h2>
          </Link>
          <nav className={menuOpen ? "navMenuOpen" : ""}>
            <ul onClick={handleMenu}>
              <Link to="/Work" style={{ textDecoration: "none" }}>
                <li>Work</li>
              </Link>
              <Link to="/gallery" style={{ textDecoration: "none" }}>
                <li>Gallery</li>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <li>About</li>
              </Link>
              <Link to="/resume" style={{ textDecoration: "none" }}>
                <li className="resume">Resume</li>
              </Link>
            </ul>
          </nav>
          <div className="toggleMenu" onClick={handleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </header>
    </>
  );
}
