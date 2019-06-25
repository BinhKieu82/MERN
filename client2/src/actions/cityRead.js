import axios from 'axios';
import * as types from '../constants/actionTypes';

export const getCity = () => {
    return (dispatch) => {
        axios.get('http://localhost:4000/cities').then((res) => {
            console.log(res)
            dispatch({type: types.FETCH_CITIES, payload: res.data})
            
        }).catch((err) => {
            dispatch({type: types.FETCH_CITIES_ERR, payload: err})
        });        
      }
}

