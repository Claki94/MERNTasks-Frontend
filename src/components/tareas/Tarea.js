import React, { useContext } from 'react';

import tareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea, proyectoId}) => {

    // Usamos el context de tareas y obtenemos aquello que se va a usar
    const tareasContext = useContext(tareaContext);
    const { 
        obtenerTareasProyecto, 
        eliminarTarea, 
        cambiarEstadoTarea, 
        seleccionarTarea 
    } = tareasContext;

    // Comprobamos que exista una tarea con contenido
    if(!Object.keys(tarea).length) return null;

    // Destructuring de la tarea
    const { nombreTarea, estado } = tarea;

    // Eliminamos una tarea y volvemos a obtener las tareas del proyecto
    const eliminarTareaSeleccionada = tareaId => {
        // Eliminamos la tarea
        eliminarTarea(tareaId);

        // Obtenemos las tareas del proyecto
        obtenerTareasProyecto(proyectoId);
    }

    // Función que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        tarea.estado = !tarea.estado;
        cambiarEstadoTarea(tarea);
    }

    // Función que selecciona una tarea {
    const tareaAModificar = tarea => {
        seleccionarTarea(tarea);
    }

    return (  
        <li className="tarea sombra">
            <p>{nombreTarea}</p>

            <div className="estado">
                {estado
                    ?
                        (
                            <button
                                type="button"
                                className="completo"
                                onClick={() => cambiarEstado(tarea)}
                            >
                                Completo
                            </button>
                        )
                    :
                        (
                            <button
                                type="button"
                                className="incompleto"
                                onClick={() => cambiarEstado(tarea)}
                            >
                                Incompleto
                            </button>
                        )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => tareaAModificar(tarea)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => eliminarTareaSeleccionada(tarea.id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
}
 
export default Tarea;