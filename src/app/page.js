"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goRegister = () =>{
    router.push("/register/")
  };

  const goinicio = () => {
    router.push ("/inicio/")
  }
  
  return (
    <div className="container">
      <div className="loginContainer">
        <h2>INICIO DE SESION</h2>

        <div className="Usuario">
          <input type="text" required/>
          <label htmlFor="Nombre">Usuario</label>
        </div>

        <div className="Usuario">
          <input type="password" required/>
          <label htmlFor="Nombre">Contraseña</label>
        </div>
        
        <button className="button"><a onClick={goinicio}>Iniciar</a></button>

        <p className="register-text">
          ¿No tienes cuenta? <a onClick={goRegister}>Regístrate</a>
        </p>
      </div>
    </div>

  );
  
}
