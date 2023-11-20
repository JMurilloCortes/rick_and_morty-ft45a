import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav.jsx";
import Cards from "./components/cards/Cards.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About.jsx";
import Detail from "./components/deatil/Detail.jsx";
import Error from "./components/error/Error.jsx";

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    const characterId = characters.filter((char) => char.id === Number(id));
    if (characterId.length) {
      return alert(`${characterId[0].name} ya existe!`); 
    }
    if (!id) {
      return alert("Debes ingresar un ID");
    }
    axios(`${URL}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }
  function onClose(id) {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  }

// ----------------------CODIGO EXTRA RANDON--------------------------------------- 

  function onRandom(random) {
    const characterRandom = characters.filter((char) => char.random === random);
    if (characterRandom.length) {
      return alert(`${characterRandom[0].name} ya existe!`);
    }
    axios(`${URL}/${random}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

// ----------------------FIN DEL CODIGO EXTRA RANDOM--------------------------------------- 

  return (
    <div className="App">
        <Nav onSearch={onSearch} onRandom={onRandom} />
      <Routes>
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
