import styles from "./Card.module.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";

export default function Card(props) {

const dispatch = useDispatch();
const [isFav, setIsFav] = useState(false);
const handleFavorite = () => {
  if(isFav){
    setIsFav(false);
    dispatch(removeFav(props.id));
  }else{
    setIsFav(true);
    dispatch(addFav(props));
  }
}

const myFavorites = useSelector(state => state.myFavorites);
useEffect(() => {
  myFavorites.forEach((fav) => {
     if (fav.id === props.id) {
        setIsFav(true);
     }
  });
}, [myFavorites]);


  return (
    <div className={styles.container}>

    <div>
        {
          isFav ? (
              <button onClick={handleFavorite}>❤️</button>
          ) : (
              <button onClick={handleFavorite}>🤍</button>
          )
        }

        <button onClick={() => props.onClose(props.id)}>❌</button>
    </div>


      <Link to={`/detail/${props.id}`} >
        <img src={props.image} alt={props.name} />
      </Link>
      <h2>{props.name}</h2>
      <h3>Id: {props.id}</h3>
      {/* <h3>Status: {props.status}</h3>
      <h3>Specie: {props.species}</h3> */}
      <h3>Gender: {props.gender}</h3>
      {/* <h3>Origin: {props.origin.name}</h3> */}
    </div>
  );
}
