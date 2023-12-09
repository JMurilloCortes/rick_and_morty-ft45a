import styles from "./cards.module.css"
import Card from "../card/Card";

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.container}>

      {
      !characters.length ? <h2> Ingrese un id...</h2> :
      characters.map((character, index) => (
        <Card
          key={index}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
