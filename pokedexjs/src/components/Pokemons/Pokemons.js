import React, { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";



function Pokemons() {
  
  const [page, setPage] = useState(0);

  const [pokemons, setPokemons] = useState([]);

  const [selectedPokemonName, setSelectedPokemonName] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`)
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, [page]);

  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            {}
            <button onClick={() => setSelectedPokemonName(pokemon.name)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)}>Anterior</button>
      <button onClick={() => setPage(page + 1)}>Siguiente</button>
      {}
      {selectedPokemonName && <Pokemon name={selectedPokemonName} />}
      
      {}
    </div>
  );
}

export default Pokemons;