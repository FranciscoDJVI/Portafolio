import React from "react";
import Card from "./Card";

function Hobbies() {
  const titleInfo = "Hobbies";
  const hobbies = ["Leer", "Hacer ejercicios", "Hacer deportes", "Desarrollar"];
  return (
    <Card
      title={titleInfo}
      textInfo={hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    />
  );
}

export default Hobbies;
