import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Detail(props) {

const {id} = useParams();
// console.log(params);

const [character, setCharacter] = useState({});

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

useEffect(() => {
  axios(`${URL}/${id}?key=${API_KEY}`).then(
    ({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    }
 );
 return setCharacter({});
}, [id]);


  return (
    <div>

      <h1>Detail</h1>
      <h2>{character?.name}</h2>
      <h3>{character?.status}</h3>
      <h3>{character?.species}</h3>
      <h3>{character?.gender}</h3>
      <h3>{character.origin?.name}</h3>
      <img src={character?.image} alt={character?.name} />
    
    </div>
  )
}

export default Detail