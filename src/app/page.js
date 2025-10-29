"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="Container">
      <div className="Login">
        <h1>Iniciar sesión</h1>

        <div className="login-body">
          <div className="knot-left">
            <div className="Formulario">
                <div className="Usuario">
                  <div className="icono-usuario">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div className="campo">
                    <input type="text" required />
                    <label htmlFor="Nombre">Usuario</label>
                  </div>
                </div>
              <div className="Usuario">
                <div className="icono-usuario">
                    <FontAwesomeIcon icon={faLock} />
                  </div>
                <div className="campo">
                    <input type="password" required />
                    <label htmlFor="Nombre">Contraseña</label>
                  </div>
              </div>
              <button className="button">Iniciar</button>
            </div>
            <div>¿No tienes cuenta? ¡Registrate aqui!</div>
          </div>
          <div className="knot-right">
            <img src="/Inicio.png" alt="Inicio" />
          </div>
        </div>
      </div>
    </div>
  );
}
