import { createContext, useState } from "react";

export const INITIAL_STATE = {
  regions: [],
  selectedRegion: undefined,
  locations: [],
  selectedLocation: undefined,
  locationsDetails: undefined
}

export const GeneralContext = createContext({
  state: INITIAL_STATE,
  setState: null,
});

export const GeneralProvider  = (props) => {
  const [state, setState] = useState(INITIAL_STATE)

    return (
      <GeneralContext.Provider value={{state, setState}}>
        {props.children}
      </GeneralContext.Provider>
    );
}
