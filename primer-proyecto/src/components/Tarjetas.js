import "./Tarjetas.css";

export function Tarjeta(props) {
  return (
    <div
      className="Tarjeta-container"
      style={{
        border: `2px solid ${props.color}`,
      }}
    >
      <div style={{ padding: 16 }}>
        <h1 style={{ fontSize: 24, fontWeight: 900, textAlign: "center" }}>
          {props.titulo}
        </h1>
        <p style={{ textAlign: "center", marginBottom: 24 }}>
          {props.descripcion}
        </p>
        <button
          style={{
            width: "100%",
            height: 44,
            borderRadius: 22,
            backgroundColor: props.color,
            border: "none",
            color: "white",
          }}
        >
          {props.textoBoton}
        </button>
      </div>
    </div>
  );
}
const resultado= true;
export function colourTarjeta(){
    return(
        <div>
            {resultado ? <h2>Esto es verdad</h2> : <h2>Esto no es cierto</h2> }
        </div>
    )
}