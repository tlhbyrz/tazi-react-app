import { ADD_NEW_MODEL, EDIT_MODEL, DELETE_MODEL, SET_MODELS_ERROR } from "../types";

export const addNewModel = ( item ) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_NEW_MODEL,
            payload: item
        })

    } catch (error) {
        dispatch({
            type: SET_MODELS_ERROR,
            payload: error.message
        })
    }
}