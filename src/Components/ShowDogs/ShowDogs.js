import React from "react";
import Animal from "../Animal/Animal";

export default function ShowDogs({ dogProp }) {
  return (
    <div>
      <h1>ShowDogs</h1>
      {dogProp.map((animal) => (
        <Animal nombre={animal.name} edad={animal.age} raza={animal.breed} />
      ))}
    </div>
  );
}
