import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


import proyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    // Extraer los proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, []);

    // Revisar si proyectos tiene contenido
    if(!proyectos.length) return <p>No hay proyectos, comienza creando uno</p>;


    return (  
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto.id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto 
                            proyecto={proyecto} 
                        />
                    </CSSTransition> 
                ))}
            </TransitionGroup>
        </ul>
    );
}
 
export default ListadoProyectos;