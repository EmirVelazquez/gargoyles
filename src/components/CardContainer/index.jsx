import React from "react";
import "./style.css";

// Stateless functional component
function CardContainer(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default CardContainer;
