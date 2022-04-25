import "./PanelControl.css";
/* 1.crear un componente Iniciar sesion
      2. crear un componete PanelControl 
      3. Renderizar IniciarSesio cuando isLoggedIn = false y
       renderizar PanelControl cuando isLoggedIn = true */

export function IniciarSesion(props) {
    return(
  <div className="login" style={{color:"green" }}>
    <form>     
        <h1>Iniciar sesion</h1>
        <div className="Iniciar">
        <label>Usuario</label>
        <input Type="text" name="usuario"></input>
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
