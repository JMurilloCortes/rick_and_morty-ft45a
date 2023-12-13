import styles from "./nav.module.css"
import React from "react";
import SearchBar from "../searchbar/SearchBar";
import { NavLink } from "react-router-dom";
import imagen from '../../images/logo.png';

function Nav({onSearch, onRandom, logout}) { {/*------> AQUI IMPORTE LA FUNCION ONRANDOM */}
  return (
    <header>
    <div className={styles.container}>
      <div>
        <a>
          <img src={imagen} alt="image" />
        </a>
      </div>

        <SearchBar onSearch={onSearch} onRandom={onRandom} /> {/*------> AQUI PASE LA FUNCION ONRANDOM */}

      <nav>
        <NavLink to="/about"><button>About</button></NavLink>
        <NavLink to="/home"><button>Home</button></NavLink>
        <NavLink to="/favorites"><button>Favorites</button></NavLink>
        <button onClick={logout}>Logout ❌</button>
      </nav>
    </div>
    </header>
  );
}

export default Nav;
