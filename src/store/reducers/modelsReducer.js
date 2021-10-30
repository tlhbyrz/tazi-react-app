import { ADD_NEW_MODEL, EDIT_MODEL, DELETE_MODEL } from "../types";


const initialState = {
    models: [],
    activeModel: null,
    page: 0
}

export const modelReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MODEL:
            return {
                ...state,
                models: [action.payload ,...state.models]
            }
        default:
            return state
    }
}