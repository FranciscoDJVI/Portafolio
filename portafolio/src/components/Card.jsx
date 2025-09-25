import React from "react";

function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.textInfo}</p>
    </div>
  );
}

export default Card;
