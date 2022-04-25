import { IniciarSesion } from "./IniciarSesion";

export function Autenticacion(props) {
  const isLoggedIn = true;
  return isLoggedIn ? props.children : <IniciarSesion />;
}
