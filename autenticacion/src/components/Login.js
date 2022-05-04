import { useContext } from "react";
import { AuthContext } from "./AutContex";
// si el usuario definido prop.children si no login
import {Login} from "./components/Login"
import { postLogin } from "./login";

export function Login() {
  const context = useContext(AuthContext);
  console.log(contex);

  const handleLogin =()=>{
      postLogin(.then((data)=> context.setUser))



})
}

