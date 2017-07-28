import { combineReducers, createStore } from 'redux';
import cities from './citiesReducer';

const reducer = combineReducers({ cities });

const store = createStore(reducer);

export default store;