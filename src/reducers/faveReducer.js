import {TOGGLE_FAVE, ADD_FAVE, REMOVE_FAVE} from './../actions/faveActions'

const initialState = {
    favorites: [],
    displayFavorites: true,
}

const faveReducer =  (state = initialState, action ) => {
    switch(action.type) {
        case TOGGLE_FAVE: {
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            }
        } 
        case ADD_FAVE: {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        }
            
        case REMOVE_FAVE:{
            return {
                ...state,
                favorites: state.favorites.filter(item => (item.id !== action.payload))
            }
        }

        default:
            return(state);
    }
}

export default faveReducer;