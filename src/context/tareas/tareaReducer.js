import { 
    ELIMINAR_TAREA,
    NUEVA_TAREA,
    TAREAS_PROYECTO, 
    VALIDAR_TAREA,
    ESTADO_TAREA,
    SELECCIONAR_TAREA, 
    ACTUALIZAR_TAREA
} from "../../types";

export default (state, action) => {
    switch(action.type) {

        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasProyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }

        case NUEVA_TAREA:
            return {
                ...state,
                tareas: [action.payload, ...state.tareas],
                errorTarea: false
            }

        case VALIDAR_TAREA:
            return {
                ...state,
                errorTarea: true
            }

        case ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }

        case ESTADO_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
            }

        case SELECCIONAR_TAREA:
            return {
                ...state,
                tareaSeleccionada: action.payload
            }

        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea),
                tareaSeleccionada: {}
            }

        default:
            return state;

    }
}