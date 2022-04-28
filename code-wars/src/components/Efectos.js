import{useEffect} from "react";

export function Efectos() {
    const[peliculas, setPeliculas] =useState([]);

    useEffect(()=>{
        // Este codigo lo quiero correr al montar el componente
console.log("Solo me ejecuto al montar");
fetch ("https://swapi.dev/api/films")
.then((data) => data.json())
.then((data)=> setPeliculas(data.result));
// Este codigo lo quiero correr al desmontar el commponente
return()=>{
  console.log("solo me ejecuto al desmontar");
};
}, []);
    return (
    <div>
        <ol>
            {peliculas.map((pelicula)=>{
                <li>
                    {pelicula.title}
                </li>
            })}
        </ol>
        <button onClick={()=> setCont} > </button>
    </div>
    );
}