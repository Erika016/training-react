import { ColourTarjeta, Tarjeta } from "./components/Tarjetas";


function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 720, margin: '0 auto' }}>
      <Tarjeta
        titulo="TWITTER"
        descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        textoBoton="READ MORE"
        esPremium={false}
      />
      <Tarjeta
        titulo="INSTAGRAM"
        descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        textoBoton="READ MORE"
        esPremium={true}
      />
      <Tarjeta
        titulo="YOUTUBE"
        descripcion="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        textoBoton="READ MORE"
        esPremium={false}
      />

      <ColourTarjeta
       resultado={true } />
    </div>
  );
  
}


export default App;