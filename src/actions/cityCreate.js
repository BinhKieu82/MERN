import axios from 'axios';
import cityReducer from '../reducer/cityReducer';
import * as types from '../actions/actionTypes';

export const postCity = () => {
    return (dispatch) => {
        axios.post('http://localhost:4000/cities/add', obj).then((res) => {
            console.log(res)
            dispatch({type: types.CREATE_CITIES, payload: res.data})
            
        }).catch((err) => {
            dispatch({type: 'POST_CITIES_ERR', payload: err})
        });        
      }
}