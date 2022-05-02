export function Bombilla() {
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
        onClick={() => {
          bucle;
        }}
      >
        Interruptor
      </button>
    </div>
  );
}
