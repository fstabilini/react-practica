import React from "react";
import Animal from "../Animal/Animal";

export default function ShowHorses({ horseProp, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {horseProp.map((horse) => (
          <Animal nombre={horse.nombre} edad={horse.edad} raza={horse.raza} />
        ))}
      </div>
    </div>
  );
}
