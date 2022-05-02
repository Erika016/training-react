import { PanelDeControl } from "../panelControl/Panel"
import "./Inicio.css"
export function InicioSesion (){
    return(
        <div class="formulario">
            <form>
                <h1>Iniciar sesion</h1>
                <div>
                    <label>Usuario</label>
                    <input type="textp" name="usuario"></input>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="clave"></input>
                </div>
                <div class="boton">
                    <button type="button">Entrar</button>
                </div>
            </form>
        </div>
    )
}