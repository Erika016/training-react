// import logo from './logo.sv
// import { IniciarSesion } from './components/IniciarSesion';
import { PanelControl } from './components/PanelControl';
import { Autenticacion } from './components/Autenticacion';


      /* 1.crear un componente Iniciar sesion
      2. crear un componete PanelControl 
      3. Renderizar IniciarSesio cuando isLoggedIn = false y 
      renderizar PanelControl cuando isLoggedIn = true 
      4.COMPONENTE AUTENTIFICACION
      5.SI es isloggedIn renderiza props.childen, sino, Iniciar sesion
      */

 export function App() {
  // const isLoggedIn= false;
  return (
   <Autenticacion>
     <PanelControl/>
   </Autenticacion>
);
}

export default App;
