import { useState, useEffect } from "./react";

export function Region() {
  const [regiones, setRegiones] = useState([]);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/region/${state.selectedRegion}`)
      .then((data) => data.json())
      .then((data) => setRegiones(data.result));

  }[]);
  return(
    
  )
}
