export function Categoria(props){
   return(
   <div>
     <h1>
       {props.titulo}
     </h1>
     <ol>{props.peliculas.map((pelicula) =>( <li>{pelicula}</li>))} </ol>
     </div>
     );
}
