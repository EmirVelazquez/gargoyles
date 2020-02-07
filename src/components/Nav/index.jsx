import React from "react";
import "./style.css";
import gargoyleLogo from "./gargoylesSmall.png";

// Stateless Functional Component
const Nav = props => {
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
      <ul className="nav navbar-nav ml-auto">
        <li className="scoreBoard">Current Score: {props.totalScore}</li>
        <li className="scoreBoard">Top Score: {props.highScore}</li>
      </ul>
    </nav>
  );
};

export default Nav;
