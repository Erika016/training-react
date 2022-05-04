// estado
// usestate
// variable use del usuario
// export conmms
// app un boton que al pulsarlo al usuario use =    id 1 y email  ...

import { createContext, useState } from "react";
// import { Login } from "./components/Login";
export const AuthContext = createContext();
export const AuthProvider = (props) => {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user }}>
      {user ? props.children : <Login />}
    </AuthContext.Provider>
  );
};
