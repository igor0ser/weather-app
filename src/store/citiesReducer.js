import { ADD_CITY, REMOVE_CITY, SIGN_IN } from '../actions/actionTypes';
import { load } from '../utils/localStorage';

const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case SIGN_IN:
      return load('cities', action.payload) || []
    case ADD_CITY:
      console.log(action.payload);
      if (state.find(({ id }) => id === action.payload.id)){
        return state;
      }
      return [action.payload, ...state];
    case REMOVE_CITY:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};

export default citiesReducer;