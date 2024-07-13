import React from "react";

export default function ShowAnimals({ animalsProp }) {
  return (
    <div>
      <h1>ShowAnimals</h1>
      {animalsProp.map((animal) => (
        <p>
          El {animal.nombre} vive en {animal.continente} y es un animal{" "}
          {animal.dieta}
        </p>
      ))}
    </div>
  );
}
