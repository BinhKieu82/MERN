import * as types from '../constants/actionTypes'

const initialState = {
    fetched: false,
    create: false,
    delete: false,    
    cities: [],
    city: {
        name: '',
        image:''
    },
    icons: [],
    error: null
};

const cityReducer = (state=initialState, action) =>{
    switch (action.type){
        case types.FETCH_CITIES:{
            return {...state, 
                cities: action.payload,
                fetched: true,
                create: false,
                delete: false,
                error: null
            };          
        }                
        case types.CREATE_CITIES: {
            return {...state, 
                fetched: false,
                create: true,
                delete: false,
                error: null,
                city: {
                    name: '',
                    image:''
                }
            };          
        }
        case types.EDIT_CITIES: {            
            return action.filter;                             
        }
        case types.UPDATE_CITIES:{
            return {...state, 
                cities: [...state.cities, action.payload],
                fetched: false,
                create: false,
                delete: false,
                error: null
            };          
        }
        case types.DELETE_CITIES: {
            const _id = action.payload.data._id;
            return {...state, 
                fetched: false,
                create: false,
                delete: false,
                error: null,
                cities: state.cities.filter(item => item._id !== _id)
            };
        }
        case types.FILTER_CITIES: {            
            return action.filter;                             
        }
        case types.SEARCH_CITIES: {            
            return action.filter;                             
        }
        case 'FETCH_CITIES_ERR':{
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
export default cityReducer;


