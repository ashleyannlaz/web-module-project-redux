export const TOGGLE_FAVE = "TOGGLE_FACE";
export const ADD_FAVE = "ADD_FAVE";
export const REMOVE_FAVE = "REMOVE_FAVE"

export const toggleFave = () => {
    return({type:TOGGLE_FAVE})
}

export const addFave = (fave) => {
    return({type:ADD_FAVE, payload:fave})
}

export const removeFave = (id) => {
    return({type:REMOVE_FAVE, payload:id})
}