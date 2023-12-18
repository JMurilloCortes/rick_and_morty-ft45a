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

const URL = "http://localhost:3001/rickandmorty/character";
// const API_KEY = "henrystaff";
const EMAIL = "jealmuco@gmail.com"
const PASSWORD = "Juanes.6"

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
 
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      if(data.access){
        setAccess(data.access);
        navigate("/home");
      }else{
        alert("Credenciales incorrectas!")
      }
    } catch (error) {
      alert(error.message)
    }
}

  function logout(){
    setAccess(false);
  }

  useEffect(() => {
    // !access && navigate('/home');
    !access && navigate('/');
 }, [access]);

  async function onSearch(id) {
    try {
      const characterId = characters.filter((char) => char.id === Number(id));
    if (characterId.length) {
      return alert(`${characterId[0].name} ya existe!`); 
    }
    if (!id) {
      return alert("Debes ingresar un ID");
    }

    const {data} = await axios(`${URL}/${id}`)
    if (data.name) {
      setCharacters([...characters, data]);
      navigate("/home")
    } else {
      alert("¡El id debe ser entre 1 y 826!");
    }

    } catch (error) {
      alert("¡El id debe ser entre 1 y 826!")
    }
  }


  function onClose(id) {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
    dispatch(removeFav(id));
  }

// ----------------------CODIGO EXTRA RANDON--------------------------------------- 

  async function onRandom(id) {
    try {
      const characterRandom = characters.filter((char) => char.id === id);
    if (characterRandom.length) {
      return alert(`${characterRandom[0].name} ya existe!`); 
    }
    if (!id) {
      return alert("Debes ingresar un ID");
    }

    const {data} = await axios(`${URL}/${id}`)
    if (data.name) {
      setCharacters([...characters, data]);
      navigate("/home")
    } else {
      alert("¡El id debe ser entre 1 y 826!");
    }

    } catch (error) {
      alert(error.message)
    }
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