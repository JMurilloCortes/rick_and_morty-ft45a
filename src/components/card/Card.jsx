import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div>
      <button onClick={() => props.onClose(props.id)}>X</button>
      <Link to={`/detail/${props.id}`} >
        <h2>{props.name}</h2>
      </Link>
      <h3>Id: {props.id}</h3>
      <h3>Status: {props.status}</h3>
      <h3>Specie: {props.species}</h3>
      <h3>Gender: {props.gender}</h3>
      <h3>Origin: {props.origin.name}</h3>
      <img src={props.image} alt={props.name} />
    </div>
  );
}
