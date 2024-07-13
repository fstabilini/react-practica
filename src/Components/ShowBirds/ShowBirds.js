import React from "react";
import Animal from "../Animal/Animal";

export default function ShowBirds({ birdProp, title }) {
  return (
    <div>
      <h1>{title}</h1>
      {birdProp.map((animal) => (
        <Animal nombre={animal.nombre} edad={animal.edad} raza={animal.raza} />
      ))}
    </div>
  );
}
