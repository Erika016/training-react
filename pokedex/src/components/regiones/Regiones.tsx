import React, { useEffect, useState } from "react";

const [regions, setRegions] = useStar
  

export const Regiones: React.FC<Props> = (props) => {
  const [regionesType, setRsegionesType] = useState<RegionesType>();

  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/region/${props.regionesType}`)
      .then((res) => res.json())
      .then((data) => setRegionesType(data));
  }, [props.regionesType]);


  }
  return (
    <div>
 
 
    </div>
  );
};
