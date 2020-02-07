import React, { Component } from "react";
import "./style.css";

function CardContainer(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default CardContainer;
