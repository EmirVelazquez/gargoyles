import React from "react";
import "./style.css";
import Github from "./GitHub32px.png";
import LinkedIn from "./LinkedIn32px.png";

function Footer() {
  return (
    <footer id="footer">
      <div id="footText">
        <p>
          &copy; 2020 Emir Velazquez{" "}
          <a
            href="https://github.com/EmirVelazquez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="gitHubSmall" alt="GitHub Logo" src={Github} />
          </a>
          <a
            id="linkedInLogo"
            href="https://www.linkedin.com/in/emir-velazquez-35560b196/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="linkedInLogoPic"
              alt="Linked In Logo"
              src={LinkedIn}
            />
          </a>
        </p>
        <p>In Memory of Ivan</p>
      </div>
    </footer>
  );
}

export default Footer;
