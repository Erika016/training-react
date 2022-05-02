import './App.css';
import{PanelDeControl} from "./components/panelControl/Panel"
import { Autenticacion } from './components/autenti/Autenticacion';
import{Inicio, InicioSesion} from "./components/iniciar-sesion/Inicio"

function App() {
  return(
    <Autenticacion>
      <PanelDeControl/>
    </Autenticacion>
  )
}

export default App;
