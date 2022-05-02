import { InicioSesion } from "../iniciar-sesion/Inicio";

export function Autenticacion(props) {
  const isLoggedIn = true;
  return isLoggedIn ? props.children : <InicioSesion />;
}
