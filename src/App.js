import "./App.css";
import React, { useState } from "react";
import ShowCats from "./Components/ShowCats/ShowCats";
import ShowDogs from "./Components/ShowDogs/ShowDogs";
import ShowBirds from "./Components/ShowBirds/ShowBirds";
import ShowAnimals from "./Components/ShowAnimals/ShowAnimals";
import ShowTrees from "./Components/ShowTrees/ShowTrees";
import Animal from "./Components/Animal/Animal";
import ShowHorses from "./Components/ShowHorses/ShowHorses";

function App() {
  const gatos = [
    { nombre: "Whiskers", edad: 3, raza: "Siamese" },
    { nombre: "Mittens", edad: 5, raza: "Persian" },
    { nombre: "Shadow", edad: 1, raza: "British Shorthair" },
    { nombre: "Paws", edad: 4, raza: "Bengal" },
  ];

  const perros = [
    { nombre: "Buddy", edad: 3, raza: "Golden" },
    { nombre: "Max", edad: 5, raza: "German Shepherd" },
    { nombre: "Bella", edad: 2, raza: "French Bulldog" },
    { nombre: "Lucy", edad: 4, raza: "Beagle" },
    { nombre: "Charlie", edad: 1, raza: "Poodle" },
  ];

  const pajaros = [
    { nombre: "Verde", edad: 2, raza: "Loro" },
    { nombre: "Pichoncito", edad: 3, raza: "Gorrión" },
  ];

  const animales = [
    {
      nombre: "León",
      continente: "África",
      dieta: "Carnívoro",
    },
    {
      nombre: "Elefante",
      continente: "África",
      dieta: "Herbívoro",
    },
    {
      nombre: "Canguro",
      continente: "Oceanía",
      dieta: "Herbívoro",
    },
    {
      nombre: "Oso Polar",
      continente: "Antártida",
      dieta: "Carnívoro",
    },
  ];

  const arboles = [
    {
      nombre: "Secuoya",
      tamaño: "Muy grande",
      paisOrigen: "Estados Unidos",
    },
    {
      nombre: "Baobab",
      tamaño: "Grande",
      paisOrigen: "Madagascar",
    },
    {
      nombre: "Cerezo",
      tamaño: "Mediano",
      paisOrigen: "Japón",
    },
    {
      nombre: "Olivo",
      tamaño: "Pequeño",
      paisOrigen: "España",
    },
  ];

  const caballos = [
    {
      nombre: "Spirit",
      raza: "Mustang",
      edad: 5,
    },
    {
      nombre: "Bucephalus",
      raza: "Tesalio",
      edad: 10,
    },
    {
      nombre: "Pegasus",
      raza: "Mítico",
      edad: 8,
    },
    {
      nombre: "Shadowfax",
      raza: "Andaluz",
      edad: 7,
    },
  ];

  const [cats, setCats] = useState(gatos);
  const [birds, setBirds] = useState(pajaros);
  const [horses, setHorses] = useState(caballos);
  // const [dogs, setDogs] = useState(perros);
  // const [animals, setAnimals] = useState(animales);
  // const [trees, setTrees] = useState(arboles);
  const [catTitle, setCatTitle] = useState("Show Cats");
  const [horseTitle, setHorseTitle] = useState("Show Horses");
  const [birdTitle, setBirdTitle] = useState("Show Birds");

  function changeState(e) {
    setCats(pajaros);
    setCatTitle(e.target.innerText);
  }

  function changeState2() {
    setHorses(perros);
    setHorseTitle("Perros");
  }

  function changeState3() {
    setBirds(horses);
    setBirdTitle("Caballos");
  }

  return (
    <div className="App">
      <ShowCats catProp={cats} title={catTitle} />
      <button onClick={changeState}>Show Birds</button>
      <button onClick={changeState}>Show Dogs</button>

      {/* <ShowHorses horseProp={horses} title={horseTitle} />
      <ShowBirds birdProp={birds} title={birdTitle} /> */}
      {/* <ShowDogs dogProp={dogs} /> */}
      {/* <ShowAnimals animalsProp={animals} /> */}
      {/* /* <Animal nombre="Dobby" edad="3" raza="Tabby" /> */}
      {/* <ShowTrees treesProp={trees} title={treeTitle} /> */}

      {/* <button onClick={changeState2}>Caballos a Perros</button>
      <button onClick={changeState3}>Pájaros a Caballos</button> */}
    </div>
  );
}

export default App;
