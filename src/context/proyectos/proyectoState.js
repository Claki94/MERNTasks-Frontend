import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
        FORMULARIO_PROYECTO, 
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTO,
        VALIDAR_FORMULARIO,
        PROYECTO_ACTUAL,
        ELIMINAR_PROYECTO
        } from '../../types';

const ProyectoState = props => {

    // Temporal hasta que obtengamos los datos de la BD
    // Comprobamos el funcionamiento del dispatch para los proyectos ya que su state inicial es un array vacío
    const proyectos = [
        {id: 1, nombreProyecto: 'Tienda Virtual'},
        {id: 2, nombreProyecto: 'Intranet'},
        {id: 3, nombreProyecto: 'Diseño de Sitio Web'},
        {id: 4, nombreProyecto: 'MERN'}
    ];

    // State inicial del flujo de datos
    const initialState = {
        formulario: false,
        proyectos: [],
        errorFormulario: false,
        proyecto: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }

    // Obtener los proyectos ya creados
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        });
    }

    // Agregar un nuevo proyecto
    const agregarProyecto = (proyecto) => {
        proyecto.id = uuid.apply();

        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    // Función que valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Función que se ejecuta al hacer click sobre un proyecto a seleccionar
    const proyectoActual = (proyectoId) => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Función que elimina un proyecto de la lista de proyectos y reinicializa el proyecto actual a null
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                formulario: state.formulario,
                proyectos: state.proyectos,
                errorFormulario: state.errorFormulario,
                proyecto: state.proyecto,

                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;