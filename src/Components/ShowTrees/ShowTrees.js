import React from "react";

export default function ShowTrees({ treesProp }) {
  return (
    <div>
      <h1>Show Trees</h1>
      {treesProp.map((arbol) => (
        <p>
          El arbol {arbol.nombre} es {arbol.tamaño} y es originario de
          {arbol.paisOrigen}
        </p>
      ))}
    </div>
  );
}
