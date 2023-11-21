import React from "react";
import SearchBar from "../searchbar/SearchBar";
import { NavLink } from "react-router-dom";

function Nav({onSearch, onRandom, logout}) { {/*------> AQUI IMPORTE LA FUNCION ONRANDOM */}
  return (
    <div>
      <SearchBar onSearch={onSearch} onRandom={onRandom} /> {/*------> AQUI PASE LA FUNCION ONRANDOM */}
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button onClick={logout}>Logout❌</button>
    </div>
  );
}

export default Nav;
