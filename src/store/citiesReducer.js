import { ADD_CITY, REMOVE_CITY } from '../actions/actionTypes';

const cities = [{ name: 'London', country: 'GB', id: 2643743 }];

const citiesReducer = (state = cities, action) => {
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

