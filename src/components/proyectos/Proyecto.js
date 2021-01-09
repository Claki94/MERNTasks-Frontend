import React, { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    // Uso del context
    const proyectosContext = useContext(proyectoContext);
    const tareasContext = useContext(tareaContext);

    // Extraemos aquellos datos que nos interesan del context
    const { proyectoActual } = proyectosContext;
    const { obtenerTareasProyecto } = tareasContext;

    // Comprobar que tengamos un proyecto con contenido
    if(!Object.keys(proyecto).length) return null;

    // Destructuring del proyecto
    let { nombreProyecto, id } = proyecto;

    // Función para agregar el proyecto aactual 
    const seleccionarProyecto = id => {
        proyectoActual(id); // Fijar un proyecto actual
        obtenerTareasProyecto(id); // Filtrar tareas según el proyecto
    }

    return (  
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(id)}
            >
                {nombreProyecto}
            </button>
        </li>
    );
}
 
export default Proyecto;