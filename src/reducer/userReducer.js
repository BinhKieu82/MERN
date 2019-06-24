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

const userReducer = (state=initialState, action) =>{
    switch (action.type){
        case types.FETCH_USERS:{
            return {...state, 
                users: action.payload,
                fetched: true,
                create: false,
                delete: false,
                error: null
            };          
        }        
        case types.CREATE_USERS: {
            return {...state, 
                fetched: false,
                create: true,
                delete: false,
                error: null,
                user: {
                    name: '',
                    image:''
                }
            };          
        }
        case types.EDIT_USERS: {            
            return action.filter;                             
        }
        case types.UPDATE_USERS:{
            return {...state, 
                users: [...state.users, action.payload],
                fetched: false,
                create: false,
                delete: false,
                error: null
            };          
        }
        case types.DELETE_USERS: {
            const _id = action.payload.data._id;
            return {...state, 
                fetched: false,
                create: false,
                delete: false,
                error: null,
                users: state.users.filter(item => item._id !== _id)
            };
        }
        case types.FILTER_USERS: {            
            return action.filter;                             
        }
        case types.SEARCH_USERS: {            
            return action.filter;                             
        }
        case 'FETCH_USERS_ERR':{
            return {...state, 
                fetched: false, 
                create: false,
                delete: false,
                error: action.payload,
            };      
        }
        default:
            return state;
    }
}
export default userReducer;


