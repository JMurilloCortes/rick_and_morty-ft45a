import styles from "./favorites.module.css"
import React from "react";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";

export default function Favorites({ onClose }) {

const myFavorites = useSelector(state => state.myFavorites);

const dispatch = useDispatch();

const handleOrder = (event) => {
dispatch(orderCards(event.target.value))
}

const handleFilter = (event) => {
dispatch(filterCards(event.target.value))
}

  return (
    <div>
      <div className={styles.container}>

        <select name="filter" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        
        <select name="order" onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        
      
      </div>
      <div className={styles.container2}>
        {
        !myFavorites.length ? <h2> No hay favoritos...</h2> :
        myFavorites.map((myFavorite, index) => (
          <Card
            key={index}
            id={myFavorite.id}
            name={myFavorite.name}
            status={myFavorite.status}
            species={myFavorite.species}
            gender={myFavorite.gender}
            origin={myFavorite.origin}
            image={myFavorite.image}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
}
