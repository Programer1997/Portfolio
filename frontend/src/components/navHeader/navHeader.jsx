import React from "react";
import "./navHeader.scss";

export default function navHeader() {
  return (
    <>
      <header>
        <div className="headerContainer">
          <h2>AV.</h2>
          <nav>
            <ul>
              <li>Work</li>
              <li>Gallery</li>
              <li>About</li>
              <li className="resume">Resume</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
