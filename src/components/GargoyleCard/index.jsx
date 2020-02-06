import React from "react";
import "./style.css";

function GargoyleCard(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img alt={props.name} src={props.image} className="cardImg" />
        </div>
        <div className="flip-card-back">
          {/* <div className="card-img-overlay"> */}
          <h5 className="characterName">{props.name}</h5>
          {/* </div> */}
          <figcaption className="figure-caption">{props.role}</figcaption>
        </div>
      </div>
    </div>
  );
}

export default GargoyleCard;
