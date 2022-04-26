
import "./Login.css"
export function Login(props) {
    return(
  <div style={{border: "2px solid black"}} className="login">
    <form className="formulario">     
        <h1 style={{color:"red"}}>Netflix</h1>
        <div className="Iniciar">
        <p>Email address</p>
        <input type="text" name="usuario"></input>
      </div>
      <div className="Panel">
        <p>Password</p>
        <input type="password" name="numbers"></input>
      </div>
      <div>
          <button className="boton" type="button">Sing in</button>
      </div>
    </form>
  </div>
   );
}