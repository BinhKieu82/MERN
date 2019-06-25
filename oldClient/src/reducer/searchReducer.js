import * as types from '../constants/actionTypes'

const initialState = {
    fetched: false,
    create: false,
    delete: false,    
    users: [],
    user: {
        name: '',
        image:''
    },
    icons: [],
    error: null
};


let searchReducer = function (state = initialState, action){
  if (action.type == 'putSearchResult'){
    return{...state, searchResults: action.res}
  }
  return state
}
export default searchReducer;


