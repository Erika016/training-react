import classes from './App.module.css'
import { Auth } from "./components/Auth";

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <Auth><div>Videos</div></Auth>
      </div>
    </div>
  );
}

export default App;