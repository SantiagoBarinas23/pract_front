"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({ usuario: "", password: "" });
  const [error, setError] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();

    if (!formData.usuario || !formData.password) {

      setError("Complete todos los campos");
      return;

    }

    console.log("Login:", formData);

  }

  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  return (
    <div className="Container">
      <div className="Login">
        <h1>Iniciar sesión</h1>

        <div className="login-body">
          <div className="knot-left">
            <form className="Formulario" onSubmit={handleSubmit}>
              {/* Campo Usuario */}
              <div className="Usuario">
                <div className="icono-usuario">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="campo">
                  <input
                    type="text"
                    id="usuario"
                    name="usuario"
                    value={formData.usuario}
                    onChange={handleChange}
                    required
                    aria-label="Usuario"
                  />
                  <label htmlFor="usuario">Usuario</label>
                </div>
              </div>

              {/* Campo Contraseña */}
              <div className="Usuario">
                <div className="icono-usuario">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <div className="campo">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    aria-label="Contraseña"
                  />
                  <label htmlFor="password">Contraseña</label>
                </div>
              </div>

              {error && <p className="error-message">{error}</p>}

              <button type="submit" className="button">
                Iniciar
              </button>
            </form>

            <div className="nudo">
              ¿No tienes cuenta?{" "}
              <button
                onClick={() => router.push("/register")}
                className="link-register"
                type="a"
              >
                ¡Regístrate aquí!
              </button>
            </div>
          </div>

          <div className="knot-right">
            <img src="/inicio.png" alt="Ilustración de inicio de sesión" />
          </div>
        </div>
      </div>
    </div>
  );
}
