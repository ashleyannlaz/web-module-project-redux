import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import faveReducer from './faveReducer';

const rootReducer = combineReducers({
    movieReducer,
    faveReducer,
})

export default rootReducer;