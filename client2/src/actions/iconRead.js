import axios from 'axios';
import * as types from '../constants/actionTypes';

export const getIcon = () => {
    return (dispatch) => {
        axios.get('http://localhost:4000/icons').then((res) => {
            console.log(res)
            dispatch({type: types.FETCH_ICONS, payload: res.data})
            
        }).catch((err) => {
            dispatch({type: types.FETCH_ICONS_ERR, payload: err})
        });        
      }
}

