import React, { useEffect, useState } from "react";
import { Regiones } from "./components/regiones/Regiones";
interface PokemonResult {
  name: string;
  url: string;
}

function App() {

  const [pokemons, setPokemons] = useState<PokemonResult[]>([]);
  const [selectedPokemonName, setSelectedPokemonName] = useState<string>();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`)
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <div>
  
    </div>
  );
}

export default App;