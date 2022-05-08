import React, { useEffect, useState } from "react";


  useEffect(() => {
 
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((res) => res.json())
      .then((data) => setPokemonDetails(data));
  }, [props.name]);

  /
  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  // Renderizamos dos imagenes del pokemón, junto con su nombre y los tipos que tiene
  return (
    <div>
      <img
        width="200"
        src={pokemonDetails.sprites.front_default}
        alt={`${pokemonDetails.name} front`}
      />
      <img
        width="200"
        src={pokemonDetails.sprites.back_default}
        alt={`${pokemonDetails.name} back`}
      />
      <h1>{pokemonDetails.name}</h1>
      <p>Types:</p>
      <ul>
        {pokemonDetails.types.map((type) => (
          <li>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
};