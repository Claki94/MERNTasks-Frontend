import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {


    // State de los datos del usuario al registrarse
    let [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    
    // Destructuring de los datos del usuario
    let {nombre, email, password, confirmar} = usuario;


    // Función que maneja el evento Change de los inputs del formulario
    const handleChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }


    // Función que maneja el evento Submit del formulario
    const handleSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios

        // Password mínimo de 6 caracteres

        // Ambos passwords iguales

        // Pasarlo al action
    }

    
    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Registro</h1>

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Introduce tu nombre"
                            value={nombre}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Introduce tu email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Introduce tu contraseña"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar contraseña</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Confirma tu contraseña"
                            value={confirmar}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link to="/" className="enlace-cuenta">
                    Volver a 'iniciar sesión'
                </Link>
            </div>
        </div>
    );
}
 
export default Registro;