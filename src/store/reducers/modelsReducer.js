import { ADD_NEW_MODEL, EDIT_MODEL, DELETE_MODEL, SET_MODELS_ERROR } from "../types";


const initialState = {
    models: [],
    errors: []
}

export const modelReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MODEL:
            return {
                ...state,
                models: [...state.models, action.payload],
                errors: []
            }
        case EDIT_MODEL:
            return {
                ...state,
                models: state.models.map(item => item.slug === action.payload.slug ? action.payload : item),
                errors: []
            }
        case DELETE_MODEL:
            return {
                ...state,
                models: state.models.filter(item => item.slug !== action.payload),
                errors: []
            }
        case SET_MODELS_ERROR:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state
    }
}