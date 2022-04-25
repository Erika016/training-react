import "./App.css";
import { Card } from "./components/Card";
// import "./components.Card.css";
// {
//     titulo: '',
//     descripcion: '',
//     imagenUrl: '',
//     textoBoton: '',
//     enlaceBoton: ''
// }
function App() {
  return (
    <div className="wrapper">
      <Card
        titulo="Trabajo en equipo"
        descripcion="        Siempre podemos ir más allá de nuestros límites, solo falta tener muchísimo coraje y fortaleza, pero;
        Lo más importante,es creer siempre en nosotros mismos."
        textoBoton="Maestro Roshi"
        enlaceBoton="https://otakuanimelife.org/todas-las-lecciones-que-el-maestro-roshi-nos-ha-dejado-a-lo-largo-de-dragon-ball-2/"
        imagenUrl="https://i.pinimg.com/originals/b0/04/b1/b004b13bb4648c783c82af9dc9ffdf46.jpg"
      />
    </div>
  );
}

export default App;
