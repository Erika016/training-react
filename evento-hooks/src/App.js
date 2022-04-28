// import logo from './logo.svg';
import "./App.css";
// import{Evento} from "./components/Evento"
// import {Circulo} from "./components/Circulo"

// function App() {
//   return (
//     <div className="App">

//       <Circulo></Circulo>
//     </div>
//   );
// }

// export default App;

// UN SOLO CIRCULO

// import {useState} from "react"
// function App (){
//   const[estado, setEstado] =useState(false);
//   return(
//     <div>
//       <div className={`circulos ${estado ? "encendido" : "apagado"}` }>

//       </div>
//       <div>
//       <button onClick={ () => setEstado(!estado)} >Encender/Apagar</button>
//       </div>
//     </div>
//   )
// }
// export default App;

// 3 CIRCULOS
// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [idLampara, setIdLampara] = useState();
//   return (
//     <div>
//       <div
//         className={`circulo ${idLampara === "verde" ? "verde" : "apagado"}`}
//       />
//       <button onClick={() => setIdLampara("verde")}>Verde</button>
//       <div
//         className={`circulo ${idLampara === "naranja" ? "naranja" : "apagado"}`}
//       />
//       <button onClick={() => setIdLampara("naranja")}>Naranja</button>

//       <div className={`circulo ${idLampara === "rojo" ? "rojo" : "apagado"}`} />

//       <button onClick={() => setIdLampara("rojo")}>Rojo</button>
//     </div>
//   );
// }

// // export default App;

// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [idLampara, setIdLampara] = useState();
//   return (
//     <div>
//       <div
//         className={`circulo ${idLampara === "verde" ? "verde" : "apagado"}`}
//         className={`circulo ${idLampara === "naranja" ? "naranja" : "apagado"}`}
//         className={`circulo ${idLampara === "rojo" ? "rojo" : "apagado"}`} />
//         <button onClick={buble} >interruptor</button>
//     </div>
//    ssss
//   );
// }

// export default App;
// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [idLampara, setIdLampara] = useState();

//   const bucleSemaforo = () => {
// switch
//   }

//   return (
//     <div>
//       <Bombilla color="rojo" encendida={idLampara==="rojo"}/>
//       <Bombilla color="naranja" encendida={idLampara==="naranja"}/>
//       <Bombilla color="verde" encendida={idLampara==="verde"}/>      
//       <button onClick={() => setIdLampara("rojo")}>Rojo</button>
//     </div>
//   );
// }

// // export default App;
import { useState } from "react";
import { Bombilla } from "./components/Bombilla";

function App() {
  const [idLampara, setIdLampara] = useState();
    
  const bucleSemaforo = () => {
      switch (idLampara) {
        case "rojo":
          setIdLampara("verde")
          break;
        case "verde":
          setIdLampara("naranja")
          break
        case "naranja":
          setIdLampara("rojo")
          break;
        default:
          setIdLampara("verde")
          break;
      }
    }

  return (
    <div>
      <Bombilla color="rojo" encendida={idLampara === "rojo"} />
      <Bombilla color="naranja" encendida={idLampara === "naranja"} />
      <Bombilla color="verde" encendida={idLampara === "verde"} />
      <Button onClick={bucleSemaforo} />
    </div>
  );
}

export default App;
