"use client";
import { useState } from "react";
import "./page.css"
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({ usuario: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword,  setShowPassword] = useState ( false );
  const [isLoading, setIsLoading] = useState ( false );


  const handleSubmit = (e) => {

    e.preventDefault();
    setError ( "" );

    if (!formData.usuario.trim () || !formData.password.trim ()) {

      setError("Complete todos los campos");
      return;

    }

    if (!formData.password.length < 8) {

      setError( "Contraseña de Minimo 8 caracteres")
      return;
    }

    setIsLoading ( true)

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
