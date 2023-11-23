import styles from "./nav.module.css"
import React from "react";
import SearchBar from "../searchbar/SearchBar";
import { NavLink } from "react-router-dom";

function Nav({onSearch, onRandom, logout}) { {/*------> AQUI IMPORTE LA FUNCION ONRANDOM */}
  return (
    <div>
        <SearchBar onSearch={onSearch} onRandom={onRandom} /> {/*------> AQUI PASE LA FUNCION ONRANDOM */}

      <div className={styles.container}>
        <NavLink to="/about"><button>About</button></NavLink>
        <NavLink to="/home"><button>Home</button></NavLink>
        <NavLink to="/favorites"><button>Favorites</button></NavLink>
        <button onClick={logout}>Logout ❌</button>
      </div>
    </div>
  );
}

export default Nav;
