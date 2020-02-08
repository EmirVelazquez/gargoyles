import React from "react";
import "./style.css";

// Stateless Functional Component
const GargoyleCard = props => {
  return (
    <div className="flip-card" onClick={() => props.onImgClick(props.id)}>
      <div className="flip-card-inner" type="button">
        <div className="flip-card-front">
          <img
            alt={props.name + " Image"}
            src={props.image}
            className="cardImg"
          />
        </div>
        <div className="flip-card-back">
          <h5 className="characterName">{props.name}</h5>
          <figcaption className="figure-caption">{props.role}</figcaption>
        </div>
      </div>
    </div>
  );
};

export default GargoyleCard;
