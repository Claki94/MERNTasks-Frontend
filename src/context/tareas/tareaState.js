import React, { useReducer } from 'react';

import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO,
    NUEVA_TAREA,
    VALIDAR_TAREA, 
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    SELECCIONAR_TAREA,
    ACTUALIZAR_TAREA
} from '../../types';

const TareaState = props => {

    // Definimos un state inicial
    const initialState = {
        tareas: [
            {id: 1, nombreTarea: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {id: 2, nombreTarea: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 3, nombreTarea: 'Elegir Plataforma de pago', estado: false, proyectoId: 3},
            {id: 4, nombreTarea: 'Elegir Hosting', estado: true, proyectoId: 4},
            {id: 5, nombreTarea: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {id: 6, nombreTarea: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 7, nombreTarea: 'Elegir Plataforma de pago', estado: false, proyectoId: 3},
            {id: 8, nombreTarea: 'Elegir Hosting', estado: true, proyectoId: 4},
            {id: 9, nombreTarea: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {id: 10, nombreTarea: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 11, nombreTarea: 'Elegir Hosting', estado: true, proyectoId: 4},
            {id: 12, nombreTarea: 'Elegir Back-end', estado: true, proyectoId: 1},  
        ],
        tareasProyecto: [],
        tareaSeleccionada: {},
        errorTarea: false
    }

    // Creamos el dispatch y state
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    // Función que devuelve las tareas de un proyecto
    const obtenerTareasProyecto = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Función que agrega una nueva tarea al array
    const agregarTarea = tarea => {
        dispatch({
            type: NUEVA_TAREA,
            payload: tarea
        })
    }

    // Valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Permite eliminar una tarea pasándole el id de la misma
    const eliminarTarea = tareaId => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tareaId
        })
    }

    // Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // Selecciona una tarea para ser modificada en el formulario
    const seleccionarTarea = tarea => {
        dispatch({
            type: SELECCIONAR_TAREA,
            payload: tarea
        })
    }

    // Modifica una tarea
    const modificarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    // Devolvemos los datos a los que se puede acceder
    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,

                obtenerTareasProyecto,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                seleccionarTarea,
                modificarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;