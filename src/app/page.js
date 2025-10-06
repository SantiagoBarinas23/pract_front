import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <div className="loginContainer">
        <h2>Inicio De Sesion</h2>

        <div className="Usuario">
          <input type="text" required/>
          <label htmlFor="Nombre">Usuario</label>
        </div>

        <div className="Usuario">
          <input type="password" required/>
          <label htmlFor="Nombre">Contraseña</label>
        </div>

        <br />
        
        <button className="button">Iniciar</button>

        <br />
        <p className="register-text">
          ¿No tienes cuenta? <a href="Registro.html">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
