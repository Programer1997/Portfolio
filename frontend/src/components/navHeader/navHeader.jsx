import React from "react";
import { Link } from "react-router-dom";
import "./navHeader.scss";

export default function navHeader() {
  return (
    <>
      <header>
        <div className="headerContainer">
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <h2>AV.</h2>
          </Link>
          <nav>
            <ul>
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
        </div>
      </header>
    </>
  );
}
