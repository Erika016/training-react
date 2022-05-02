import "./App.css";
import { useState } from "react";


function App() {
  // const [estado, setEstado] = useState();
  // return (
  //   // este codigo es para un solo boton encendido y apagado
  //   // <div>
  //   //   <div className= {`circulo ${estado? "encendido" : "apagado"}`}>
  //   //   </div>
  //   //   <button onClick={()=>setEstado(!estado)}>Encendido/Apagado</button>
  //   // </div>

  //   // ESTE CODIGO PARA EL SEMAFORO CADA COLOS SU BOTON
  // );
  // const [idLampara, setIdLampara] = useState();
  // return (
  //   <div>
  //     <div
  //       className={`circulo ${idLampara === "rojo" ? "rojo" : "apagado"}`}
  //     ></div>
  //     <button onClick={() => setIdLampara("rojo")}>Rojo</button>
  //     <div
  //       className={`circulo ${idLampara === "naranja" ? "naranja" : "apagado"}`}
  //     ></div>
  //     <button onClick={() => setIdLampara ("naranja")}>Naranja</button>
  //     <div
  //       className={`circulo ${idLampara === "verde" ? "verde" : "apagado"}`}
  //     ></div>
  //     <button onClick={() => setIdLampara("verde")}>Verde</button>
  //   </div>
  // );
  const [idLampara, setIdLampara] = useState();
  function bucle() {
    if (idLampara === "red") {
      setIdLampara("green");
    } else if (idLampara === "green") {
      setIdLampara("orange");
    } else if (idLampara === "orange") {
      setIdLampara("red");
    }
  }
  return (
    <div>
      <div className={` ${idLampara === "rojo" ? "rojo" : "apagado"}`}></div>
      <div
        className={` ${idLampara === "naranja" ? "naranja" : "apagado"}`}
      ></div>
      <div className={` ${idLampara === "verde" ? "verde" : "apagado"}`}></div>
      <button
        onClick={bucle}
      >
        Interruptor
      </button>
    </div>
  );
}

export default App;
