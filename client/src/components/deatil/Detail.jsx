import styles from "./detail.module.css"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Detail(props) {

const {id} = useParams();
// console.log(params);

const [character, setCharacter] = useState({});

const URL = "http://localhost:3001/rickandmorty/character";
// const API_KEY = "henrystaff";

useEffect(() => {
  axios(`${URL}/${id}`).then(
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
    <div className={styles.container}>
        <h1>Detail</h1>
        <img src={character?.image} alt={character?.name} />
        <h2>Name: {character?.name}</h2>
        <h3>Id: {character?.id}</h3>
        <h3>Status: {character?.status}</h3>
        <h3>Specie: {character?.species}</h3>
        <h3>Gender: {character?.gender}</h3>
        <h3>Origin: {character.origin?.name}</h3>
    </div>
  )
}

export default Detail