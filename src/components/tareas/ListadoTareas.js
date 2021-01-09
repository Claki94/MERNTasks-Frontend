import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import Tarea from './Tarea';

const ListadoTareas = () => {

    // Importamos el context
    const proyectosContext = useContext(proyectoContext);
    const tareasContext = useContext(tareaContext);

    // Seleccionamos aquellos datos o funciones de interés
    const { proyecto, eliminarProyecto } = proyectosContext;
    const { tareasProyecto } = tareasContext;

    // Comprobamos que llega un proyecto al componente
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Destructuring del proyecto
    const { id, nombreProyecto } = proyecto;

    return (  
        <Fragment>
            <h2>Proyecto: {nombreProyecto}</h2>

            <ul className="listado-tareas">
                {!tareasProyecto.length
                
                    ? 
                        (<li className="tarea"><p>No hay tareas</p></li>)
                
                    : 
                        <TransitionGroup>
                            {tareasProyecto.map(tarea => (
                                <CSSTransition
                                    key={tarea.id}
                                    timeout={200}
                                    classNames="tarea"
                                >
                                    <Tarea
                                         
                                        tarea={tarea}
                                        proyectoId={id} 
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => eliminarProyecto(id)}
            >
                Eliminar proyecto &times;
            </button>
        </Fragment>
    );
}
 
export default ListadoTareas;