import { Tarjeta } from "./components/Tarjetas";


function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 720, margin: '0 auto' }}>
      <Tarjeta
        titulo="TWITTER"
        descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        textoBoton="READ MORE"
        color="black"
      />
      <Tarjeta
        titulo="INSTAGRAM"
        descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        textoBoton="READ MORE"
        color="pink"
      />
      <Tarjeta
        titulo="YOUTUBE"
        descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        textoBoton="READ MORE"
        color="black"
      />
    </div>
  );
}

export default App;