import React from "react";
import "./style.css";
import Gargoyles from "./Gargoyles.png";

function Banner() {
  return (
    <div className="bannerBackground">
      <div className="gargoylesContainer">
        <img src={Gargoyles} alt="Gargoyles Header" id="gargoylesImg"></img>
      </div>
    </div>
  );
}

export default Banner;
