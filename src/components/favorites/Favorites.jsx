import React from "react";

import Card from "../card/Card";
import { useSelector } from "react-redux";

export default function Favorites({ onClose }) {

const myFavorites = useSelector(state => state.myFavorites);

  return (
    <div>
      {myFavorites.map((myFavorite, index) => (
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
  );
}
