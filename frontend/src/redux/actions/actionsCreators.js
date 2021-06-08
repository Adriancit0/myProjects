/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionsTypes';

const url = ' http://localhost:4000/api/schools';

export function getAll() {
  return async (dispatch) => {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.GET_ALL,
      schoolList: data
    });
  };
}