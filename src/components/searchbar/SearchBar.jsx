import { useState } from "react";
export default function SearchBar({ onSearch, onRandom }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setId(value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    onSearch(id);
    setId("");
  };

  // ----------------------CODIGO EXTRA RANDON---------------------------------------
 
  const handleRandom = () => {
    let random = Math.floor(Math.random() * (726 - 1 + 1) + 1);
    setId(random);
    onRandom(random);
    setId("")
  };

  // ----------------------FIN DEL CODIGO EXTRA RANDOM---------------------------------------



  return (
    <div>
      <input value={id} onChange={handleChange} type="text" />
      <button onClick={handleClick}>Agregar</button>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}
