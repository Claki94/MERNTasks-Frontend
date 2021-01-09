import React, { Fragment, useContext, useState } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // Context Provider
    const proyectosContext = useContext(proyectoContext);
    let { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    // State del proyecto nuevo
    let [nuevoProyecto, guardarNuevoProyecto] = useState({
        nombreProyecto: ''
    });

    // Destructuring del proyecto nuevo
    let { nombreProyecto } = nuevoProyecto;


    // Función que maneja el cambio del valor del input del formulario
    const handleChange = e => {
        guardarNuevoProyecto({
            ...nuevoProyecto,
            [e.target.name]: e.target.value
        });
    }


    // Función que maneja el submit del formulario
    const handleSubmit = e => {
        e.preventDefault();

        // Validar que el campo no este vacío
        if (!nombreProyecto) {
            mostrarError();
            return;
        }

        // Agregar al state 
        agregarProyecto(nuevoProyecto);

        // Reiniciar el formulario
        guardarNuevoProyecto({
            nombreProyecto: ''
        })
    }

    return (  
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
            >
                Nuevo Proyecto
            </button>

            {formulario
                ?
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={handleSubmit}
                    >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Introduce nombre del proyecto"
                            name="nombreProyecto"
                            value={nombreProyecto}
                            onChange={handleChange}
                        />

                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar proyecto"
                        />
                    </form>
                :
                    null
            }

            {errorFormulario
                ?
                    <p className="mensaje error">El nombre del proyecto es obligatorio</p>
                :
                    null
            }
        </Fragment>
    );
}
 
export default NuevoProyecto;