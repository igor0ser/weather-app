import { ADD_CITY } from './actionTypes';

const addCity = city => ({
  type: ADD_CITY,
  payload: city
});

export default addCity;
