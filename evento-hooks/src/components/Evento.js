// 3 botones en pantalla
// onclick
// hola mostrar alerta hola
// onclick
// adios console.log diga vete de aqui
// pregunta (use state) cambiar texto y que ponga Esto lo tengo Dominado

// BUTTONonclick={()=>{
// alert("hola");
// }}

import {useState} from 'react'
export function Evento(props) {
  const [pregunta, setPregunta] = useState("");
  return (
    <div>
      <div>
        <button
          onClick={() => {
            alert("Hola");
          }}
        >
          Hola
        </button>
      </div>

      <div>
        <button
          onClick={(e) => {
            console.log("Adios");
          }}
        >
          Adios
        </button>
      </div>
      <div>
        <button 
       onClick={(e) => 
       pregunta!=="Pregunta"
       ? setPregunta("Pregunta") : setPregunta("Esto no tengo ni idea")
       }>
           {pregunta}
        </button>
      </div>
    </div>
  );
}
