import { REMOVE_CITY } from './actionTypes';

const removeCity = city => ({
  type: REMOVE_CITY,
  payload: city
});

export default removeCity;
