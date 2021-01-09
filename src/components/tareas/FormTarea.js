import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
    
    // Importamos el context
    const proyectosContext = useContext(proyectoContext);
    const tareasContext = useContext(tareaContext);

    // Seleccionamos aquellos datos o funciones de interés
    const { proyecto } = proyectosContext;
    const { 
        tareaSeleccionada,
        errorTarea, 
        obtenerTareasProyecto, 
        agregarTarea, 
        validarTarea,
        modificarTarea
    } = tareasContext;

    // Crear el state del formulario de tareas
    const [datosTarea, guardarDatosTarea] = useState({
        nombreTarea: '',
        estado: false,
    })
    const { nombreTarea } = datosTarea;

    // Use Effect que detecta si hay una tarea seleccionada
    useEffect(() => {

        if(Object.keys(tareaSeleccionada).length) {
            guardarDatosTarea(tareaSeleccionada);
        }

    }, [tareaSeleccionada])

    // Si no hay un proyecto seleccionado no mostramos el formulario
    if(!proyecto) return null;

    // Función que maneja el evento change cuando se modifica el valor del input
    const handleChange = e => {
        guardarDatosTarea({
            ...datosTarea,
            [e.target.name]: e.target.value
        })
    }

    // Función que maneja el evento submit del formulario
    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if(!nombreTarea.trim()) {
            validarTarea();
            return;
        }

        // Revisar si es edición o es agregar
        if(!Object.keys(tareaSeleccionada).length) {
            // tarea nueva
            // Curioso, intentando actualizar los datos con el método del state, es como asíncrono
            // y no se actualiza correctamente al pasarlo al método agregarTarea.
            datosTarea.id = uuid.apply();
            datosTarea.proyectoId = proyecto.id;
            agregarTarea(datosTarea);
        } else {
            // actualizar tarea existente
            modificarTarea(datosTarea);
        }

        // Reiniciar el formulario
        guardarDatosTarea({
            nombreTarea: '',
            estado: false
        })

        // Obtener de nuevo las tareas del proyecto
        obtenerTareasProyecto(proyecto.id)
    }

    return (  
        <div className="formulario">
            <form
                onSubmit={handleSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Introduce nombre de tarea"
                        name="nombreTarea"
                        value={nombreTarea}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={Object.keys(tareaSeleccionada).length ? 'Editar tarea' : 'Agregar tarea'}
                    />
                </div>
                
            </form>

            {errorTarea
                ?
                    <p className="mensaje error">El nombre de la tarea es obligatorio</p>
                :
                    null
            }
        </div>
    );
}
 
export default FormTarea;