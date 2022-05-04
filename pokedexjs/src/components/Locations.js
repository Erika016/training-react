import React, { useContext, useEffect, useState } from "react";
import { GeneralContext } from "./components/Context";
import LocationDetail from "./components/LocationDetail";



const Locations = () => {

  const {state, setState} = useContext(GeneralContext)

  useEffect(() => {
    if (state.selectedRegion) {
      fetch(`https://pokeapi.co/api/v2/region/${state.selectedRegion}`)
        .then((res) => res.json())
        .then((data) => setState({...state, locations: data.locations}));
    }
  }, [state.selectedRegion]);

  return (
    <div style={{ display: "flex", border: "1px solid blue" }}>
      <h1>Locations</h1>
      <ul>
        {state.locations.map((location) => (
          <li key={location.name}>
            <button
              onClick={() => setState({...state, Location: location.name})}
            >
              {location.name}
            </button>
          </li>
        ))}
      </ul>

      <LocationDetail

      />
    </div>
  );
};

export default Locations;