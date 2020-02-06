import React from "react";
import "./style.css";
import gargoyleLogo from "./gargoylesSmall.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navBar">
      <a className="navbar-brand" href="/">
        <img
          src={gargoyleLogo}
          class="gargoyleLogo"
          alt="Gargoyles Show Logo"
        ></img>
      </a>
      <div className="nav navbar-nav ml-auto">
        <p className="clickStart">Begin by clicking an image!</p>
      </div>
      <div className="nav navbar-nav ml-auto">
        <p className="scoreBoard">Current Score:</p>
        <p className="scoreBoard">Top Score:</p>
      </div>
    </nav>
  );
}

export default Nav;
