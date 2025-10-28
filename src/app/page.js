"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";



export default function Home() {

  return (
    <div className="Container">
      <div className="Login">
        <h1>Iniciar secion</h1>
        <div className="login-body">
          <div className="knot-left">
            <div className="Formulario">
              <div className="Usuario">
                <input type="text" required />
                <label htmlFor="Nombre">Usuario</label>
              </div>
              <div className="Usuario">
                <input type="password" required />
                <label htmlFor="Nombre">Contraseña</label>
              </div>
              <button className="button">Iniciar</button>
            </div>
          </div>
          <div className="knot-right">
            <img src="/Inicio.png" alt="Inicio" />
          </div>
        </div>
      </div>
    </div>
  );



}
