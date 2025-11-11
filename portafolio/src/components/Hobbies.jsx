import React from "react";
import Card from "./Card";

function Hobbies() {
  const titleInfo = "Hobbies";
  const hobbies = ["Leer", "Hacer deportes", "Desarrollar"];
  return (
    <Card
      title={titleInfo}
      textInfo={hobbies.map((hobby, index) => (
        <ul>
          <li key={index}>{hobby}</li>
        </ul>
      ))}
    />
  );
}

export default Hobbies;
