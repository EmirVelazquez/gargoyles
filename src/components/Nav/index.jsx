import React from "react";
import "./style.css";
import gargoyleLogo from "./gargoylesSmall.png";

// Stateless Functional Component
const Nav = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navBar">
      {/* Left */}
      <a className="navbar-brand" href="/">
        <img
          src={gargoyleLogo}
          className="gargoyleLogo"
          alt="Gargoyles Show Logo"
        ></img>
      </a>
      {/* Centered */}
      <div className="nav navbar-nav navCentered">
        <p className="clickStart">Begin by clicking an image!</p>
      </div>
      {/* Right */}
      <div className="nav navbar-nav ml-auto">
        <p className="currentScore">Current Score: {props.currentScore}</p>
        <p className="topScore">Top Score: {props.highestScore}</p>
      </div>
    </nav>
  );
};

export default Nav;
