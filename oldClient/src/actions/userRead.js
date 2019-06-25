import axios from 'axios';
import * as types from '../constants/actionTypes';

export const getUser = () => {
    return (dispatch) => {
        axios.get('http://localhost:4000/users').then((res) => {
            console.log(res)
            dispatch({type: types.FETCH_USERS, payload: res.data})
            
        }).catch((err) => {
            dispatch({type: types.FETCH_USERS_ERR, payload: err})
        });        
      }
}

