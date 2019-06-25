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

const iconReducer = (state=initialState, action) =>{
    switch (action.type){
        case types.FETCH_ICONS:{
            return {...state, 
                icons: action.payload,
                fetched: true,
                create: false,
                delete: false,
                error: null
            };          
        }
        case 'FETCH_ICONS_ERR':{
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
export default iconReducer;


