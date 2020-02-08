import React from "react";
import "./style.css";
import Github from "./GitHub32px.png";
import LinkedIn from "./LinkedIn32px.png";

function Footer() {
  return (
    <footer id="footer">
      <div id="footText">
        <p id="bigBro">In Memory of Ivan</p>
        <p>&copy; 2020 Emir Velazquez</p>
        <div id="logoContainer">
          <a
            id="gitHubSmall"
            href="https://github.com/EmirVelazquez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="GitHub Logo" src={Github} />
          </a>
          <a
            id="linkedInLogo"
            href="https://www.linkedin.com/in/emir-velazquez-35560b196/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="Linked In Logo" src={LinkedIn} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
