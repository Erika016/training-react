// import logo from './logo.svg';
// import './App.css';

import { Superheroes } from "./components/Superheroes";
import { Terror } from "./components/Terror";
import { Animacion } from "./components/Animacion";

// const personajes=["Batman", "Grogu", "Spiderman", "Goku", "Krillin", "Groot" ]

// function App() {
//   return (
//  <ol>
//    {personajes.map(personajes=> <li>{personajes}- Cine HBO</li>)}
//  </ol>
//   );
// }

// export default App;

const listado = [
  {
    categoria: "Superheroes", //Titulo de categoria
    peliculas: ["Los Vengadores", "Spiderman", "Batman", "Superman"], //Listado de peliculas
  },
  {
    categoria: "Terror",
    peliculas: ["Saw", "Scream", "Hellraiser", "The Ring", "Insidious"],
  },
  {
    categoria: "Animación",
    peliculas: [
      "Tarzan",
      "El viaje de Chihiro",
      "Castillo Ambulante",
      "Rey leon",
      "Mulan",
    ],
  },
];
// 1. Crear un component Categoria, que acepte por props, titulo y listado de peliculas
// 2. Dentro del componente Categoria, crear una lista con <ol> y <li> de cada pelicula en esa categoria
// 3. En App.js hacer un map sobre el listado completo

function App() {
  return;
//   <div> {Superheroes.map(Superheroes=>` ${Superheroes}`)}
//   </div>
  <div>
    {Superheroes.map(Superheroes =>
        {"Superheroes"}
        <Categoria-titulo de peliculas />
        
        <Peliculas-titulo de películas />)
    }
  </div>;
//   <div>
//     <ol>
//       {Terror.map((item) => (
//         <li> ${props.children}</li>
//       ))}
//     </ol>
//   </div>;
}
export default App;
//  <ol>
//    {personajes.map(personajes=> <li>{personajes}- Cine HBO</li>)}
//  </ol>
