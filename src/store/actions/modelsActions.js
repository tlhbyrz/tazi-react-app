import { ADD_NEW_MODEL, EDIT_MODEL, DELETE_MODEL, SET_MODELS_ERROR } from "../types";
import { MAX_NUMBER_OF_SAME_TYPE, ConfigType } from "data/constants";




export const deleteModel = ( item, toast ) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_MODEL,
            payload: item.slug
        })
        toast({
            title: `${item.name} successfully removed!`,
            status: "info",
            duration: 5000,
            isClosable: true,
            position: "bottom"
        })
    } catch (error) {
        dispatch({
            type: SET_MODELS_ERROR,
            payload: [`${error.message}`]
        })
    }
}


export const addNewModel = ( item, toast, history ) => async (dispatch, getState) => {
    const models = getState().modelsStore.models;
    let errorList = [];
    
    try {
        if(models.some(model => model.slug === item.slug)){
            errorList.push("Model name must be unique!")
            dispatch({
                type: SET_MODELS_ERROR,
                payload: errorList
            })
            return
        }

        if(item.type === ConfigType.Type1){
            if(models.filter(model => model.type === ConfigType.Type1).length < MAX_NUMBER_OF_SAME_TYPE){
                dispatch({
                    type: ADD_NEW_MODEL,
                    payload: item
                })
                toast({
                    title: `${item.name} successfully added!`,
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom"
                  })
                history.push("/")
            }else{
                errorList.push("You can not have more than 5 models of type1!")
            }
        }else if(item.type === ConfigType.Type2){
            if(models.filter(model => model.type === ConfigType.Type2).length < MAX_NUMBER_OF_SAME_TYPE){
                dispatch({
                    type: ADD_NEW_MODEL,
                    payload: item
                })
                toast({
                    title: `${item.name} successfully added!`,
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom"
                  })
                history.push("/")
            }else{
                errorList.push("You can not have more than 5 models of type2!")
            }
        }

        if(errorList.length > 0){
            dispatch({
                type: SET_MODELS_ERROR,
                payload: errorList
            })
        }

    } catch (error) {
        dispatch({
            type: SET_MODELS_ERROR,
            payload: [`${error.message}`]
        })
    }
}



export const editModel = ( item, toast, history ) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EDIT_MODEL,
            payload: item
        })
        toast({
            title: `Your changes successfully saved!`,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom"
          })
        history.push("/")

    } catch (error) {
        dispatch({
            type: SET_MODELS_ERROR,
            payload: [`${error.message}`]
        })
    }
}


export const setError = ( messages ) => async (dispatch, getState) => {
    dispatch({
        type: SET_MODELS_ERROR,
        payload: messages
    })
}
