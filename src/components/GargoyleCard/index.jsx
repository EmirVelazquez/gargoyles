import React from "react";
import "./style.css";

// Stateless Functional Component
const GargoyleCard = props => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            type="image"
            alt={props.name}
            src={props.image}
            className="cardImg"
            // onClick={() => this.props.onScore}
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
