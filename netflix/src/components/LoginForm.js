import classes from './LoginForm.module.css'
import PropTypes from 'prop-types'
import { useState } from "react";

const credenciales = {
  email: "test@gmail.com",
  password: "test"
}

export function LoginForm(props) {
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formValues
    if (email === credenciales.email && password === credenciales.password) {
      props.handleAuth(true)
    } else {
      props.handleAuth(false)
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h3>{props.title}</h3>
      <form className={classes.container} onSubmit={onSubmit}>
        <label htmlFor="email" className={classes.label}>
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className={`${classes.field} ${classes.formSpacing}`}
        />
        <label htmlFor="password" className={classes.label}>
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          className={`${classes.field} ${classes.formSpacing}`}
        />

        <button type="submit" className={classes.button}>
          Iniciar sesión
        </button>
      </form>
    </>
  );
}

LoginForm.propTypes = {
    title: PropTypes.string.isRequired,
    handleAuth: PropTypes.func.isRequired  
}

LoginForm.defaultProps = {
  title: "Formulario general"
}