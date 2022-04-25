import "./PanelControl.css";
/* 1.crear un componente Iniciar sesion
      2. crear un componete PanelControl 
      3. Renderizar IniciarSesio cuando isLoggedIn = false y
       renderizar PanelControl cuando isLoggedIn = true */

export function PanelControl(props) {
    return(
  <div className="login">
    <form>     
        <h1>Panel de Control</h1>
        <div className="Iniciar">
        <label>Usuario</label>
        <input type="text" name="usuario"></input>
      </div>
      <div className="Panel">
        <label>Contraseña</label>
        <input type="password" name="numbers"></input>
      </div>
      <div className="boton">
          <button type="button">Entrar</button>
      </div>
    </form>
  </div>
   );
}
