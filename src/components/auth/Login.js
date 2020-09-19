import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


    // State de los datos del usuario al iniciar sesión
    let [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    
    // Destructuring de los datos del usuario
    let {email, password} = usuario;


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

        // Pasarlo al action
    }

    
    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>

                <form
                    onSubmit={handleSubmit}
                >
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
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar sesión"
                        />
                    </div>
                </form>

                <Link to="/registro" className="enlace-cuenta">
                    Regístrate
                </Link>
            </div>
        </div>
    );
}
 
export default Login;