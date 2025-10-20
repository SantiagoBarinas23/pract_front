import styles from "./register.css"

export default function Register () {
    return(
    <div className="contenedor" >
      <div className="contenedorInicial">
            <h2>REGISTRO</h2>

            <div className="user">
            <input type="text" required/>
            <label htmlFor="Nombre">Nombres</label>
            </div>

            <div className="user">
            <input type="text" required/>
            <label htmlFor="Nombre">Apellidos</label>
            </div>

            <div className="user">
            <input type="text" required/>
            <label htmlFor="Nombre">Correo</label>
            </div>

            <div className="user">
            <input type="text" required/>
            <label htmlFor="Nombre">Telefono</label>
            </div>

            <div className="user">
            <input type="password" required/>
            <label htmlFor="Nombre">Contraseña</label>
            </div>

            <div className="user">
            <input type="password" required/>
            <label htmlFor="Nombre">Confirmacion De Contraseña</label>
            </div>

            <button className="boton">REGISTRO</button>

            <button className="buto">Regresar</button>

      </div>
    </div>
    )
}