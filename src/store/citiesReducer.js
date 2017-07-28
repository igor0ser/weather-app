import { ADD_CITY, REMOVE_CITY } from '../actions/actionTypes';

const cities = ['Vilnius', 'Praga', 'Viena'];

const citiesReducer = (state = cities, action) => {
  switch (action.type) {
    case ADD_CITY:
      return [...state, action.payload];
    case REMOVE_CITY:
      return state.filter(city => city !== action.payload);
    default:
      return state;
  }
};

export default citiesReducer;

