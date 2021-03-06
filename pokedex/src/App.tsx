import React, { useContext, useEffect, useState } from "react";
import { GeneralContext, INITIAL_STATE } from "./components/Context";
import Locations from "./components/Locations";

interface RegionsData{
  count: number;
  next: string;
  previous: string | null;
  results: RegionResult[];
}

interface RegionResult {
  name: string;
  url: string;
}

function App() {
 const { state, setState } = useContext(GeneralContext)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/region")
      .then((res) => res.json())
      .then((data: RegionsData) => setState({...state, regions: data.results}));
  }, []);

  return (
    <div>
      <div style={{ display: "flex", border: "1px solid red" }}>
        <button
          onClick={() => {
            setState(INITIAL_STATE);
          }}
        >
          Reset
        </button>
        <ul>
          {state.regions.map((region) => (
            <li key={region.name}>
              <button
                onClick={() =>
                  setState({ ...state, selectedRegion: region.name })
                }
              >
                {region.name}
              </button>
            </li>
          ))}
        </ul>
        <Locations />
      </div>
    </div>
  );
}

export default App;