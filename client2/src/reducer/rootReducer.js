import { combineReducers } from 'redux'
import cityReducer from './cityReducer';
import userReducer from './userReducer';
import iconReducer from './iconReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    cities: cityReducer,
    users: userReducer,
    icons: iconReducer,
    search: searchReducer
    //other reducers: regReducer, userReducer
});

export default rootReducer;