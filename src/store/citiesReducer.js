import { ADD_CITY, REMOVE_CITY } from '../actions/actionTypes';
import { load } from '../utils/localStorage';

const cities = [{ name: 'London', country: 'GB', id: 2643743 }];
const preloadedState = load('cities') || cities;

const citiesReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case ADD_CITY:
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

