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

let extract = props.name.split(" ")
let extract2 = (`${extract[0]} ${extract[1]}`);

  return (
    <div className={styles.container}>

      <div className={styles.separBtn}>
          {
            isFav ? (
                <button onClick={handleFavorite}>💜</button>
            ) : (
                <button onClick={handleFavorite}>🤍</button>
            )
          }

          <button onClick={() => props.onClose(props.id)}>❌</button>
      </div>

          <div>
            <Link to={`/detail/${props.id}`} >
              <img src={props.image} alt={props.name} />
            </Link>
          </div>
          <div>
            
            <h2>{extract2}</h2>
          </div>
          <div>
            <h3>Id: {props.id}</h3>
          </div>
          <div>  
            <h3>Gender: {props.gender}</h3>            
          </div>



    </div>
  );
}
