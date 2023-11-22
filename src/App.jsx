import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/nav/Nav.jsx";
import Cards from "./components/cards/Cards.jsx";
import About from "./components/about/About.jsx";
import Detail from "./components/deatil/Detail.jsx";
import Favorites from "./components/favorites/Favorites.jsx";
import Error from "./components/error/Error.jsx";
import Form from "./components/form/Form.jsx";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions.js";


const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";
const EMAIL = "jealmuco@gmail.com"
const PASSWORD = "Juanes.6"



function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [access, setAccess] = useState(false);

  const location = useLocation();
 

  function login(userData){
    if(userData.password === PASSWORD && userData.email === EMAIL){
      setAccess(true);
      navigate("/home")
    }else{
      alert("Credenciales incorrectas")
    }
  }

  function logout(){
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate('/home');
    // !access && navigate('/');
 }, [access]);

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
    dispatch(removeFav(id));
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
        {location.pathname !== "/" ? <Nav onSearch={onSearch} onRandom={onRandom} logout={logout} /> : null}
        
      <Routes>
        
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />

      </Routes>
    </div>
  );
}

export default App;
