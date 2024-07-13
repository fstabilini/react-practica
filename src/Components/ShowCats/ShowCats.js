import React from "react";
import Animal from "../Animal/Animal";

export default function ShowCats({ catProp, title }) {
  return (
    <div>
      <h1>{title}</h1>
      {catProp.map((animal) => (
        <Animal nombre={animal.nombre} edad={animal.edad} raza={animal.raza} />
      ))}
    </div>
  );
}
