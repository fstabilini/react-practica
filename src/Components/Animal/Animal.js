import React from "react";

export default function Animal({ nombre, edad, raza }) {
  return (
    <p>
      {nombre} tiene {edad} años y es de raza {raza}.
    </p>
  );
}
